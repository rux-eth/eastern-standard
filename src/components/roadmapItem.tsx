/* eslint-disable unused-imports/no-unused-vars */
import type { FC } from 'react';

export interface RoadmapItemProps {
  title: string;
  content: string;
  image?: string;
}
const RoadmapItem: FC<RoadmapItemProps> = ({ title, content }) => {
  return (
    <div className="flex w-full flex-1">
      <div className="flex justify-center align-baseline">
        <span
          className="text-[1.6rem] text-secondary-main"
          style={{
            textTransform: 'uppercase',
          }}
        >
          {title}
        </span>
      </div>
      {content && <span>{content}</span>}
    </div>
  );
};
export default RoadmapItem;
