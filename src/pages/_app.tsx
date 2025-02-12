import { AppProps } from 'next/app';
import '@/app/globals.css';
import { Header } from '@/widgets/Header';
import { appWithTranslation } from 'next-i18next';

const App = function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Header />
      <div className="container mx-auto">
        <Component {...pageProps} />
      </div>
    </div>
  );
};

export default appWithTranslation(App);
