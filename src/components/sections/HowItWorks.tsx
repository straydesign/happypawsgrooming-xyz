'use client';

import { Calendar, PawPrint, PartyPopper, type LucideIcon } from 'lucide-react';
import AnimateIn from '@/components/ui/AnimateIn';
import { StaggerContainer, StaggerItem } from '@/components/ui/AnimateIn';
import GradientText from '@/components/ui/GradientText';
import { HOW_IT_WORKS } from '@/lib/constants';

const ICON_MAP: Record<string, LucideIcon> = {
  calendar: Calendar,
  'paw-print': PawPrint,
  'party-popper': PartyPopper,
};

export default function HowItWorks() {
  return (
    <section className="section-padding bg-warm-white" id="how-it-works">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <AnimateIn className="mb-14 text-center">
          <h2 className="font-display text-3xl font-bold text-text-primary sm:text-4xl md:text-5xl">
            How It <GradientText>Works</GradientText>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-text-secondary">
            Three simple steps to a happy, clean pup.
          </p>
        </AnimateIn>

        <StaggerContainer className="grid gap-8 md:grid-cols-3" staggerDelay={0.15}>
          {HOW_IT_WORKS.map((step) => {
            const Icon = ICON_MAP[step.icon];
            return (
              <StaggerItem key={step.step}>
                <div className="relative text-center">
                  {/* Step number */}
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <span className="absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-white md:left-1/2 md:right-auto md:-top-3 md:translate-x-4">
                    {step.step}
                  </span>
                  <h3 className="mb-2 font-display text-xl font-bold text-text-primary">
                    {step.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Connector line (desktop) */}
        <div className="mt-[-120px] mb-8 hidden md:block" aria-hidden="true">
          <div className="mx-auto h-px max-w-md bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        </div>
      </div>
    </section>
  );
}
