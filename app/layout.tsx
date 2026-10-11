import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anjali Yadav — Crafting The Future of Living",
  description:
    "A luxury, forward-thinking architectural studio crafting bespoke residences, cultural landmarks, and bioclimatic spaces worldwide.",
  keywords: [
    "Architecture",
    "Luxury Residential",
    "Aura Architecture",
    "Bioclimatic Design",
    "Minimalist Architecture",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#F9F9F7] text-[#1A1A1A] font-sans antialiased selection:bg-[#1A1A1A] selection:text-[#F9F9F7]">
        {children}
      </body>
    </html>
  );
}
