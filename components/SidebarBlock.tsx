import Link from 'next/link';

export default function SidebarBlock({
  title,
  description,
  link,
}: {
  title: string;
  description: string;
  link: string;
}) {
  return (
    <Link href={link}>
      <div className="border border-white p-6">
        <p>{title}</p>
        <p>{description}</p>
      </div>
    </Link>
  );
}
