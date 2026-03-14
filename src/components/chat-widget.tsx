"use client";

import { useState } from "react";

const messages = [
  {
    role: "bot" as const,
    text: "Hi! 👋 I'm the Happy Paws assistant. How can I help?",
  },
  {
    role: "user" as const,
    text: "Do you groom cats?",
  },
  {
    role: "bot" as const,
    text: "Absolutely! We offer full grooming services for cats including baths, nail trims, and de-shedding. Would you like to book an appointment?",
  },
];

function ChatBubble({ role, text }: { role: "bot" | "user"; text: string }) {
  const isBot = role === "bot";
  return (
    <div className={`flex ${isBot ? "justify-start" : "justify-end"}`}>
      <div
        className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
          isBot
            ? "bg-chat-bot text-text-primary rounded-bl-md"
            : "bg-chat-user text-white rounded-br-md"
        }`}
      >
        {text}
      </div>
    </div>
  );
}

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
      {isOpen && (
        <div className="w-80 sm:w-96 rounded-2xl border border-warm-border bg-warm-card shadow-2xl overflow-hidden animate-in">
          {/* Header */}
          <div className="bg-primary px-5 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-full bg-white/20 flex items-center justify-center text-lg">
                🐾
              </div>
              <div>
                <p className="text-sm font-semibold text-white">
                  Happy Paws Assistant
                </p>
                <p className="text-xs text-white/70">Always here to help</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/70 hover:text-white transition-colors text-xl leading-none"
              aria-label="Close chat"
            >
              &times;
            </button>
          </div>

          {/* Messages */}
          <div className="p-4 space-y-3 max-h-80 overflow-y-auto bg-warm-bg">
            {messages.map((msg, i) => (
              <ChatBubble key={i} role={msg.role} text={msg.text} />
            ))}
          </div>

          {/* Input */}
          <div className="border-t border-warm-border px-4 py-3 flex gap-2">
            <input
              type="text"
              placeholder="Type a message..."
              className="flex-1 rounded-full border border-warm-border bg-warm-bg px-4 py-2 text-sm outline-none focus:border-primary/50 transition-colors"
              readOnly
            />
            <button
              className="rounded-full bg-primary p-2.5 text-white hover:bg-primary-dark transition-colors"
              aria-label="Send message"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 2L11 13" />
                <path d="M22 2L15 22L11 13L2 9L22 2Z" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="h-14 w-14 rounded-full bg-primary text-white shadow-lg hover:bg-primary-dark hover:scale-105 transition-all flex items-center justify-center text-2xl"
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? (
          <span className="text-xl">&times;</span>
        ) : (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        )}
      </button>
    </div>
  );
}
