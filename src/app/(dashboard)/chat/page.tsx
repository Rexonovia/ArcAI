"use client";

import React, { useState, useRef, useEffect } from "react";
import { useChat } from "ai/react";

type ChatMode = "Beginner" | "Technical" | "PM";

export default function ChatPage() {
  const [mode, setMode] = useState<ChatMode>("Technical");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: "/api/chat",
    body: { mode }
  });

  const topics = ["APIs", "Caching", "Databases", "Security", "Microservices", "System Design"];



  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="flex flex-col h-[calc(100vh-72px)] bg-surface relative overflow-hidden">
      <div className="home-noise" aria-hidden="true" />
      <div className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-primary/5 to-transparent pointer-events-none blur-3xl" />
      
      {/* Main Chat Area */}
      <div className="flex-1 overflow-y-auto p-4 md:p-8 scroll-smooth pb-32 relative z-10">
        <div className="max-w-4xl mx-auto flex flex-col gap-8">
          
          {/* Empty State */}
          <div className="mb-10 mt-8 text-center flex flex-col items-center fade-in-up">
            <div className="w-20 h-20 bg-white/[0.02] rounded-2xl flex items-center justify-center mb-6 border border-white/10 shadow-inner">
              <span className="material-symbols-outlined text-primary text-4xl drop-shadow-md">architecture</span>
            </div>
            <h1 className="text-4xl font-extrabold text-on-surface mb-4 tracking-tight drop-shadow-sm">ArcAI</h1>
            <p className="text-on-surface-variant max-w-[32rem] mb-10 mx-auto text-lg leading-relaxed">
              Ask anything about system design, architecture, or coding. Select a topic to begin or type your own question.
            </p>
            <div className="flex flex-wrap justify-center gap-3 max-w-3xl">
              {topics.map((topic) => (
                <button
                  key={topic}
                  className="px-5 py-2.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-primary/40 hover:shadow-[0_0_20px_rgba(79,70,229,0.15)] text-on-surface-variant hover:text-white backdrop-blur-md transition-all duration-300 text-sm font-semibold flex items-center gap-2 hover:-translate-y-0.5"
                  onClick={() => {
                    handleInputChange({ target: { value: `Tell me about ${topic}` } } as any);
                  }}
                >
                  <span className="material-symbols-outlined text-[18px] text-primary">search</span>
                  {topic}
                </button>
              ))}
            </div>
          </div>

          {/* Chat History */}
          <div className="flex flex-col gap-6">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-4 ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}
              >
                {/* Avatar */}
                <div className={`shrink-0 w-10 h-10 rounded-2xl flex items-center justify-center border shadow-sm ${
                  msg.role === "user" 
                    ? "bg-white/5 border-white/10" 
                    : "bg-white/[0.03] border-white/10 shadow-inner"
                }`}>
                  <span className={`material-symbols-outlined text-[20px] ${
                    msg.role === "user" ? "text-on-surface-variant" : "text-primary drop-shadow-md"
                  }`}>
                    {msg.role === "user" ? "person" : "architecture"}
                  </span>
                </div>
                
                {/* Message Bubble */}
                <div className={`max-w-[85%] md:max-w-[75%] flex flex-col ${
                  msg.role === "user" ? "items-end" : "items-start"
                }`}>
                  <div className={`px-6 py-4 rounded-3xl text-sm md:text-base leading-relaxed ${
                    msg.role === "user"
                      ? "bg-[#161520] border border-white/10 text-on-surface rounded-tr-sm shadow-lg font-medium"
                      : "glass-card bg-white/[0.03] border border-white/5 text-on-surface rounded-tl-sm shadow-sm"
                  }`}>
                    {msg.content}
                  </div>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
        </div>
      </div>

      {/* Sticky Bottom Input Area */}
      <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8 bg-gradient-to-t from-[#06050a] via-[#06050a]/90 to-transparent backdrop-blur-md z-20 pointer-events-none">
        <div className="max-w-4xl mx-auto pointer-events-auto">
          {/* Input Box Container */}
          <div className="glass-card bg-white/[0.03] border border-white/10 rounded-3xl p-2 shadow-2xl relative overflow-hidden group focus-within:border-white/20 focus-within:shadow-[0_0_30px_rgba(255,255,255,0.05)] transition-all duration-500 backdrop-blur-xl">
            
            {/* Top Row: Mode Toggle & Tools */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 mb-2">
              <div className="flex items-center gap-1 bg-black/40 rounded-xl p-1 border border-white/5">
                {(["Beginner", "Technical", "PM"] as ChatMode[]).map((m) => (
                  <button
                    key={m}
                    onClick={() => setMode(m)}
                    className={`px-4 py-1.5 rounded-lg text-[11px] font-bold uppercase tracking-wider transition-all duration-300 ${
                      mode === m
                        ? "bg-white/10 text-white border border-white/5 shadow-sm scale-100"
                        : "text-outline/70 hover:text-white hover:bg-white/5 scale-95 hover:scale-100 border border-transparent"
                    }`}
                  >
                    {m}
                  </button>
                ))}
              </div>
              <div className="flex items-center gap-2 text-outline/70">
                <button className="p-2 hover:bg-white/5 rounded-xl transition-all duration-300 hover:text-primary" title="Attach Architecture Context">
                  <span className="material-symbols-outlined text-[20px]">attachment</span>
                </button>
                <button className="p-2 hover:bg-white/5 rounded-xl transition-all duration-300 hover:text-primary" title="Project Settings">
                  <span className="material-symbols-outlined text-[20px]">tune</span>
                </button>
              </div>
            </div>

            {/* Input Area */}
            <form onSubmit={handleSubmit} className="flex items-end gap-3 px-3 pb-2">
              <textarea
                value={input}
                onChange={handleInputChange}
                placeholder={`Ask ArcAI (${mode} mode)...`}
                className="flex-1 bg-transparent border-none outline-none resize-none min-h-[48px] max-h-32 text-white placeholder:text-outline/50 py-3 px-2 text-sm md:text-base focus:ring-0 leading-relaxed font-medium"
                rows={1}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    if (input.trim()) {
                      const form = e.currentTarget.form;
                      if (form) form.requestSubmit();
                    }
                  }
                }}
              />
              <button
                type="submit"
                className={`w-12 h-12 mb-1 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                  input.trim() && !isLoading
                    ? "bg-primary/20 text-primary border border-primary/30 hover:bg-primary/30 shadow-[0_0_20px_rgba(79,70,229,0.15)] hover:shadow-[0_0_30px_rgba(79,70,229,0.25)] hover:-translate-y-0.5 active:scale-95"
                    : "bg-white/5 text-outline/50 cursor-not-allowed border border-white/5"
                }`}
                disabled={!input.trim() || isLoading}
              >
                <span className="material-symbols-outlined text-[20px]">send</span>
              </button>
            </form>
            
            {/* Subtle animated gradient line at bottom */}
            <div className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-focus-within:opacity-100 transition-opacity duration-700"></div>
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
