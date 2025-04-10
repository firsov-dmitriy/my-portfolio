'use server';
import { IoMdCloudDownload } from 'react-icons/io';

import { getTranslations } from 'next-intl/server';
import { TypeText } from '@/shared/ui/TypeText';
import { DownloadButton } from '@/shared/ui';

export const Main = async () => {
  const t = await getTranslations('Main');
  const about = t('about');
  const keys = ['lead', 'mentorship', 'review', 'technical', 'refactoring'] as const;

  return (
    <div className="list-wrapper flex flex-col gap-4">
      <div className="rounded-xl bg-zinc-100 px-2 py-4 dark:bg-zinc-200 sm:px-4 sm:py-6 lg:px-6 lg:py-8">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <h4 className="text-4xl font-semibold">{t('aboutTitle')}</h4>
          <DownloadButton fileName="portfolio.pdf" fileLink="/cv.pdf">
            <div className="flex flex-row items-center justify-center gap-2">
              <IoMdCloudDownload size={32} className="text-black dark:text-white" />
              <p className="text-black dark:text-white">{t('toResume')}</p>
            </div>
          </DownloadButton>
        </div>
        <p className="mt-2 text-xl">
          <TypeText text={about} speed={20} />
        </p>
      </div>
      <div className="rounded-xl bg-zinc-100 px-2 py-4 dark:bg-zinc-200 sm:px-4 sm:py-6 lg:px-6 lg:py-8">
        <h4 className="text-4xl font-semibold">{t('roleTitle')}</h4>
        <ul className="ml-4 mt-2">
          {keys.map((key, index) => (
            <li
              key={key}
              className={`translate-y-2 animate-[fadeInUp_0.5s_ease-out_forwards] text-xl opacity-0`}
              style={{ animationDelay: `${index * 200}ms` }} // Задержка по индексу
            >
              <strong>{t(`role.${key}.title`)}:</strong> {t(`role.${key}.text`)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
