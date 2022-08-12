import '../styles/global.css';

import Layout from '@src/components/layouts/main';
import ScrollObserver from '@src/utils/scrollObserver';
import { DAppProvider } from '@usedapp/core';
import type { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps, router }: AppProps) => (
  <DAppProvider config={{}}>
    <ScrollObserver>
      <Layout router={router}>
        <Component {...pageProps} />
      </Layout>
    </ScrollObserver>
  </DAppProvider>
);

export default MyApp;
