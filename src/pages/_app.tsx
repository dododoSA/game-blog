import 'styles/globals.scss';
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
