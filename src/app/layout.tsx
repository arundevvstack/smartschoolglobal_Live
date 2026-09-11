import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Chatbot } from "@/components/ui/chatbot";

const sans = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: "Smart School AI | Building Smarter Schools",
  description: "Eliminate administrative burden and unlock the full potential of every student, teacher, and parent.",
  openGraph: {
    title: 'Smart School AI',
    description: 'The Intelligent Operating System for Modern Schools.',
    url: 'https://smartschoolglobal.com',
    siteName: 'Smart School AI',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" dir="ltr">
      <body className={`${sans.variable} font-sans antialiased min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-grow pt-16">
          {children}
        </main>
        <Footer />
        <Chatbot />
      </body>
    </html>
  );
}
