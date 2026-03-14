import { DemoBanner } from "@/components/demo-banner";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { ChatWidget } from "@/components/chat-widget";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <DemoBanner />
      <main className="min-h-screen">
        <Hero />
        <Services />
      </main>
      <Footer />
      <ChatWidget />
    </>
  );
}
