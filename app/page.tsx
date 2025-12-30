import FeaturedWorkSection from '@/components/home/FeaturedWorkSection';
import MainBlock from '@/components/home/MainBlock';
import Sidebar from '@/components/home/Sidebar';
import ContactSection from '@/components/home/ContactSection';

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col md:flex-row justify-start flex-1 w-full min-h-[82vh] max-w-[100vw]">
        <MainBlock />
        <Sidebar />
      </div>

      <FeaturedWorkSection />
      <ContactSection />
    </div>
  );
}
