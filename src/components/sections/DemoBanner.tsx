'use client';

import { ExternalLink } from 'lucide-react';

export default function DemoBanner() {
  return (
    <div className="sticky top-0 z-[60] bg-primary-dark px-4 py-2 text-center">
      <a
        href="https://straywebdesign.co"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-sm font-medium text-white/90 hover:text-white transition-colors"
      >
        <span className="hidden sm:inline">This is a demo site built by</span>
        <span className="sm:hidden">Demo by</span>
        <span className="font-bold underline underline-offset-2">Stray Web Design</span>
        <ExternalLink className="h-3.5 w-3.5" />
      </a>
    </div>
  );
}
