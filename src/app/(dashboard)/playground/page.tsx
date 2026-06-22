"use client";

import React, { useState, useRef, useEffect } from 'react';

// --- Types ---
type Position = { x: number; y: number };
type NodeType = 'gateway' | 'service' | 'database' | 'cache' | 'queue';
type NodeStatus = 'healthy' | 'warning' | 'error';

interface ArchitectureNode {
  id: string;
  type: NodeType;
  label: string;
  icon: string;
  position: Position;
  status: NodeStatus;
  metrics: { latency: number; errorRate: number };
}

interface Connection {
  id: string;
  sourceId: string;
  targetId: string;
  animated: boolean;
}

interface DragItem {
  type: NodeType;
  label: string;
  icon: string;
}

// --- Initial Data ---
const COMPONENT_LIBRARY: DragItem[] = [
  { type: 'gateway', label: 'API Gateway', icon: 'router' },
  { type: 'service', label: 'Microservice', icon: 'deployed_code' },
  { type: 'database', label: 'Database', icon: 'database' },
  { type: 'cache', label: 'Redis Cache', icon: 'memory' },
  { type: 'queue', label: 'Message Queue', icon: 'queue' },
];

const INITIAL_NODES: ArchitectureNode[] = [
  { id: 'n1', type: 'gateway', label: 'Ingress Gateway', icon: 'router', position: { x: 80, y: 150 }, status: 'healthy', metrics: { latency: 45, errorRate: 0.01 } },
  { id: 'n2', type: 'service', label: 'Auth Service', icon: 'deployed_code', position: { x: 350, y: 100 }, status: 'healthy', metrics: { latency: 120, errorRate: 0.05 } },
  { id: 'n3', type: 'database', label: 'User DB', icon: 'database', position: { x: 620, y: 100 }, status: 'warning', metrics: { latency: 350, errorRate: 1.2 } },
  { id: 'n4', type: 'service', label: 'Product API', icon: 'deployed_code', position: { x: 350, y: 280 }, status: 'healthy', metrics: { latency: 85, errorRate: 0.0 } },
  { id: 'n5', type: 'cache', label: 'Product Cache', icon: 'memory', position: { x: 620, y: 280 }, status: 'healthy', metrics: { latency: 5, errorRate: 0 } },
];

const INITIAL_CONNECTIONS: Connection[] = [
  { id: 'c1', sourceId: 'n1', targetId: 'n2', animated: true },
  { id: 'c2', sourceId: 'n2', targetId: 'n3', animated: true },
  { id: 'c3', sourceId: 'n1', targetId: 'n4', animated: true },
  { id: 'c4', sourceId: 'n4', targetId: 'n5', animated: true },
];

export default function PlaygroundPage() {
  const [nodes, setNodes] = useState<ArchitectureNode[]>(INITIAL_NODES);
  const [connections, setConnections] = useState<Connection[]>(INITIAL_CONNECTIONS);
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);
  const [trafficVolume, setTrafficVolume] = useState<number>(50);
  
  const canvasRef = useRef<HTMLDivElement>(null);

  // --- Drag & Drop Handlers (Canvas) ---
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const typeStr = e.dataTransfer.getData('application/json');
    if (!typeStr || !canvasRef.current) return;
    
    try {
      const item: DragItem = JSON.parse(typeStr);
      const rect = canvasRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left - 80; // adjust for center of node (~160 width)
      const y = e.clientY - rect.top - 40;  // adjust for center of node (~80 height)
      
      const newNode: ArchitectureNode = {
        id: `n_${Date.now()}`,
        type: item.type,
        label: item.label,
        icon: item.icon,
        position: { x, y },
        status: 'healthy',
        metrics: { latency: Math.floor(Math.random() * 50) + 10, errorRate: 0 },
      };
      
      setNodes([...nodes, newNode]);
    } catch (err) {
      console.error("Drop failed", err);
    }
  };

  // --- Node Dragging (Moving within Canvas) ---
  const [draggingNodeId, setDraggingNodeId] = useState<string | null>(null);
  const [dragOffset, setDragOffset] = useState<Position>({ x: 0, y: 0 });

  const handleNodePointerDown = (e: React.PointerEvent, id: string) => {
    const target = e.currentTarget as HTMLElement;
    target.setPointerCapture(e.pointerId);
    
    const node = nodes.find(n => n.id === id);
    if (!node) return;
    
    setDraggingNodeId(id);
    setSelectedNodeId(id);
    setDragOffset({
      x: e.clientX - node.position.x,
      y: e.clientY - node.position.y,
    });
    e.stopPropagation();
  };

  const handleNodePointerMove = (e: React.PointerEvent) => {
    if (!draggingNodeId) return;
    
    setNodes(nodes.map(node => {
      if (node.id === draggingNodeId) {
        return {
          ...node,
          position: {
            x: e.clientX - dragOffset.x,
            y: e.clientY - dragOffset.y,
          }
        };
      }
      return node;
    }));
  };

  const handleNodePointerUp = (e: React.PointerEvent) => {
    if (draggingNodeId) {
      const target = e.currentTarget as HTMLElement;
      target.releasePointerCapture(e.pointerId);
      setDraggingNodeId(null);
    }
  };

  // --- Utility: Render Connections ---
  const renderConnections = () => {
    return connections.map(conn => {
      const source = nodes.find(n => n.id === conn.sourceId);
      const target = nodes.find(n => n.id === conn.targetId);
      if (!source || !target) return null;

      // Approximate connection points (Right of source, Left of target)
      const startX = source.position.x + 160; 
      const startY = source.position.y + 40;  
      const endX = target.position.x;
      const endY = target.position.y + 40;

      // Draw bezier curve for smooth connection
      const cp1X = startX + (endX - startX) / 2;
      const cp1Y = startY;
      const cp2X = startX + (endX - startX) / 2;
      const cp2Y = endY;
      
      const pathData = `M ${startX} ${startY} C ${cp1X} ${cp1Y}, ${cp2X} ${cp2Y}, ${endX} ${endY}`;

      return (
        <svg key={conn.id} className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
          <path
            d={pathData}
            fill="none"
            className="stroke-outline-variant stroke-[2px]"
          />
          {conn.animated && (
            <path
              d={pathData}
              fill="none"
              className="stroke-primary stroke-[3px] data-flow-line opacity-75"
              strokeDasharray="8 8"
            />
          )}
        </svg>
      );
    });
  };

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)] w-full overflow-hidden bg-background text-on-surface">
      {/* Main Content Area */}
      <div className="flex flex-1 overflow-hidden relative">
        
        {/* Left Toolbar - Components */}
        <div className="w-64 border-r border-outline-variant bg-surface-container-low flex flex-col z-20">
          <div className="p-4 border-b border-outline-variant font-medium flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">category</span>
            Component Library
          </div>
          <div className="p-4 flex flex-col gap-3 overflow-y-auto">
            {COMPONENT_LIBRARY.map((item, idx) => (
              <div
                key={idx}
                draggable
                onDragStart={(e) => {
                  e.dataTransfer.setData('application/json', JSON.stringify(item));
                  e.dataTransfer.effectAllowed = 'copy';
                }}
                className="flex items-center gap-3 p-3 rounded-md bg-surface-container border border-outline-variant cursor-grab active:cursor-grabbing hover:border-primary hover:bg-surface-container-high transition-colors"
              >
                <div className="w-8 h-8 rounded bg-primary-container/20 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-lg">{item.icon}</span>
                </div>
                <span className="text-sm font-medium">{item.label}</span>
                <span className="material-symbols-outlined ml-auto text-outline text-sm">drag_indicator</span>
              </div>
            ))}
          </div>
        </div>

        {/* Center Canvas */}
        <div 
          className="flex-1 relative overflow-hidden grid-bg z-0 bg-surface-container-lowest"
          ref={canvasRef}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          onClick={() => setSelectedNodeId(null)}
        >
          {/* Connections Layer */}
          {renderConnections()}

          {/* Nodes Layer */}
          {nodes.map(node => (
            <div
              key={node.id}
              className={`absolute flex flex-col w-[160px] rounded-lg border-2 cursor-grab active:cursor-grabbing glass-panel transition-shadow duration-200 ${
                selectedNodeId === node.id ? 'border-primary shadow-[0_0_15px_rgba(195,192,255,0.3)] z-30' : 'border-outline-variant z-10'
              } ${node.status === 'warning' ? 'pulse-node border-[var(--color-tertiary)]' : node.status === 'error' ? 'pulse-node border-error' : ''}`}
              style={{
                transform: `translate(${node.position.x}px, ${node.position.y}px)`,
                backgroundColor: 'var(--color-surface-container-high)',
              }}
              onPointerDown={(e) => handleNodePointerDown(e, node.id)}
              onPointerMove={handleNodePointerMove}
              onPointerUp={handleNodePointerUp}
              onPointerCancel={handleNodePointerUp}
              onClick={(e) => {
                e.stopPropagation();
                setSelectedNodeId(node.id);
              }}
            >
              {/* Node Header */}
              <div className="flex items-center gap-2 p-2 border-b border-outline-variant bg-surface-container-highest rounded-t-md">
                <span className={`material-symbols-outlined text-lg ${
                  node.status === 'error' ? 'text-error' : node.status === 'warning' ? 'text-[var(--color-tertiary)]' : 'text-primary'
                }`}>
                  {node.icon}
                </span>
                <span className="text-xs font-semibold truncate flex-1">{node.label}</span>
                {node.status !== 'healthy' && (
                  <span className={`material-symbols-outlined text-sm ${node.status === 'error' ? 'text-error' : 'text-[var(--color-tertiary)]'}`}>
                    warning
                  </span>
                )}
              </div>
              
              {/* Node Body / Metrics */}
              <div className="p-2 flex flex-col gap-1 text-[10px] font-mono text-on-surface-variant bg-surface-container-high rounded-b-md">
                <div className="flex justify-between items-center">
                  <span>LATENCY</span>
                  <span className={node.metrics.latency > 200 ? 'text-[var(--color-tertiary)] font-bold' : ''}>{node.metrics.latency}ms</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>ERROR</span>
                  <span className={node.metrics.errorRate > 1 ? 'text-error font-bold' : ''}>{node.metrics.errorRate}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Panel - AI Assistant */}
        <div className="w-80 border-l border-outline-variant bg-surface-container-low flex flex-col z-20">
          <div className="p-4 border-b border-outline-variant font-medium flex items-center gap-2 text-secondary">
            <span className="material-symbols-outlined">smart_toy</span>
            AI Assistant
          </div>
          <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-4">
            
            <div className="bg-surface-container rounded-lg p-3 border border-outline-variant">
              <div className="flex items-center gap-2 text-sm font-semibold mb-2 text-primary">
                <span className="material-symbols-outlined text-[18px]">lightbulb</span>
                Optimization Suggestion
              </div>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                <strong className="text-on-surface">User DB</strong> latency is spiking at {trafficVolume * 10} RPS. Consider adding a Read Replica or introducing an object cache layer to alleviate read pressure.
              </p>
              <div className="mt-3 flex gap-2">
                <button className="flex-1 bg-primary-container text-on-surface text-xs font-medium py-1.5 rounded hover:bg-primary hover:text-surface transition-colors">
                  Apply Cache
                </button>
              </div>
            </div>

            <div className="bg-surface-container rounded-lg p-3 border border-outline-variant">
              <div className="flex items-center gap-2 text-sm font-semibold mb-2 text-secondary">
                <span className="material-symbols-outlined text-[18px]">analytics</span>
                Traffic Analysis
              </div>
              <p className="text-xs text-on-surface-variant leading-relaxed mb-2">
                Current simulation shows potential bottlenecks in the <strong>Auth Service</strong> if traffic exceeds 800 RPS.
              </p>
              <div className="w-full bg-surface-container-highest rounded-full h-1.5 mb-1 overflow-hidden">
                <div className="bg-secondary h-full rounded-full transition-all duration-300" style={{ width: `${trafficVolume}%` }}></div>
              </div>
              <div className="flex justify-between text-[10px] text-outline">
                <span>0 RPS</span>
                <span>Capacity limit</span>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Panel - Simulation Controls */}
      <div className="h-48 border-t border-outline-variant bg-surface-container-low flex z-20 p-4 gap-6 shrink-0">
        
        {/* Controls */}
        <div className="flex flex-col gap-4 w-1/3">
          <div className="text-sm font-semibold flex items-center gap-2">
            <span className="material-symbols-outlined text-tertiary">tune</span>
            Simulation Controls
          </div>
          
          <div className="flex flex-col gap-2">
            <div className="flex justify-between text-xs text-on-surface-variant">
              <span>Traffic Volume</span>
              <span className="font-mono">{trafficVolume * 10} RPS</span>
            </div>
            <input 
              type="range" 
              min="10" 
              max="100" 
              value={trafficVolume}
              onChange={(e) => setTrafficVolume(Number(e.target.value))}
              className="w-full h-1.5 bg-surface-container-highest rounded-lg appearance-none cursor-pointer accent-primary"
            />
          </div>

          <div className="flex gap-3 mt-auto">
            <button className="flex-1 flex items-center justify-center gap-1 bg-primary-container text-on-surface text-sm font-medium py-2 rounded hover:bg-primary hover:text-surface transition-colors">
              <span className="material-symbols-outlined text-[18px]">play_arrow</span>
              Run Test
            </button>
            <button className="flex-1 flex items-center justify-center gap-1 bg-surface-container-high border border-outline-variant text-sm font-medium py-2 rounded hover:border-primary transition-colors">
              <span className="material-symbols-outlined text-[18px]">save</span>
              Save State
            </button>
          </div>
        </div>

        {/* Live Metrics */}
        <div className="flex-1 flex flex-col gap-4 border-l border-outline-variant pl-6">
          <div className="text-sm font-semibold flex items-center gap-2">
            <span className="material-symbols-outlined text-secondary">monitoring</span>
            Global Metrics
          </div>
          
          <div className="grid grid-cols-3 gap-4 h-full">
            <div className="bg-surface-container rounded border border-outline-variant p-3 flex flex-col justify-center">
              <span className="text-xs text-outline mb-1 font-medium">P99 LATENCY</span>
              <div className="flex items-end gap-2">
                <span className="text-2xl font-mono text-on-surface">{(145 + (trafficVolume * 0.5)).toFixed(0)}</span>
                <span className="text-xs text-on-surface-variant mb-1">ms</span>
              </div>
            </div>
            <div className="bg-surface-container rounded border border-outline-variant p-3 flex flex-col justify-center">
              <span className="text-xs text-outline mb-1 font-medium">ERROR RATE</span>
              <div className="flex items-end gap-2">
                <span className={`text-2xl font-mono ${trafficVolume > 80 ? 'text-error' : 'text-on-surface'}`}>
                  {(0.02 + (trafficVolume > 80 ? (trafficVolume - 80) * 0.1 : 0)).toFixed(2)}
                </span>
                <span className="text-xs text-on-surface-variant mb-1">%</span>
              </div>
            </div>
            <div className="bg-surface-container rounded border border-outline-variant p-3 flex flex-col justify-center">
              <span className="text-xs text-outline mb-1 font-medium">ACTIVE NODES</span>
              <div className="flex items-end gap-2">
                <span className="text-2xl font-mono text-on-surface">{nodes.length}</span>
                <span className="text-xs text-on-surface-variant mb-1">instances</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
