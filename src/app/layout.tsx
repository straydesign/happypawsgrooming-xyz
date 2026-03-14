import type { Metadata } from 'next';
import { Inter, Nunito } from 'next/font/google';
import { SmoothScroll } from '@/components/ui/SmoothScroll';
import { CustomCursor } from '@/components/ui/CustomCursor';
import ScrollProgressBar from '@/components/ui/ScrollProgressBar';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-family-inter',
  display: 'swap',
});

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-family-nunito',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Happy Paws Grooming — Professional Pet Grooming Services',
  description:
    'Happy Paws Grooming offers premium grooming services for dogs and cats. Bath & brush, full grooming, nail trims, de-shedding treatments, teeth brushing, and more. AI-powered booking assistant.',
  metadataBase: new URL('https://happypawsgrooming.xyz'),
  openGraph: {
    title: 'Happy Paws Grooming — Professional Pet Grooming Services',
    description:
      'Your pet deserves the best. Premium grooming with gentle hands, all-natural products, and an AI assistant to help you book.',
    url: 'https://happypawsgrooming.xyz',
    siteName: 'Happy Paws Grooming',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Happy Paws Grooming',
    description: 'Premium pet grooming services for dogs and cats.',
    url: 'https://happypawsgrooming.xyz',
    telephone: '(555) PAW-WASH',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Bark Avenue',
      addressLocality: 'Pawsville',
      addressRegion: 'PA',
      postalCode: '16501',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '16:00',
      },
    ],
    priceRange: '$12–$65',
  };

  return (
    <html lang="en" className={`${inter.variable} ${nunito.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <SmoothScroll>
          <ScrollProgressBar />
          <CustomCursor />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
