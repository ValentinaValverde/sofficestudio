'use client';

import { useRouter } from 'next/navigation';

export default function GoBack() {
  const router = useRouter();

  return (
    <p onClick={() => router.back()} className="link-underline w-fit">
      Go Back
    </p>
  );
}
