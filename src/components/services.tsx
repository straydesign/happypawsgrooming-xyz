const services = [
  {
    name: "Bath & Brush",
    description:
      "A thorough bath with premium shampoo, blow dry, and full brush-out.",
    icon: "🛁",
    price: "From $45",
  },
  {
    name: "Full Grooming",
    description:
      "Complete grooming package including bath, haircut, nail trim, and ear cleaning.",
    icon: "✂️",
    price: "From $65",
  },
  {
    name: "Nail Trim",
    description:
      "Quick and gentle nail trimming to keep your pet comfortable and healthy.",
    icon: "💅",
    price: "From $15",
  },
  {
    name: "De-shedding",
    description:
      "Specialized treatment to reduce shedding and keep coats manageable.",
    icon: "🐕",
    price: "From $55",
  },
  {
    name: "Teeth Brushing",
    description:
      "Gentle dental care to keep your pet's teeth clean and breath fresh.",
    icon: "🦷",
    price: "From $12",
  },
] as const;

export function Services() {
  return (
    <section className="px-4 py-20 max-w-5xl mx-auto">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
          Our Services
        </h2>
        <p className="text-text-secondary text-lg max-w-lg mx-auto">
          Professional grooming tailored to your pet&apos;s needs
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <div
            key={service.name}
            className="rounded-2xl border border-warm-border bg-warm-card p-6 hover:shadow-lg hover:border-primary/30 transition-all duration-200"
          >
            <div className="text-3xl mb-4">{service.icon}</div>
            <h3 className="text-lg font-semibold text-text-primary mb-2">
              {service.name}
            </h3>
            <p className="text-text-secondary text-sm leading-relaxed mb-4">
              {service.description}
            </p>
            <p className="text-primary-dark font-semibold text-sm">
              {service.price}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
