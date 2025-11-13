import Link from 'next/link';

export default function page() {
  return (
    <div className="w-screen flex flex-col flex-1 border border-white">
      <div className="p-6 border border-white flex flex-col gap-4 ">
        <Link href="/design">Go Back</Link>
        <div className="space-y-4 py-24">
          <p className="!font-mono font-bold">CHIPPCON</p>
          <p className="text-4xl">Lorem ipsum dolor sit amet</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="border border-white w-full h-[500px] md:h-[800px] flex justify-center items-center">
          <img
            src="/design/chippcon/chippcon_tote.png"
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

      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="border border-white p-6 w-full h-full">
          <p className="text-lg">Ooga Booga</p>
        </div>

        <div className="border border-white w-full h-[500px] md:h-[800px] flex justify-center items-center">
          <img
            src="/design/chippcon/chippcon_sticker_sheet.png"
            alt=""
            width="100"
            height="100"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="border border-white flex flex-col gap-4 ">
        <img
          src="/design/chippcon/chippcon_1.png"
          alt=""
          width="100"
          height="100"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="border border-white flex flex-col gap-4 ">
        <img
          src="/design/chippcon/chippcon_2.png"
          alt=""
          width="100"
          height="100"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="border border-white flex flex-col gap-4 ">
        <img
          src="/design/chippcon/chippcon_3.png"
          alt=""
          width="100"
          height="100"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="border border-white flex flex-col gap-4 ">
        <img
          src="/design/chippcon/chippcon_4.png"
          alt=""
          width="100"
          height="100"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="border border-white flex flex-col gap-4 ">
        <img
          src="/design/chippcon/chippcon_5.png"
          alt=""
          width="100"
          height="100"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
