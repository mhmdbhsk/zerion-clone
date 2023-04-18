import { Layout } from '@/components';
import { Toaster } from 'react-hot-toast';

// Styles
import '@/styles/globals.css';

// Types
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
      <Toaster />
    </Layout>
  );
}
