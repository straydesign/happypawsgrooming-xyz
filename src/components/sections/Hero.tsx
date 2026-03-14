'use client';

import { PawPrint, Calendar, Star } from 'lucide-react';
import AnimateIn from '@/components/ui/AnimateIn';
import WordReveal from '@/components/ui/WordReveal';
import CountUp from '@/components/ui/CountUp';
import MagneticButton from '@/components/ui/MagneticButton';
import GradientText from '@/components/ui/GradientText';
import { HERO_STATS } from '@/lib/constants';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-warm-white">
      {/* Parallax background elements */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-20 -right-20 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-[500px] w-[500px] rounded-full bg-primary-light/10 blur-3xl" />
        <div className="absolute top-1/3 right-1/4 h-64 w-64 rounded-full bg-primary/3 blur-2xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 pt-24 pb-20 sm:px-6 md:pt-32 md:pb-28">
        {/* Badge */}
        <AnimateIn delay={0.1}>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5">
            <PawPrint className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary-dark">
              Professional Pet Grooming
            </span>
          </div>
        </AnimateIn>

        {/* Headline */}
        <h1 className="mb-6 font-display text-5xl font-bold leading-tight tracking-tight text-text-primary sm:text-6xl md:text-7xl">
          <WordReveal text="Where Every Pet" delay={0.2} />
          <br />
          <WordReveal
            text="Leaves Happy"
            delay={0.5}
            className="text-primary"
          />
        </h1>

        {/* Subheadline */}
        <AnimateIn delay={0.8}>
          <p className="mb-10 max-w-xl text-lg text-text-secondary leading-relaxed sm:text-xl">
            Premium grooming with gentle hands, all-natural products, and a whole
            lot of love. Your furry friend deserves the <GradientText>best</GradientText>.
          </p>
        </AnimateIn>

        {/* CTAs */}
        <AnimateIn delay={1}>
          <div className="flex flex-wrap gap-4">
            <MagneticButton href="#booking" size="lg">
              <Calendar className="h-5 w-5" />
              Book Appointment
            </MagneticButton>
            <MagneticButton href="#services" variant="ghost" size="lg">
              View Services
            </MagneticButton>
          </div>
        </AnimateIn>

        {/* Stats */}
        <AnimateIn delay={1.2} className="mt-16">
          <div className="grid grid-cols-3 gap-6 max-w-lg">
            {HERO_STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-3xl font-bold text-text-primary sm:text-4xl">
                  <CountUp
                    value={stat.value}
                    suffix={stat.suffix}
                    decimals={'decimals' in stat ? stat.decimals : 0}
                  />
                </div>
                <p className="mt-1 text-xs text-text-secondary sm:text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </AnimateIn>

        {/* Floating paw prints decoration */}
        <div className="absolute bottom-8 right-8 hidden lg:block" aria-hidden="true">
          <div className="relative">
            {[0, 1, 2].map((i) => (
              <PawPrint
                key={i}
                className="absolute text-primary/10"
                style={{
                  width: 32 - i * 4,
                  height: 32 - i * 4,
                  transform: `rotate(${-15 + i * 25}deg)`,
                  top: i * 40,
                  left: i * -30,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Star decorations */}
      <div className="absolute top-20 right-16 hidden md:block" aria-hidden="true">
        <Star className="h-5 w-5 text-primary/20 fill-primary/10" />
      </div>
    </section>
  );
}
