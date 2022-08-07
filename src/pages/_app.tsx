import '../styles/global.css';

import Layout from '@src/components/layouts/main';
import ScrollObserver from '@src/utils/scrollObserver';
import type { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps, router }: AppProps) => (
  <ScrollObserver>
    <Layout router={router}>
      <Component {...pageProps} />
    </Layout>
  </ScrollObserver>
);

export default MyApp;
