"use client";

import React, { useState, useRef, useEffect } from "react";

type ChatMode = "Beginner" | "Technical" | "PM";

interface Message {
  id: string;
  role: "user" | "ai";
  content: string;
  richContent?: React.ReactNode;
}

export default function ChatPage() {
  const [mode, setMode] = useState<ChatMode>("Technical");
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const topics = ["APIs", "Caching", "Databases", "Security", "Microservices", "System Design"];

  const sampleMessages: Message[] = [
    {
      id: "1",
      role: "user",
      content: "Can you explain how a reverse proxy works? I'm trying to understand its role in our new architecture.",
    },
    {
      id: "2",
      role: "ai",
      content: "A reverse proxy acts as an intermediary for requests from clients seeking resources from servers. Here's a breakdown tailored to your current mode:",
      richContent: (
        <div className="mt-4 flex flex-col gap-4">
          <div className="bg-surface-container p-4 rounded-xl border border-outline-variant">
            <div className="flex items-center gap-2 mb-2">
              <span className="material-symbols-outlined text-secondary">lightbulb</span>
              <h4 className="font-semibold text-on-surface text-sm">Analogy</h4>
            </div>
            <p className="text-on-surface-variant text-sm">
              Think of a reverse proxy like a receptionist at a large corporate building. When visitors (clients) arrive, they talk to the receptionist. The receptionist decides which department or person (internal servers) should handle the request and forwards it, without the visitor ever needing to know the layout of the building.
            </p>
          </div>
          <div className="bg-surface-container-high rounded-xl overflow-hidden border border-outline-variant font-mono text-sm">
            <div className="bg-surface-container-highest px-4 py-2 border-b border-outline-variant flex justify-between items-center text-xs text-on-surface-variant">
              <span>Architecture Flow</span>
              <span className="material-symbols-outlined text-[16px]">account_tree</span>
            </div>
            <div className="p-4 text-on-surface-variant whitespace-pre overflow-x-auto">
              {`Client  ──>  [ Reverse Proxy ]  ──>  Server A\n                                 ──>  Server B\n                                 ──>  Server C`}
            </div>
          </div>
          <div className="flex gap-2 mt-2">
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium border border-primary/20">Load Balancing</span>
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium border border-primary/20">Security</span>
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium border border-primary/20">Caching</span>
          </div>
        </div>
      ),
    },
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [sampleMessages]);

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)] bg-surface relative">
      {/* Main Chat Area */}
      <div className="flex-1 overflow-y-auto p-4 md:p-8 scroll-smooth pb-32">
        <div className="max-w-4xl mx-auto flex flex-col gap-8">
          
          {/* Empty State / Topics (Shown at the top before scrolling far, or as part of the conversation starter) */}
          <div className="mb-8 mt-4 text-center flex flex-col items-center">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 border border-primary/20 shadow-[0_0_30px_rgba(var(--color-primary),0.15)] pulse-node">
              <span className="material-symbols-outlined text-primary text-3xl">smart_toy</span>
            </div>
            <h1 className="text-3xl font-bold text-on-surface mb-3 tracking-tight">SystemArchitect AI</h1>
            <p className="text-on-surface-variant max-w-lg mb-8">
              Ask anything about system design, architecture, or coding. Select a topic to begin or type your own question.
            </p>
            <div className="flex flex-wrap justify-center gap-2 max-w-2xl">
              {topics.map((topic) => (
                <button
                  key={topic}
                  className="px-4 py-2 rounded-full border border-outline-variant bg-surface-container hover:bg-surface-container-high hover:border-outline text-on-surface-variant hover:text-on-surface transition-all text-sm font-medium flex items-center gap-2"
                  onClick={() => setInput(`Tell me about ${topic}`)}
                >
                  <span className="material-symbols-outlined text-[18px]">search</span>
                  {topic}
                </button>
              ))}
            </div>
          </div>

          {/* Chat History */}
          <div className="flex flex-col gap-6">
            {sampleMessages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-4 ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}
              >
                {/* Avatar */}
                <div className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center border ${
                  msg.role === "user" 
                    ? "bg-surface-container-high border-outline-variant" 
                    : "bg-primary/10 border-primary/20"
                }`}>
                  <span className={`material-symbols-outlined text-xl ${
                    msg.role === "user" ? "text-on-surface" : "text-primary"
                  }`}>
                    {msg.role === "user" ? "person" : "smart_toy"}
                  </span>
                </div>
                
                {/* Message Bubble */}
                <div className={`max-w-[85%] md:max-w-[75%] flex flex-col ${
                  msg.role === "user" ? "items-end" : "items-start"
                }`}>
                  <div className={`px-5 py-3.5 rounded-2xl text-sm md:text-base leading-relaxed ${
                    msg.role === "user"
                      ? "bg-primary text-surface-container-lowest rounded-tr-sm font-medium"
                      : "bg-surface-container border border-outline-variant text-on-surface rounded-tl-sm shadow-sm"
                  }`}>
                    {msg.content}
                  </div>
                  {msg.richContent && (
                    <div className="w-full mt-2">
                      {msg.richContent}
                    </div>
                  )}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
        </div>
      </div>

      {/* Sticky Bottom Input Area */}
      <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-t from-surface via-surface/95 to-transparent backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          {/* Input Box Container */}
          <div className="glass-panel bg-surface-container border border-outline-variant rounded-2xl p-2 shadow-2xl relative overflow-hidden group focus-within:border-primary/50 focus-within:ring-1 focus-within:ring-primary/50 transition-all duration-300">
            
            {/* Top Row: Mode Toggle & Tools */}
            <div className="flex items-center justify-between px-3 py-2 border-b border-outline-variant/50 mb-2">
              <div className="flex items-center gap-1 bg-surface-container-high rounded-lg p-1 border border-outline-variant/50">
                {(["Beginner", "Technical", "PM"] as ChatMode[]).map((m) => (
                  <button
                    key={m}
                    onClick={() => setMode(m)}
                    className={`px-3 py-1 rounded-md text-xs font-semibold transition-all ${
                      mode === m
                        ? "bg-primary text-surface-container-lowest shadow-sm"
                        : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest"
                    }`}
                  >
                    {m}
                  </button>
                ))}
              </div>
              <div className="flex items-center gap-2 text-on-surface-variant">
                <button className="p-1.5 hover:bg-surface-container-high rounded-md transition-colors tooltip-trigger" title="Attach Architecture Context">
                  <span className="material-symbols-outlined text-[18px]">attachment</span>
                </button>
                <button className="p-1.5 hover:bg-surface-container-high rounded-md transition-colors tooltip-trigger" title="Project Settings">
                  <span className="material-symbols-outlined text-[18px]">tune</span>
                </button>
              </div>
            </div>

            {/* Input Area */}
            <div className="flex items-end gap-2 px-2 pb-1">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={`Ask SystemArchitect AI (${mode} mode)...`}
                className="flex-1 bg-transparent border-none outline-none resize-none min-h-[44px] max-h-32 text-on-surface placeholder:text-outline py-2.5 px-2 text-sm md:text-base focus:ring-0"
                rows={1}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    // Handle submit
                    if (input.trim()) setInput("");
                  }
                }}
              />
              <button
                className={`w-10 h-10 mb-1 rounded-xl flex items-center justify-center transition-all duration-300 ${
                  input.trim()
                    ? "bg-primary text-surface-container-lowest hover:bg-primary/90 shadow-md"
                    : "bg-surface-container-high text-outline cursor-not-allowed"
                }`}
                disabled={!input.trim()}
              >
                <span className="material-symbols-outlined">send</span>
              </button>
            </div>
            
            {/* Subtle animated gradient line at bottom */}
            <div className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-focus-within:opacity-100 transition-opacity"></div>
          </div>
          
          <div className="text-center mt-3">
            <p className="text-[10px] text-outline-variant font-medium tracking-wide uppercase">
              AI responses may contain inaccuracies. Verify critical architectural decisions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
