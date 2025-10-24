import MainBlock from '@/components/MainBlock';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col md:flex-row justify-start h-full">
        <MainBlock />
        <Sidebar />
      </div>

      <Footer />
    </div>
  );
}
