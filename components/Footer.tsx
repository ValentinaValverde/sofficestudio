import Link from 'next/link';

export default function Footer() {
  return (
    <div
      className="w-screen border border-white p-6 
    flex flex-row justify-between items-center"
    >
      <div className="flex flex-row gap-12">
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>

      <p>Est. 2025</p>
    </div>
  );
}
