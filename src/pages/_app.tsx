import 'styles/globals.scss';
// TODO: https://lidqqq.dev/posts/serverside-hljs-in-nextjs
// どの読み込みが一番早いのか検討する
import 'highlight.js/styles/vs2015.css';
import type { AppProps } from 'next/app';
import { CommonLayout } from 'Components/Layouts/CommonLayout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CommonLayout>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </CommonLayout>
  );
}
export default MyApp;
