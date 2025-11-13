import Link from 'next/link';
import Image from 'next/image';

export default function page() {
  return (
    <div className="w-screen flex flex-col flex-1 border border-white">
      <div className="p-6 border border-white flex flex-col gap-4 ">
        <Link href="/design">Go Back</Link>
        <div className="space-y-4 py-24">
          <p className="!font-mono font-bold">PACKPAL AI</p>
          <p className="text-4xl">Lorem ipsum dolor sit amet</p>
        </div>
      </div>

      <div className="border border-white flex flex-col gap-4">
        <Image
          src="/design/packpal/packpal_sheet.png"
          alt=""
          width="100"
          height="100"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="border border-white flex flex-col gap-4 p-6">
        <p>PEOPLEEEEEE</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="border border-white w-full h-[500px] md:h-[800px] flex justify-center items-center">
          <Image
            src="/design/packpal/packpal_logos.png"
            alt=""
            width="100"
            height="100"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="border border-white p-6 w-full h-full">
          <p className="text-lg">Ooga Booga</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="border border-white w-full h-[400px] md:h-[600px] flex justify-center items-center">
          <Image
            src="/design/packpal/packpal_1.png"
            alt=""
            width="100"
            height="100"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="border border-white w-full h-[400px] md:h-[600px] flex justify-center items-center">
          <Image
            src="/design/packpal/packpal_3.png"
            alt=""
            width="100"
            height="100"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="border border-white w-full h-[400px] md:h-[600px] flex justify-center items-center">
          <Image
            src="/design/packpal/packpal_2.png"
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
