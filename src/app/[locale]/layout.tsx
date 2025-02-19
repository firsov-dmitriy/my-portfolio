import './globals.css';
import { Header } from '@/widgets/Header';
import { ReactNode } from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();
  return (
    <html lang={params.locale} className="dark:bg-slate-100">
      <body>
        <NextIntlClientProvider messages={messages}>
          <Header />
          <div className="container mx-auto">{children}</div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
