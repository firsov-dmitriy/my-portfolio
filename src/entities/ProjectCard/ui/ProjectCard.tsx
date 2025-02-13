import { IProjectCardProps } from './types';
import { Popover } from '@/shared/ui';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'next-i18next';

export const ProjectCard = (props: IProjectCardProps) => {
  const { name, description, knowledge, idx } = props;
  const router = useRouter();
  const { t } = useTranslation('common');
  return (
    <div className="rounded-xl bg-zinc-100 px-2 py-4 dark:bg-zinc-200 sm:px-4 sm:py-6 lg:px-6 lg:py-8">
      <div className="grid h-full grid-rows-[60px,160px,150px] rounded lg:justify-between">
        <h4 className="text-xl text-black sm:text-2xl">{name}</h4>
        <p className="text-gray mt-2">{description}</p>
        <div>
          <div className="rounded-lg bg-zinc-300 p-4">
            <h5>Технический Стек </h5>
            <div className="mt-4 flex flex-row gap-4">
              {knowledge.map((item) => (
                <Popover key={item.name} content={item.name} trigger="hover">
                  <div className="rounded bg-zinc-100 p-2">{item.icon}</div>
                </Popover>
              ))}
            </div>
          </div>
        </div>
        <button
          onClick={() => router.push(`/projects/${idx + 1}`)}
          className="group relative inline-block w-1/3 overflow-hidden rounded-xl bg-gray-200 px-6 py-3 text-lg tracking-wide text-white transition-all duration-300 dark:bg-gray-400"
        >
          <span className="relative z-10 text-gray-800 transition-all duration-300 group-hover:tracking-wider group-hover:text-white dark:text-white">
            Подробнее
          </span>
          <span className="absolute inset-0 scale-x-0 rounded-xl bg-gray-600 transition-all duration-300 group-hover:scale-x-100"></span>
        </button>
      </div>
    </div>
  );
};
