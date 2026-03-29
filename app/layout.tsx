import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
});

export const metadata: Metadata = {
  title: 'DiveGrid | We Build What\'s Next',
  description: 'DiveGrid is a multi-venture company that builds, scales, and backs ambitious businesses across sales & marketing, construction, and infrastructure.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body suppressHydrationWarning className="font-sans antialiased text-[#111111] bg-white">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
