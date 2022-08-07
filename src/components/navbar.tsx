import Links from '@src/components/links';
import Link from 'next/link';
import type { FC } from 'react';

const Navbar: FC<{ path: string }> = () => {
  return (
    <nav
      className="sticky top-0 left-0 w-screen items-center justify-between bg-black px-2 py-3"
      style={{
        backdropFilter: 'blur(6px) saturate(300%)',
        WebkitBackdropFilter: 'blur(6px) saturate(300%)',
        border: '1px solid rgba(255, 255, 255, 0.015)',
        zIndex: 1201,
        display: 'block',
      }}
    >
      <div className="container mx-auto flex flex-wrap items-center justify-between px-4">
        <Link href={'/'}>
          <a>
            <div
              className="flex flex-row space-x-5"
              style={{ alignItems: 'center' }}
            >
              <img src="/assets/ESS-white.png" width={'80px'} alt="logo" />
              <span className="font-Thunderstorm text-5xl text-white">
                Eastern Standard
              </span>
            </div>
          </a>
        </Link>
        <div className="flex items-center space-x-3 font-Strippy text-4xl text-white">
          {Links}
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
