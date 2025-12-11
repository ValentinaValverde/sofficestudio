import FeaturedWorkSection from '@/components/home/FeaturedWorkSection';
import MainBlock from '@/components/home/MainBlock';
import Sidebar from '@/components/home/Sidebar';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col md:flex-row justify-start flex-1 w-full min-h-[82vh]">
        <MainBlock />
        <Sidebar />
      </div>

      <FeaturedWorkSection />

      <div className="border border-white p-6 w-full h-[500px] flex flex-col justify-center items-center gap-4">
        <p className="text-center">Have a cool idea?</p>
        <Link href="/contact" className="text-5xl !font-mono text-center">
          Let&apos;s chat!
        </Link>
      </div>
    </div>
  );
}
