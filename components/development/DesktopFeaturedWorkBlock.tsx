import type { DataType } from '@/lib/types';

type Props = {
  data: DataType;
};

export default function DesktopFeaturedWorkBlock({ data }: Props) {
  return (
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

      {/* Hidden until hover: */}
      <div className="flex justify-between items-end pt-36 opacity-0 transition-all duration-500 group-hover:opacity-100">
        <p className="text-3xl max-w-1/2">
          Reimagined a full music analytics platform with modern UI, responsive
          layouts, and rebuilt core flows.
        </p>

        <img
          src={data.imageUrl}
          alt={data.description}
          className="w-[360px] border border-gray-200 rounded-sm"
        />
      </div>
    </div>
  );
}
