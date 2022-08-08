import Links from '@src/components/links';
import type { FC } from 'react';

const Footer: FC = () => {
  const external = Links.slice(2);
  const internal = Links.slice(0, 2);
  return (
    <div className="flex flex-col items-center bg-black py-[1ch] text-center font-Strippy text-2xl text-white">
      <div className="mb-[0.5ch] flex items-center space-x-[1ch]">
        {external}
      </div>
      {internal}
      <p className="py-2 font-SF-Pro text-[1ch] text-white opacity-[50%]">
        © 2022 Maxwell Rux. All Rights Reserved.
      </p>
    </div>
  );
};
export default Footer;
