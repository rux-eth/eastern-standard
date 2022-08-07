import { ScrollContext } from '@src/utils/scrollObserver';
import Image from 'next/image';
import type { FC } from 'react';
import { useContext, useRef } from 'react';

const Title: FC = () => {
  return (
    <div className="flex flex-col items-center text-center">
      <p className="mb-[-1.2ch] font-Strippy text-[2.4ch] text-primary-main">
        Eastern Standard
      </p>
      <p className="font-Thunderstorm text-[1.5ch] text-secondary-main">
        Setting the Standard Since 2021
      </p>
      <Image
        src="/assets/ESS-color.png"
        alt="logo"
        width="200px"
        height={'200px'}
      />
      <p className="pt-2 font-SF-Pro text-[.7ch] text-white">
        Content Content Content Content Content Content Content Content Content
        Content Content Content Content Content Content Content Content Content
        Content Content Content Content Content Content Content Content Content
        Content Content Content Content Content Content Content Content Content
        Content Content Content Content Content Content Content Content
      </p>
    </div>
  );
};
const Masthead: FC = () => {
  const refContainer = useRef<HTMLDivElement>(null);
  const { scrollY } = useContext(ScrollContext);
  let progress = 0;
  const { current: elContainer } = refContainer;
  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight);
  }
  return (
    <div
      ref={refContainer}
      className="sticky top-9 -z-10 flex h-screen"
      style={{
        background: 'url(/assets/ESS-bg-wide2.png) center no-repeat',
        backgroundSize: 'cover',
        transform: `translateY(-${progress * 20}%)`,
      }}
    >
      <div
        className="absolute left-[4%] top-[15%] w-[700px] text-6xl"
        style={{
          transform: `translateY(-${progress * 40}%)`,
        }}
      >
        <Title />
      </div>
    </div>
  );
};

export default Masthead;
