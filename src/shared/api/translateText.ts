import { getLocale } from 'next-intl/server';

export const translateText = async (text?: string) => {
  const locale = getLocale();
  if (!text) {
    return undefined;
  }
  if ((await locale) === 'ru') {
    return text;
  }
  const response = await fetch('https://translate.api.cloud.yandex.net/translate/v2/translate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.YANDEX_API_KEY}`,
    },
    body: JSON.stringify({
      folderId: process.env.YANDEX_FOLDER_ID,
      texts: [text],
      targetLanguageCode: 'en',
    }),
  });

  const data = await response.json();
  return data.translations[0].text;
};
