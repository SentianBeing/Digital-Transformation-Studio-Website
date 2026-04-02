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
  icons: {
    icon: [
      { url: '/divegrid-fevicon/favicon.ico', sizes: '32x32' },
      { url: '/divegrid-fevicon/favicon.svg', type: 'image/svg+xml' },
      { url: '/divegrid-fevicon/favicon-96x96.png', type: 'image/png', sizes: '96x96' },
    ],
    apple: [
      { url: '/divegrid-fevicon/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/divegrid-fevicon/site.webmanifest',
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
