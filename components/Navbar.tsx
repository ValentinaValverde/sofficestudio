import Link from 'next/link';

export default function Navbar() {
  return (
    <div
      className="w-screen border border-white p-6 
    flex flex-row justify-between items-center"
    >
      <Link href="/">Soffice Studio</Link>

      <div className="flex flex-row gap-8">
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </div>
  );
}
