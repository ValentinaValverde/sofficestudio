import type { Metadata } from 'next';
import { Bricolage_Grotesque, Public_Sans } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';

const bricolageGrotesque = Bricolage_Grotesque({
  variable: '--font-bricolage-grotesque',
  subsets: ['latin'],
});

const publicSans = Public_Sans({
  variable: '--font-public-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Soffice Studio',
  description: 'Where creativity meets technology.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bricolageGrotesque.variable} ${publicSans.variable} antialiased min-h-screen flex flex-col cursor-none overflow-x-hidden`}
      >
        <CustomCursor />
        <img
          src="https://i.pinimg.com/1200x/0a/25/d4/0a25d47d0fe272749d618075e4abc880.jpg"
          alt="Soffice Studio background image"
          className="absolute w-screen h-screen object-cover opacity-25"
        />
        <Navbar />
        <main className="flex-1 flex z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
