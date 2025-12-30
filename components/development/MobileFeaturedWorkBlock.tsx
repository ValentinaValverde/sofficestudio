import type { DataType } from '@/lib/types';

type Props = {
  data: DataType;
};

export default function MobileFeaturedWorkBlock({ data }: Props) {
  return (
    <div className="p-6 border border-white space-y-6 max-w-[100vw] block md:hidden">
      <p>{data.title}</p>
      <p className="text-3xl !text-mono">{data.description}</p>
      <img
        src={data.imageUrl}
        alt={data.description}
        className="border border-gray-200 rounded-sm"
      />
    </div>
  );
}
