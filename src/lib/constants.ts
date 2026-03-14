export const SITE = {
  name: 'Happy Paws Grooming',
  url: 'https://happypawsgrooming.xyz',
  phone: '(555) PAW-WASH',
  email: 'hello@happypawsgrooming.xyz',
  address: '123 Bark Avenue, Pawsville, PA 16501',
  hours: {
    weekday: '8:00 AM – 6:00 PM',
    saturday: '9:00 AM – 4:00 PM',
    sunday: 'Closed',
  },
  tagline: 'Where Every Pet Leaves Happy',
} as const;

export const SERVICES = [
  {
    title: 'Bath & Brush',
    description: 'Full shampoo, conditioner, blow-dry, brush-out, and ear cleaning. Your pup leaves fresh and fluffy.',
    price: 45,
    icon: 'droplets',
    duration: '45 min',
  },
  {
    title: 'Full Groom',
    description: 'Everything in Bath & Brush plus a breed-specific haircut, sanitary trim, and paw pad shaping.',
    price: 65,
    icon: 'scissors',
    duration: '90 min',
  },
  {
    title: 'Nail Trim',
    description: 'Careful nail clipping and filing to a comfortable length. Quick, stress-free, and gentle.',
    price: 15,
    icon: 'heart',
    duration: '15 min',
  },
  {
    title: 'De-shedding Treatment',
    description: 'Specialized de-shedding shampoo and high-velocity blow-out to remove loose undercoat.',
    price: 55,
    icon: 'wind',
    duration: '60 min',
  },
  {
    title: 'Teeth Brushing',
    description: 'Enzymatic toothpaste and gentle brushing for fresh breath and healthier gums.',
    price: 12,
    icon: 'sparkles',
    duration: '10 min',
  },
] as const;

export const HERO_STATS = [
  { value: 500, suffix: '+', label: 'Happy Pets Groomed' },
  { value: 5.0, suffix: '★', label: 'Average Rating', decimals: 1 },
  { value: 10, suffix: '+', label: 'Years Experience' },
] as const;

export const HOW_IT_WORKS = [
  {
    step: 1,
    title: 'Book Online',
    description: 'Pick a service, choose your time, and tell us about your furry friend.',
    icon: 'calendar',
  },
  {
    step: 2,
    title: 'Drop Off',
    description: 'Bring your pet in — we\'ll greet them with treats and a belly rub.',
    icon: 'paw-print',
  },
  {
    step: 3,
    title: 'Pick Up Happy',
    description: 'Get a text when they\'re ready. Pick up a clean, happy, tail-wagging pet.',
    icon: 'party-popper',
  },
] as const;

export const TESTIMONIALS = [
  {
    name: 'Sarah M.',
    pet: 'Golden Retriever',
    text: 'My dog actually gets EXCITED to go to Happy Paws. The groomers are so gentle and patient. Max always comes back looking like a show dog!',
    rating: 5,
  },
  {
    name: 'James T.',
    pet: 'Standard Poodle',
    text: 'Best grooming in town, hands down. They know exactly how to handle my anxious poodle. The de-shedding treatment is a game-changer.',
    rating: 5,
  },
  {
    name: 'Lisa K.',
    pet: 'Shih Tzu',
    text: 'I\'ve tried every groomer in the area. Happy Paws is the only one Bella doesn\'t cry at. The team truly loves animals — you can tell.',
    rating: 5,
  },
  {
    name: 'Mike R.',
    pet: 'German Shepherd',
    text: 'Fair prices, amazing results. My German Shepherd looks incredible after every visit. The nail trim is so quick he barely notices.',
    rating: 5,
  },
  {
    name: 'Amanda W.',
    pet: 'Dachshund',
    text: 'The teeth brushing add-on is worth every penny. Oscar\'s breath used to clear a room — now he gets all the kisses. Thank you, Happy Paws!',
    rating: 5,
  },
] as const;

export const SPRING_CONFIG = {
  gentle: { stiffness: 120, damping: 14 },
  snappy: { stiffness: 300, damping: 30 },
  bouncy: { stiffness: 400, damping: 25 },
} as const;

export const EASE_SMOOTH: [number, number, number, number] = [0.25, 0.1, 0.25, 1];
