import { Roboto } from 'next/font/google';
import { AppProps } from 'next/app';

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={roboto.className}>
      <Component {...pageProps} />
    </main>
  );
}
