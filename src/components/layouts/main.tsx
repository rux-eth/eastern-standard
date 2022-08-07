import { motion } from 'framer-motion';
import Head from 'next/head';
import type { Router } from 'next/router';
import type { FC, PropsWithChildren } from 'react';

import Footer from '../footer';
import Masthead from '../masthead';
import Navbar from '../navbar';

interface LayoutProps extends PropsWithChildren {
  router: Router;
}
const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -0, y: 20 },
};
const Layout: FC<LayoutProps> = ({ children, router }) => {
  return (
    <motion.article
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.4, type: 'easeInOut' }}
      style={{ position: 'relative' }}
    >
      <Head>
        <title>ESS - Home</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Maxwell Rux" />
        <meta name="twitter:site" content="@EasternSwagz" />
        <meta name="twitter:creator" content="@EasternSwagz" />
        <meta property="og:site_name" content="Eastern Standard" />
        <meta name="og:title" content="Eastern Standard" />
        <meta property="og:type" content="website" />
      </Head>
      <Navbar path={router.asPath} />
      {router.asPath === '/' && <Masthead />}
      <div className="h-screen w-screen bg-foreground">
        <div className="container mx-auto">{children}</div>
      </div>
      <Footer />
    </motion.article>
  );
};
export default Layout;
