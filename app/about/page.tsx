'use client';
import { AsteriskSimple } from '@phosphor-icons/react';

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row justify-start flex-1 w-full">
      <div className="w-full md:w-1/3 flex flex-row md:flex-col flex-1">
        <div className="flex-1 flex">
          <div className="border border-white p-6 flex justify-center items-center h-full w-full">
            <AsteriskSimple
              size={32}
              className="hover:rotate-180 transition-transform ease-in-out duration-600"
            />
          </div>
        </div>

        <div className="flex-1 flex">
          <div className="border border-white  h-full w-full">
            <img
              src="/valentina-valverde.png"
              alt="Photo of lead (and only) developer, Valentina Valverde"
              className="w-full h-[500px] object-cover object-[0%_30%]"
            />
          </div>
        </div>
      </div>

      <div className="w-full md:w-2/3 flex items-end border border-white p-6 h-auto">
        <h1 className="text-4xl">
          Valentina is a Design Engineer with 2+ years in experience building
          saas products and various other creative projects. With her love for
          art and eye for design, she is able to fill in the gaps between
          developers and designers. She believes communication is key in every
          relationship, and absolutely loves sandwiches.
        </h1>
      </div>
    </div>
  );
}
