import { developmentPageData } from '@/lib/constants';

export default function FeaturedWorkSection() {
  return (
    <div className="max-w-[100vw]">
      <div className="w-full border border-white p-6 bg-black">
        <p>Featured Work</p>
      </div>

      {developmentPageData.map((data, index) => {
        return (
          <a key={index} href={data.link}>
            {/* desktop */}
            <div
              className="hidden md:block group bg-black text-white border border-white
            overflow-hidden transition-all duration-500 ease-out
            max-h-[80px] hover:max-h-[500px] hover:bg-white hover:text-black p-6"
            >
              <div className="flex justify-between items-start">
                <p>{data.title}</p>
                <p className="opacity-0 transition-all duration-500 group-hover:opacity-100 link-underline">
                  View Project
                </p>
              </div>

              {/* hidden until hover: */}
              <div className="flex justify-between items-end pt-36 opacity-0 transition-all duration-500 group-hover:opacity-100">
                <p className="text-3xl max-w-1/2">{data.description}</p>

                <img
                  src={data.imageUrl}
                  alt={data.title}
                  className="w-[360px] border border-gray-200 rounded-sm"
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
    </div>
  );
}
