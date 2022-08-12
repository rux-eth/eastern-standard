import { navDrawerAtom } from '@src/store/jotai';
import { useMediaQuery } from '@src/utils/hooks/useMediaQuery';
import { Spin as Hamburger } from 'hamburger-react';
import { useAtom } from 'jotai';
import Link from 'next/link';
import type { FC } from 'react';

import Connect from './connect';
import Links from './links';

const Navbar: FC<{ path: string }> = () => {
  const [isNabDrawerOpen, setIsNabDrawerOpen] = useAtom(navDrawerAtom);
  return (
    <nav
      className="sticky top-0 left-0 w-screen items-center justify-between bg-black p-1 text-5xl md:px-3"
      style={{
        backdropFilter: 'blur(6px) saturate(300%)',
        WebkitBackdropFilter: 'blur(6px) saturate(300%)',
        border: '1px solid rgba(255, 255, 255, 0.015)',
        zIndex: 1201,
        display: 'block',
      }}
    >
      <div className=" mx-auto flex flex-wrap items-center justify-between px-4">
        <Link href={'/'}>
          <a>
            <div
              className="flex flex-row space-x-5"
              style={{ alignItems: 'center' }}
            >
              <img src="/assets/ESS-white.png" width={'80px'} alt="logo" />
              {!useMediaQuery(800) && (
                <span className="font-Thunderstorm text-white">
                  Eastern Standard
                </span>
              )}
            </div>
          </a>
        </Link>
        <div className="hidden items-center space-x-4 font-Strippy text-[1.2ch] text-white md:flex ">
          {Links}
          <div className="text-[1.1ch]">
            <Connect />
          </div>
        </div>

        <div className=" flex items-center space-x-4 text-[0.8ch] md:hidden ">
          <Connect />
          <Hamburger
            toggled={isNabDrawerOpen}
            toggle={setIsNabDrawerOpen}
            color="white"
            hideOutline
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
