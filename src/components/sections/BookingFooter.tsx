'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, ExternalLink, Send, PawPrint } from 'lucide-react';
import AnimateIn from '@/components/ui/AnimateIn';
import MagneticButton from '@/components/ui/MagneticButton';
import GradientText from '@/components/ui/GradientText';
import GrainOverlay from '@/components/ui/GrainOverlay';
import { SITE } from '@/lib/constants';

export default function BookingFooter() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    pet: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="relative bg-dark-bg" id="booking">
      <GrainOverlay />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        {/* Booking section */}
        <div className="section-padding">
          <AnimateIn className="mb-12 text-center">
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl md:text-5xl">
              Ready to <GradientText>Book</GradientText>?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-white/50">
              Fill out the form and we&apos;ll get back to you within the hour.
            </p>
          </AnimateIn>

          <div className="grid gap-12 lg:grid-cols-2">
            {/* Form */}
            <AnimateIn delay={0.1}>
              {submitted ? (
                <div className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-primary/20 bg-primary/5 p-12 text-center">
                  <PawPrint className="h-12 w-12 text-primary" />
                  <h3 className="font-display text-2xl font-bold text-white">
                    We&apos;ll be in touch!
                  </h3>
                  <p className="text-white/60">
                    Thanks for reaching out. We usually respond within an hour during business hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none focus:border-primary/50 transition-colors"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none focus:border-primary/50 transition-colors"
                    />
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <input
                      type="text"
                      name="pet"
                      placeholder="Pet's Name & Breed"
                      value={formState.pet}
                      onChange={handleChange}
                      required
                      className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none focus:border-primary/50 transition-colors"
                    />
                    <select
                      name="service"
                      value={formState.service}
                      onChange={handleChange}
                      required
                      className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none focus:border-primary/50 transition-colors appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-dark-bg">Select Service</option>
                      <option value="bath" className="bg-dark-bg">Bath & Brush — $45</option>
                      <option value="groom" className="bg-dark-bg">Full Groom — $65</option>
                      <option value="nails" className="bg-dark-bg">Nail Trim — $15</option>
                      <option value="deshed" className="bg-dark-bg">De-shedding — $55</option>
                      <option value="teeth" className="bg-dark-bg">Teeth Brushing — $12</option>
                    </select>
                  </div>
                  <textarea
                    name="message"
                    placeholder="Anything we should know? (allergies, anxiety, special requests)"
                    value={formState.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none focus:border-primary/50 transition-colors resize-none"
                  />
                  <MagneticButton type="submit" size="lg" className="w-full sm:w-auto">
                    <Send className="h-4 w-4" />
                    Send Booking Request
                  </MagneticButton>
                </form>
              )}
            </AnimateIn>

            {/* Contact info */}
            <AnimateIn delay={0.2} direction="right">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">Phone</p>
                    <p className="text-sm text-white/50">{SITE.phone}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">Email</p>
                    <p className="text-sm text-white/50">{SITE.email}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">Address</p>
                    <p className="text-sm text-white/50">{SITE.address}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">Hours</p>
                    <p className="text-sm text-white/50">
                      Mon–Fri: {SITE.hours.weekday}
                    </p>
                    <p className="text-sm text-white/50">
                      Saturday: {SITE.hours.saturday}
                    </p>
                    <p className="text-sm text-white/50">
                      Sunday: {SITE.hours.sunday}
                    </p>
                  </div>
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex items-center gap-2">
              <PawPrint className="h-5 w-5 text-primary" />
              <span className="font-display text-lg font-bold text-white">
                Happy Paws
              </span>
            </div>
            <p className="text-sm text-white/40">
              Built by{' '}
              <a
                href="https://straywebdesign.co"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-primary hover:text-primary-light transition-colors"
              >
                Stray Web Design
                <ExternalLink className="h-3 w-3" />
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
