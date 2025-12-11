import { developmentPageData } from '@/lib/constants';
import Block from '@/components/development/Block';

export default function FeaturedWorkSection() {
  return (
    <div>
      <div className="w-full border border-white p-6">
        <p>Featured Work</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2">
        {developmentPageData.map((data, index) => {
          return (
            <div key={index} className="col-span-2 md:col-span-1">
              <Block
                title={data.title}
                description={data.description}
                link={data.link}
                imageUrl={data.imageUrl}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
