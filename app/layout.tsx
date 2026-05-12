import type { Metadata } from 'next';
import Header from '@/src/components/Header';
import Footer from '@/src/components/Footer';
import '@/src/styles/globals.css';

export const metadata: Metadata = {
  title: 'Voice of Change Initiative (VOCI) - Empower Leaders Worldwide',
  description: 'VOCI inspires exceptional communication, authentic branding, and principled leadership for individuals and organizations across the globe.',
  keywords: 'leadership, communication, branding, personal development, global impact',
  authors: [{ name: 'Voice of Change Initiative' }],
  openGraph: {
    title: 'Voice of Change Initiative (VOCI)',
    description: 'Empowering leaders with communication, branding, and leadership programs for global impact.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-white">
        <Header />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
