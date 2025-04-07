import './globals.css';
import { Header } from '@/widgets/Header';
import { ReactNode } from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import Head from 'next/head';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Резюме Дмитрий Фирсов',
  description:
    'Ведущий разработчик с 4+ годами опыта в веб-разработке. Специализируюсь на архитектуре, оптимизации и масштабируемых решениях. Участвовал в крупных проектах, занимался менторством, кросс-ревью и техническим руководством.',
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();
  return (
    <html lang={params?.locale} className="dark:bg-slate-100">
      <Head>
        <title>Resume</title>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:image" content="/img.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Head>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Header />
          <div className="container mx-auto">{children}</div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
