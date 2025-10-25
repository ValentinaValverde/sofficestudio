import Link from 'next/link';

export default function Footer() {
  return (
    <div className="w-screen border border-white p-6 flex flex-row justify-between items-center z-10">
      <div className="flex flex-row gap-12">
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>

      <div className="flex flex-row gap-12">
        <Link
          href="https://type-01.com/exploring-the-captivating-ascii-realms-of-enigmatriz/"
          target="_blank"
          className="hidden md:block"
        >
          Background Image Credits
        </Link>
        <p>Est. 2025</p>
      </div>
    </div>
  );
}
