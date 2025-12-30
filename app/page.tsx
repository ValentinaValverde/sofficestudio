import FeaturedWorkSection from '@/components/home/FeaturedWorkSection';
import ContactSection from '@/components/home/ContactSection';
import { sidebarBlockData } from '@/lib/constants';

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col md:flex-row justify-start flex-1 w-full min-h-[82vh] max-w-[100vw]">
        {/* left side */}
        <div className="w-full md:w-2/3 flex items-end border border-white p-6 h-[400px] md:h-auto">
          <h1 className="text-6xl">
            where creativity <br /> meets technology.
          </h1>
        </div>

        {/* right side */}
        <div className="w-full md:w-1/3 flex flex-col flex-1">
          {sidebarBlockData.map((data, index) => {
            return (
              <div key={index} className="flex-1 flex">
                <a href={data.link} className="w-full h-full">
                  <div className="bg-black md:bg-transparent border border-white hover:bg-white hover:text-black duration-500 flex flex-col justify-end h-full gap-2 py-16 px-6 md:p-6">
                    <h3 className="text-3xl">{data.title}</h3>
                    <p>{data.description}</p>
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </div>

      <FeaturedWorkSection />
      <ContactSection />
    </div>
  );
}
