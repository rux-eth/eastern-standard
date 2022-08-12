import Title from '@src/components/title';
import { motion } from 'framer-motion';
import Head from 'next/head';
import type { FC, PropsWithChildren } from 'react';

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -0, y: 20 },
};
interface LayoutProps extends PropsWithChildren {
  title?: string;
}

const Layout: FC<LayoutProps> = ({ children, title }) => {
  const t = title ? `${title} - Rux.eth` : 'Rux.eth';
  return (
    <motion.article
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.4, type: 'easeInOut' }}
      style={{ position: 'relative' }}
    >
      <>
        {t && (
          <Head>
            <title>{t}</title>
            <meta name="twitter:title" content={t} />
            <meta property="og:title" content={t} />
          </Head>
        )}
        {title && <Title>{title}</Title>}
        {children}
      </>
    </motion.article>
  );
};

export default Layout;