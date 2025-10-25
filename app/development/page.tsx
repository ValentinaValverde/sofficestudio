import MainBlock from '@/components/home/MainBlock';
import Sidebar from '@/components/home/Sidebar';

export default function page() {
  return (
    <div className="flex flex-col md:flex-row justify-start flex-1 w-full">
      {/* <MainBlock />
      <Sidebar /> */}
      <div className="border border-white p-6 w-screen">
        <div className="space-y-2">
          <p className="!font-mono font-bold">DEVELOPMENT</p>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
    </div>
  );
}
