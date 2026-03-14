'use client';

import { Star, Quote } from 'lucide-react';
import AnimateIn from '@/components/ui/AnimateIn';
import Carousel from '@/components/ui/Carousel';
import GradientText from '@/components/ui/GradientText';
import { TESTIMONIALS } from '@/lib/constants';

function TestimonialCard({
  name,
  pet,
  text,
  rating,
}: (typeof TESTIMONIALS)[number]) {
  return (
    <div className="w-[320px] rounded-2xl border border-warm-border bg-warm-card p-6 shadow-sm">
      <div className="mb-3 flex items-center gap-0.5">
        {Array.from({ length: rating }).map((_, i) => (
          <Star
            key={i}
            className="h-4 w-4 fill-amber-400 text-amber-400"
          />
        ))}
      </div>
      <Quote className="mb-2 h-5 w-5 text-primary/30" />
      <p className="mb-4 text-sm text-text-secondary leading-relaxed">
        {text}
      </p>
      <div>
        <p className="text-sm font-semibold text-text-primary">{name}</p>
        <p className="text-xs text-text-secondary">{pet}</p>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const cards = TESTIMONIALS.map((t) => (
    <TestimonialCard key={t.name} {...t} />
  ));

  return (
    <section className="section-padding bg-warm-white" id="testimonials">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <AnimateIn className="mb-12 text-center">
          <h2 className="font-display text-3xl font-bold text-text-primary sm:text-4xl md:text-5xl">
            What Pet Parents <GradientText>Say</GradientText>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-text-secondary">
            Don&apos;t just take our word for it — hear from the humans (and their happy pups).
          </p>
        </AnimateIn>

        <AnimateIn delay={0.2}>
          <Carousel items={cards} speed={35} pauseOnHover />
        </AnimateIn>
      </div>
    </section>
  );
}
