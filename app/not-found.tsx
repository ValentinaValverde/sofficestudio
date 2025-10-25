'use client';
import { useRouter } from 'next/navigation';
import { AsteriskSimple } from '@phosphor-icons/react';

export default function NotFound() {
  const router = useRouter();

  return (
    <div className=" w-full flex flex-1 flex-col justify-center items-center gap-2 p-6 border border-white">
      <div className="flex flex-row items-center">
        <span className="text-4xl font-semibold !font-mono">4</span>
        <AsteriskSimple size={32} />
        <span className="text-4xl font-semibold !font-mono">4</span>
      </div>

      <div
        onClick={() => {
          router.back();
        }}
      >
        <p>Go Back</p>
      </div>
    </div>
  );
}
