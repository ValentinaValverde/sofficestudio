import Link from 'next/link';

export default function page() {
  return (
    <div className="w-screen flex flex-col flex-1 border border-white">
      <div className="p-6 border border-white flex flex-col gap-4 ">
        <Link href="/design">Go Back</Link>
        <div className="space-y-4 py-24">
          <h1>PACKPAL AI</h1>
          <p className="text-4xl">Lorem ipsum dolor sit amet</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="border border-white hover:bg-white hover:text-black duration-500 p-6 w-full h-[200px] flex justify-center items-center">
          <p className="text-2xl">Ooga Booga</p>
        </div>

        <div className="border border-white hover:bg-white hover:text-black duration-500 p-6 w-full h-[200px] flex justify-center items-center">
          <p className="text-2xl">Ooga Booga</p>
        </div>
      </div>
    </div>
  );
}
