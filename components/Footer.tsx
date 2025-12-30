import Link from 'next/link';

export default function Footer() {
  return (
    <div className="w-screen border border-white p-6 flex flex-row justify-between items-center z-10">
      <div className="flex flex-row gap-12">
        <Link href="/about" className="link-underline">
          About
        </Link>
        <Link href="/contact" className="link-underline">
          Contact
        </Link>
      </div>

      <div className="flex flex-row gap-12">
        <p>Est. 2025</p>
      </div>
    </div>
  );
}
