import { developmentPageData } from '@/lib/constants';
import DesktopFeaturedWorkBlock from '@/components/development/DesktopFeaturedWorkBlock';
import MobileFeaturedWorkBlock from '@/components/development/MobileFeaturedWorkBlock';

export default function FeaturedWorkSection() {
  return (
    <div>
      <div className="w-full border border-white p-6 bg-black">
        <p>Featured Work</p>
      </div>

      {developmentPageData.map((data, index) => {
        return (
          <a key={index} href={data.link}>
            <DesktopFeaturedWorkBlock data={data} />
            <MobileFeaturedWorkBlock data={data} />
          </a>
        );
      })}
    </div>
  );
}
