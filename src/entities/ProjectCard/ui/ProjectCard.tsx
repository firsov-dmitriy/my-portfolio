'use server';
import { IProjectCardProps } from './types';
import { SkillsBlock } from '@/widgets/SkillsBlock';
import { NavigateButton } from '@/shared/ui';
import { getTranslations } from 'next-intl/server';
import { translateText } from '@/shared/api';

export const ProjectCard = async (props: IProjectCardProps) => {
  const { name, description, skills, idx } = props;

  const t = await getTranslations('Projects');

  return (
    <div className="rounded-xl bg-zinc-100 px-2 py-4 dark:bg-zinc-200 sm:px-4 sm:py-6 lg:px-6 lg:py-8">
      <div className="h-full rounded md:grid md:justify-between lg:grid-rows-[60px_250px_150px] xl:grid-rows-[60px_150px_150px]">
        <h4 className="text-xl text-black sm:text-2xl">{await translateText(name)}</h4>
        <p className="text-gray mt-2">{await translateText(description)}</p>
        <div className="mt-2">
          <div className="rounded-lg bg-zinc-300 p-4">
            <h5>{t('experienceTitle')}</h5>
            <SkillsBlock className="flex flex-row flex-wrap gap-4 sm:mt-4" skills={skills} />
          </div>
        </div>
        <NavigateButton className="mt-2" href={`projects/${idx + 1}`}>
          {t('button')}
        </NavigateButton>
      </div>
    </div>
  );
};
