import { ISkillCardProps } from './types';
import { NavigateButton } from '@/shared/ui';
import Image from 'next/image';

export const SkillCard = (props: ISkillCardProps) => {
  const { skill } = props;
  const params = new URLSearchParams();
  skill.project_ids?.forEach((id) => params.append('projectIds', id));

  const href = `/projects?${params.toString()}`;
  return (
    <div className="skill-card grid grid-rows-[60px,80px,60px] rounded-lg bg-zinc-100 p-4 shadow-md dark:bg-zinc-200">
      <div className="flex flex-row items-center gap-4">
        {skill.icon && <Image src={skill.icon} alt={skill.name} width={56} height={56} />}
        <h2 className="text-xl font-semibold text-gray-900">{skill.name}</h2>
      </div>
      <p className="mt-2 text-base text-gray-800">{skill.description}</p>

      <div className="projects mt-4">
        <NavigateButton disabled={!Boolean(skill.project_ids)} href={href} className="w-full">
          Перейти к проектам
        </NavigateButton>
      </div>
    </div>
  );
};
