import type { Metadata } from 'next';
import { Average_Sans } from 'next/font/google';
import Link from 'next/link';
import './globals.css';

const inter = Average_Sans({
  subsets: ['latin'],
  weight: ['400'],
});

export const metadata: Metadata = {
  title: 'Caching Deep Dive 📀',
  description: 'A deep dive into the caching strategies in Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <h1 className="px-6">
            <Link href="/">Caching Deep Dive 📀</Link>
          </h1>
        </header>
        {children}
      </body>
    </html>
  );
}
