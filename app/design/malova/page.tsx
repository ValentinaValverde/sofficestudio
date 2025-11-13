import Link from 'next/link';

export default function page() {
  return (
    <div className="w-screen flex flex-col flex-1 border border-white">
      <div className="p-6 border border-white flex flex-col gap-4 ">
        <Link href="/design">Go Back</Link>
        <div className="space-y-4 py-24">
          <p className="!font-mono font-bold">MALOVA DESIGNS</p>
          <p className="text-4xl">Lorem ipsum dolor sit amet</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="border border-white w-full h-[400px] flex justify-center items-center">
          <img
            src="/design/malova/malova_2.png"
            alt=""
            width="100"
            height="100"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="border border-white w-full h-full p-6 col-span-2">
          <p className="text-lg">Boogie bear!</p>
        </div>
      </div>

      <Link
        href="https://www.malovadesigns.com/"
        target="_blank"
        className="border border-white w-full h-[200px] flex justify-center items-center bg-black hover:bg-white hover:text-black duration-500"
      >
        Visit Website
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="border border-white w-full h-[400px] md:h-[600px] flex justify-center items-center">
          <img
            src="/design/malova/malova_1.png"
            alt=""
            width="100"
            height="100"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="border border-white w-full h-[400px] md:h-[600px] flex justify-center items-center">
          <img
            src="/design/malova/malova_3.png"
            alt=""
            width="100"
            height="100"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
