'use client';

import {
  Droplets,
  Scissors,
  Heart,
  Wind,
  Sparkles,
  type LucideIcon,
} from 'lucide-react';
import AnimateIn from '@/components/ui/AnimateIn';
import { StaggerContainer, StaggerItem } from '@/components/ui/AnimateIn';
import TiltCard from '@/components/ui/TiltCard';
import GradientText from '@/components/ui/GradientText';
import { SERVICES } from '@/lib/constants';

const ICON_MAP: Record<string, LucideIcon> = {
  droplets: Droplets,
  scissors: Scissors,
  heart: Heart,
  wind: Wind,
  sparkles: Sparkles,
};

export default function Services() {
  return (
    <section className="section-padding bg-warm-white" id="services">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <AnimateIn className="mb-12 text-center">
          <h2 className="font-display text-3xl font-bold text-text-primary sm:text-4xl md:text-5xl">
            Our <GradientText>Services</GradientText>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-text-secondary">
            From a quick nail trim to a full spa day — we&apos;ve got your pup covered.
          </p>
        </AnimateIn>

        <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => {
            const Icon = ICON_MAP[service.icon];
            return (
              <StaggerItem key={service.title}>
                <TiltCard className="h-full">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-bold text-primary">
                      ${service.price}
                    </span>
                  </div>
                  <h3 className="mb-2 font-display text-lg font-bold text-text-primary">
                    {service.title}
                  </h3>
                  <p className="mb-3 text-sm text-text-secondary leading-relaxed">
                    {service.description}
                  </p>
                  <p className="text-xs text-text-secondary/70">
                    {service.duration}
                  </p>
                </TiltCard>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
