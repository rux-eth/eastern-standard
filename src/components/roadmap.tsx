import type { FC } from 'react';

import type { RoadmapItemProps } from './roadmapItem';
import RoadmapItem from './roadmapItem';
import Title from './title';

const roadmapItems: RoadmapItemProps[] = [
  {
    title: 'Merch',
    content: `Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content`,
  },
  {
    title: 'Club Roster Completion',
    content: `Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content`,
  },
  {
    title: 'Eastern Standard Arcade Opens',
    content: `Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content`,
  },
  {
    title: '$SWAG Token Drop',
    content: `Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content`,
  },
];
const Roadmap: FC = () => {
  return (
    <div
      id="roadmap"
      className="space-y-[3.5rem]"
      style={{
        textAlign: 'center',
        alignItems: 'center',
      }}
    >
      <Title>Roadmap</Title>
      {roadmapItems.map((item) => (
        <RoadmapItem
          key={item.title}
          title={item.title}
          content={item.content}
        />
      ))}
    </div>
  );
};
export default Roadmap;
