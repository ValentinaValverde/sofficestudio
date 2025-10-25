import Link from 'next/link';

export default function Block({
  title,
  description,
  link,
  imageUrl,
}: {
  title: string;
  description: string;
  link: string;
  imageUrl: string;
}) {
  return (
    <Link href={link}>
      <div className="border border-white hover:bg-white hover:text-black duration-500">
        <img
          src={imageUrl}
          alt="Project Image Url"
          className="w-full h-[200px] border-b border-white object-cover object-top"
        />
        <div className="p-6 space-y-2">
          <p className="!font-mono font-semibold">{title}</p>
          <p className="text-2xl">{description}</p>
        </div>
      </div>
    </Link>
  );
}
