import { ChatProvider } from '@/context/ChatContext';
import DemoBanner from '@/components/sections/DemoBanner';
import Hero from '@/components/sections/Hero';
import ChatShowcase from '@/components/sections/ChatShowcase';
import Services from '@/components/sections/Services';
import ParallaxReveal from '@/components/sections/ParallaxReveal';
import HowItWorks from '@/components/sections/HowItWorks';
import Testimonials from '@/components/sections/Testimonials';
import BookingFooter from '@/components/sections/BookingFooter';
import ChatWidget from '@/components/chat/ChatWidget';

export default function Home() {
  return (
    <ChatProvider>
      <DemoBanner />
      <main>
        <Hero />
        <ChatShowcase />
        <Services />
        <ParallaxReveal />
        <HowItWorks />
        <Testimonials />
        <BookingFooter />
      </main>
      <ChatWidget />
    </ChatProvider>
  );
}
