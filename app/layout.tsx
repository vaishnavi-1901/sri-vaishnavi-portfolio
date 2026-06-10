import type { Metadata } from 'next';
import { Space_Grotesk, Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['300', '400', '500', '600', '700'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['300', '400', '500', '600'],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '500'],
});

export const metadata: Metadata = {
  title: 'Sri Vaishnavi Inukonda — AI & Full-Stack Developer',
  description:
    'B.Tech Computer Science student passionate about AI, Machine Learning, and Full-Stack Development. Building impactful solutions that solve real-world problems.',
  keywords: [
    'Sri Vaishnavi Inukonda',
    'AI Developer',
    'Full-Stack Developer',
    'React',
    'Python',
    'Machine Learning',
    'Portfolio',
  ],
  authors: [{ name: 'Sri Vaishnavi Inukonda' }],
  openGraph: {
    title: 'Sri Vaishnavi Inukonda — AI & Full-Stack Developer',
    description: 'Crafting intelligent systems where code meets creativity.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
