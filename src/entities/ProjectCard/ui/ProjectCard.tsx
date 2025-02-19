'use server';
import { IProjectCardProps } from './types';
import { SkillsBlock } from '@/widgets/SkillsBlock';
import { NavigateButton } from '@/shared/ui';
import { addIconToSkills } from '@/shared/model/skills';

export const ProjectCard = async (props: IProjectCardProps) => {
  const { name, description, skills, idx } = props;
  return (
    <div className="rounded-xl bg-zinc-100 px-2 py-4 dark:bg-zinc-200 sm:px-4 sm:py-6 lg:px-6 lg:py-8">
      <div className="grid h-full grid-rows-[60px,160px,150px] rounded lg:justify-between">
        <h4 className="text-xl text-black sm:text-2xl">{name}</h4>
        <p className="text-gray mt-2">{description}</p>
        <div>
          <div className="rounded-lg bg-zinc-300 p-4">
            <h5>Технический Стек </h5>
            <SkillsBlock className="mt-4 flex flex-row gap-4" skills={addIconToSkills(skills)} />
          </div>
        </div>
        <NavigateButton href={`/projects/${idx + 1}`}>Подробнее</NavigateButton>
      </div>
    </div>
  );
};
