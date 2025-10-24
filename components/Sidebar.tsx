import SidebarBlock from './SidebarBlock';
import { sidebarBlockData } from '@/lib/constants';

export default function Sidebar() {
  return (
    <div className="w-full md:w-1/3 h-auto border border-white ">
      {sidebarBlockData.map((data, i) => {
        return (
          <div key={i}>
            <SidebarBlock
              title={data.title}
              description={data.description}
              link={data.link}
            />
          </div>
        );
      })}
    </div>
  );
}
