'use client';

export default function ParallaxReveal() {
  return (
    <div className="relative h-[40vh] md:h-[50vh] overflow-hidden">
      {/* Fixed background image effect using CSS */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=1920&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
        role="img"
        aria-label="Happy golden retriever enjoying grooming"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30" />
      {/* Content overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <p className="font-display text-3xl font-bold text-white drop-shadow-lg sm:text-4xl md:text-5xl text-center px-4">
          Because they deserve it
        </p>
      </div>
    </div>
  );
}
