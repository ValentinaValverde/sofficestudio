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
    <Link href={link} className="w-full h-full">
      <div className="border border-white hover:bg-white hover:text-black duration-500 flex flex-col justify-end h-full gap-2 py-16 px-6 md:p-6">
        <h3 className="text-3xl">{title}</h3>
        <p>{description}</p>
      </div>
    </Link>
  );
}
