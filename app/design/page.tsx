import Link from 'next/link';
import Block from '@/components/development/Block';
import { designPageData } from '@/lib/constants';

export default function page() {
  return (
    <div className="w-screen flex flex-col flex-1 border border-white">
      <div className="space-y-2 p-6">
        <p className="!font-mono font-bold">DESIGN</p>
        <p className="">Lorem ipsum dolor sit amet.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2">
        {designPageData.map((data, index) => {
          return (
            <div key={index}>
              <Link href={data.link}>
                <div
                  className="group bg-cover bg-center border border-white h-[300px] w-full flex justify-center items-center relative"
                  style={{ backgroundImage: `url(${data.imageUrl})` }}
                >
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <p className="relative z-10 text-black opacity-0 group-hover:opacity-100 transition-all duration-500 !font-mono text-3xl">
                    {data.title}
                  </p>
                </div>
              </Link>
            </div>
          );
        })}

        {/* <Link href="/contact">
          <div className="border border-white hover:bg-white hover:text-black duration-500 p-6 w-full h-full flex justify-center items-center">
            <p className="text-2xl">Let&apos;s add your next project!</p>
          </div>
        </Link> */}
      </div>
    </div>
  );
}
