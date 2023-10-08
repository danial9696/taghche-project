import type { AppProps } from 'next/app';

// * Global styles
import '../../styles/normalize.css';
import '../../styles/reset.css';

// * Set axios-mock-adapter in whole project
import 'src/@fake-db';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
