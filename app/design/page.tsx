import Link from 'next/link';
import Block from '../../components/development/Block';
import { designPageData } from '@/lib/constants';

export default function page() {
  return (
    <div className="w-screen flex flex-col flex-1 border border-white">
      <div className="space-y-4 py-24 p-6">
        <p className="!font-mono font-bold">DESIGN</p>
        <p className="text-3xl">Visual identities crafted with intention.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2">
        {designPageData.map((data, index) => {
          return (
            <div key={index} className="col-span-2 md:col-span-1">
              <Block
                title={data.title}
                description={data.description}
                link={data.link}
                imageUrl={data.imageUrl}
              />
            </div>
          );
        })}

        <Link href="/contact" className="col-span-2 h-[200px]">
          <div className="border border-white hover:bg-white hover:text-black duration-500 p-6 w-full h-full flex justify-center items-center">
            <p className="text-2xl">Let&apos;s add your next project!</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
