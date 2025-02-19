import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';

const locales = ['en', 'ru'] as const; // Marking it as a constant tuple

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = await requestLocale;

  if (!locales.includes(locale as any)) notFound();

  return {
    messages: (await import(`./public/locales/${locale}/translation.json`)).default,
  };
});
