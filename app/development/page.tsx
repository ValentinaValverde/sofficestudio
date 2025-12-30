import { developmentPageData } from '@/lib/constants';

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
            <div
              className="group bg-black text-white border border-white
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
          </a>
        );
      })}

      {/* <Link href="/contact" className="col-span-2">
        <div className="border border-white hover:bg-white hover:text-black duration-500 p-6 w-full h-full flex justify-center items-center  py-24">
          <p className="text-2xl !font-mono italic">
            Let&apos;s add your next project!
          </p>
        </div>
      </Link> */}
    </div>
  );
}
