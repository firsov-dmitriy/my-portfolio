import { IProjectCardProps } from './types';
import { Popover } from '@/shared/ui';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'next-i18next';

export const ProjectCard = (props: IProjectCardProps) => {
  const { name, description, knowledge, idx } = props;
  const router = useRouter();
  const { t } = useTranslation('common');
  return (
    <div
      className="rounded-xl border-2 border-zinc-100 bg-zinc-100 px-2 py-4 transition delay-150 duration-300 ease-in-out hover:cursor-pointer hover:border-zinc-300 dark:border-zinc-600 dark:bg-zinc-200 dark:hover:border-zinc-300 sm:px-4 sm:py-6 lg:px-6 lg:py-8"
      onClick={() => router.push(`/projects/${idx + 1}`)}
    >
      <div className="flex h-full flex-col rounded bg-zinc-300 px-6 py-4 lg:justify-between">
        <h4 className="text-xl text-black sm:text-2xl">{name}</h4>
        <p className="mt-2 text-gray">{description}</p>
        <div>
          <h5 className="mt-2">{t('test')} </h5>

          <h5 className="mt-2">Стек </h5>
          <div className="mt-2 flex flex-row flex-wrap gap-4">
            {knowledge.map((item) => (
              <Popover key={item.name} content={item.name} trigger="hover">
                <div className="rounded bg-zinc-100 p-2">{item.icon}</div>
              </Popover>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
