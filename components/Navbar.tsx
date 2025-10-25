import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="w-screen border border-white p-6 text-center">
      <Link href="/" className="!font-mono">
        Soffice Studio
      </Link>
    </div>
  );
}
