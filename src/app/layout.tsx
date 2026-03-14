import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Happy Paws Grooming — Professional Pet Grooming Services",
  description:
    "Happy Paws Grooming offers professional grooming services for dogs and cats. Bath & brush, full grooming, nail trims, de-shedding, and more.",
  metadataBase: new URL("https://happypawsgrooming.xyz"),
  openGraph: {
    title: "Happy Paws Grooming — Professional Pet Grooming Services",
    description:
      "Your pet deserves the best. Professional grooming services for dogs and cats.",
    url: "https://happypawsgrooming.xyz",
    siteName: "Happy Paws Grooming",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
