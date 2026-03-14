'use client';

import { Bot, Zap, Clock, MessageSquare } from 'lucide-react';
import AnimateIn from '@/components/ui/AnimateIn';
import GradientText from '@/components/ui/GradientText';
import GrainOverlay from '@/components/ui/GrainOverlay';
import ChatPanel from '@/components/chat/ChatPanel';

const FEATURES = [
  {
    icon: Zap,
    title: 'Instant Answers',
    description: 'Get pricing, availability, and service details in seconds.',
  },
  {
    icon: Clock,
    title: 'Available 24/7',
    description: 'Ask questions any time — even outside business hours.',
  },
  {
    icon: MessageSquare,
    title: 'Natural Conversation',
    description: 'Chat naturally — Pawly understands context and follow-ups.',
  },
];

export default function ChatShowcase() {
  return (
    <section className="relative overflow-hidden bg-dark-bg section-padding" id="ai-assistant">
      <GrainOverlay />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left — Value prop */}
          <div>
            <AnimateIn>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5">
                <Bot className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">
                  AI-Powered
                </span>
              </div>
            </AnimateIn>

            <AnimateIn delay={0.1}>
              <h2 className="mb-4 font-display text-3xl font-bold text-white sm:text-4xl md:text-5xl">
                Meet <GradientText>Pawly</GradientText>,<br />
                Your AI Grooming Assistant
              </h2>
            </AnimateIn>

            <AnimateIn delay={0.2}>
              <p className="mb-8 max-w-md text-lg text-white/60 leading-relaxed">
                Got questions about our services? Pawly knows everything —
                pricing, policies, scheduling, and pet care tips. Try it out.
              </p>
            </AnimateIn>

            <div className="space-y-5">
              {FEATURES.map((feature, i) => (
                <AnimateIn key={feature.title} delay={0.3 + i * 0.1} direction="left">
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                      <feature.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-white">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-white/50">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>

          {/* Right — Live chat panel */}
          <AnimateIn delay={0.3} direction="right">
            <div className="relative">
              {/* Device frame glow */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-b from-primary/20 to-primary/5 blur-lg" />
              <ChatPanel className="relative" showSuggestions />
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
