export function Hero() {
  return (
    <section className="px-4 py-24 md:py-32 text-center max-w-3xl mx-auto">
      <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary-dark mb-8">
        <span className="text-lg">🐾</span>
        Professional Pet Grooming
      </div>
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-text-primary mb-6">
        Happy Paws Grooming
      </h1>
      <p className="text-xl md:text-2xl text-text-secondary max-w-xl mx-auto mb-10">
        Your Pet Deserves the Best
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3.5 text-base font-semibold text-white shadow-sm hover:bg-primary-dark transition-colors">
          Book an Appointment
        </button>
        <button className="inline-flex items-center justify-center rounded-full border-2 border-warm-border bg-warm-card px-8 py-3.5 text-base font-semibold text-text-primary hover:border-primary/40 transition-colors">
          View Services
        </button>
      </div>
    </section>
  );
}
