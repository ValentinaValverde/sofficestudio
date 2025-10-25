import MainBlock from '@/components/home/MainBlock';
import Sidebar from '@/components/home/Sidebar';

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row justify-start flex-1 w-full">
      <MainBlock />
      <Sidebar />
    </div>
  );
}
