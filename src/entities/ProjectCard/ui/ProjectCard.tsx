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
      <div className="grid h-full grid-rows-[60px,250px,150px] rounded lg:justify-between">
        <h4 className="text-xl text-black sm:text-2xl">{await translateText(name)}</h4>
        <p className="text-gray mt-2">{await translateText(description)}</p>
        <div>
          <div className="rounded-lg bg-zinc-300 p-4">
            <h5>{t('experienceTitle')}</h5>
            <SkillsBlock className="mt-4 flex flex-row gap-4" skills={skills} />
          </div>
        </div>
        <NavigateButton href={`projects/${idx + 1}`}>{t('button')}</NavigateButton>
      </div>
    </div>
  );
};
