import SidebarBlock from './SidebarBlock';
import { sidebarBlockData } from '@/lib/constants';

export default function Sidebar() {
  return (
    <div className="w-full md:w-1/3 flex flex-row md:flex-col flex-1">
      {sidebarBlockData.map((data, i) => {
        return (
          <div key={i} className="flex-1 flex">
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
