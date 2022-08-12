import Links from '@src/components/links';
import { navDrawerAtom } from '@src/store/jotai';
import { Spin as Hamburger } from 'hamburger-react';
import { useAtom } from 'jotai';
import Link from 'next/link';
import type { FC } from 'react';

import Connect from './connect';

const Navbar: FC<{ path: string }> = () => {
  const [isNabDrawerOpen, setIsNabDrawerOpen] = useAtom(navDrawerAtom);
  return (
    <nav
      className="sticky top-0 left-0 w-screen items-center justify-between bg-black px-[2ch] text-5xl"
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
              <span className="hidden font-Thunderstorm text-white md:flex">
                Eastern Standard
              </span>
              <span className="font-Thunderstorm text-white md:hidden">
                ESS
              </span>
            </div>
          </a>
        </Link>
        <div className="hidden items-center space-x-4 font-Strippy text-[1.2ch] text-white md:flex">
          {Links}
          <div className="text-[1.1ch]">
            <Connect />
          </div>
        </div>
        <div className="flex items-center space-x-4 text-[0.8ch] md:hidden">
          <Connect />
          <Hamburger
            toggled={isNabDrawerOpen}
            toggle={setIsNabDrawerOpen}
            color="white"
            hideOutline
          />
        </div>
        {/* 
        <Stack
                    direction="row"
                    spacing={1.2}
                    alignItems="center"
                    sx={{ [theme.breakpoints.up('md')]: { display: 'none' } }}
                >
                    <Button
                        onClick={!active ? () => activateBrowserWallet() : undefined}
                        color="primary"
                        variant="contained"
                        disabled={active}
                    >
                        {active ? (
                            <Typography
                                color="primary"
                                fontFamily="SF Pro Display"
                                sx={{
                                    whiteSpace: 'nowrap',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    maxWidth: '14ch',
                                }}
                            >
                                {ens ?? account}
                            </Typography>
                        ) : (
                            'Connect Wallet'
                        )}
                    </Button>
                    <Hamburger
                        toggled={isNavDrawerOpen}
                        toggle={setIsNavDrawerOpen}
                        color={theme.palette.primary.main}
                        hideOutline
                    />
                </Stack>
 */}
      </div>
    </nav>
  );
};
export default Navbar;
