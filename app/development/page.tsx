import { developmentPageData } from '@/lib/constants';
import ContactSection from '@/components/home/ContactSection';

export default function page() {
  return (
    <div className="w-screen flex flex-col flex-1 border border-white">
      <div className="space-y-4 py-24 p-6">
        <p className="!font-mono font-bold">DEVELOPMENT</p>
        <p className="text-3xl">Digital products that scale.</p>
      </div>

      {developmentPageData.map((data, index) => {
        return (
          <a key={index} href={data.link}>
            {/* desktop */}
            <div
              className="hidden md:block group bg-black text-white border border-white
                transition-all duration-500 ease-out
                h-auto hover:bg-white hover:text-black p-6
                flex justify-between items-stretch"
            >
              <div className="w-1/2 min-h-full flex flex-col justify-between">
                <p>{data.title}</p>
                <p className="text-3xl max-w-2/3">{data.description}</p>
              </div>

              <div className="w-1/2 flex justify-end">
                <img
                  src={data.imageUrl}
                  alt={data.description}
                  className="w-full border border-gray-200 rounded-sm"
                />
              </div>
            </div>

            {/* mobile */}
            <div className="p-6 border border-white space-y-6 max-w-[100vw] block md:hidden">
              <p>{data.title}</p>
              <p className="text-3xl !text-mono">{data.description}</p>
              <img
                src={data.imageUrl}
                alt={data.description}
                className="border border-gray-200 rounded-sm"
              />
            </div>
          </a>
        );
      })}

      <ContactSection />
    </div>
  );
}
