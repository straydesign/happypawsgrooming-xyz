'use client';

import { useState, useRef, useEffect } from 'react';
import { Send, Bot, User } from 'lucide-react';
import { useChatContext } from '@/context/ChatContext';
import { SUGGESTED_QUESTIONS } from '@/lib/chat-config';
import { cn } from '@/lib/utils';

interface ChatPanelProps {
  className?: string;
  showSuggestions?: boolean;
  compact?: boolean;
}

export default function ChatPanel({
  className = '',
  showSuggestions = true,
  compact = false,
}: ChatPanelProps) {
  const { messages, isStreaming, error, sendMessage } = useChatContext();
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isStreaming) return;
    const msg = input;
    setInput('');
    await sendMessage(msg);
  };

  const handleSuggestion = async (question: string) => {
    if (isStreaming) return;
    await sendMessage(question);
  };

  return (
    <div
      className={cn(
        'flex flex-col rounded-2xl border border-white/10 bg-[#111] overflow-hidden',
        compact ? 'h-[420px]' : 'h-[520px]',
        className
      )}
    >
      {/* Header */}
      <div className="flex items-center gap-3 border-b border-white/10 px-4 py-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20">
          <Bot className="h-4 w-4 text-primary" />
        </div>
        <div>
          <p className="text-sm font-semibold text-white">Pawly</p>
          <p className="text-xs text-white/50">AI Grooming Assistant</p>
        </div>
        <div className="ml-auto flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
          <span className="text-xs text-white/50">Online</span>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
        {messages.length === 0 && (
          <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Bot className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-sm font-medium text-white/80">
                Hi! I&apos;m Pawly
              </p>
              <p className="text-xs text-white/40 mt-1">
                Ask me about our grooming services, prices, or book an appointment.
              </p>
            </div>
            {showSuggestions && (
              <div className="flex flex-wrap gap-2 mt-2 justify-center">
                {SUGGESTED_QUESTIONS.map((q) => (
                  <button
                    key={q}
                    type="button"
                    onClick={() => handleSuggestion(q)}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/70 transition-colors hover:bg-primary/20 hover:text-primary hover:border-primary/30 cursor-pointer"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        {messages.map((message) => (
          <div
            key={message.id}
            className={cn(
              'flex gap-2.5',
              message.role === 'user' ? 'justify-end' : 'justify-start'
            )}
          >
            {message.role === 'assistant' && (
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/20 mt-0.5">
                <Bot className="h-3.5 w-3.5 text-primary" />
              </div>
            )}
            <div
              className={cn(
                'max-w-[80%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed',
                message.role === 'user'
                  ? 'bg-primary text-white rounded-br-md'
                  : 'bg-white/8 text-white/90 rounded-bl-md'
              )}
            >
              {message.content}
              {message.role === 'assistant' && isStreaming && message.content === '' && (
                <div className="flex gap-1 py-1">
                  <span className="typing-dot" />
                  <span className="typing-dot" />
                  <span className="typing-dot" />
                </div>
              )}
            </div>
            {message.role === 'user' && (
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary mt-0.5">
                <User className="h-3.5 w-3.5 text-white" />
              </div>
            )}
          </div>
        ))}

        {error && (
          <div className="mx-auto max-w-[80%] rounded-xl bg-red-500/10 border border-red-500/20 px-3 py-2 text-xs text-red-400 text-center">
            {error}
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <form
        onSubmit={handleSubmit}
        className="flex items-center gap-2 border-t border-white/10 px-4 py-3"
      >
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about our services..."
          className="flex-1 bg-transparent text-sm text-white placeholder-white/30 outline-none"
          disabled={isStreaming}
        />
        <button
          type="submit"
          disabled={!input.trim() || isStreaming}
          className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white transition-opacity disabled:opacity-30 cursor-pointer hover:bg-primary/80"
          aria-label="Send message"
        >
          <Send className="h-3.5 w-3.5" />
        </button>
      </form>
    </div>
  );
}
