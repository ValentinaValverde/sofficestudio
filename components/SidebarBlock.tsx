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
      <div className="border border-white p-6 hover:bg-white hover:text-black duration-500 flex flex-col justify-end h-[300px]">
        <p>{title}</p>
        <p>{description}</p>
      </div>
    </Link>
  );
}
