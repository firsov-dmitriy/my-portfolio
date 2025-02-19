import { SkillsBlock } from '@/widgets/SkillsBlock';
import { IProjectsInfoProps } from './types';
import { addIconToSkills } from '@/shared/model/skills';
import { Achievements } from '@/widgets/Achievements';

export const ProjectsInfo = (props: IProjectsInfoProps) => {
  const { name, description, skills, teams, results } = props.project;

  return (
    <div className="container">
      <div className="flex flex-col gap-y-4 bg-zinc-50 p-10 dark:bg-zinc-400">
        <div className="default-card">
          <h2 className="text-xl font-bold md:text-2xl lg:text-3xl">{name}</h2>
          <h3 className="mt-2 text-base font-bold md:text-xl">Описание</h3>
          <p className="text-base text-gray-700 md:text-xl">{description}</p>
        </div>

        <div className="default-card">
          <h3 className="text-base font-bold md:text-xl">Команда проекта</h3>
          <ul className="ml-4 list-disc text-base text-gray-700 md:text-xl">
            {teams.map(({ name, count }) => (
              <li key={name}>
                {name} - {count}
              </li>
            ))}
          </ul>
        </div>
        <div className="default-card">
          <h3 className="text-base font-bold md:text-xl">Результат</h3>
          <Achievements achievements={results} />
        </div>

        <div className="default-card">
          <h3 className="text-xl font-bold">Технический стек</h3>
          <SkillsBlock
            skills={skills}
            className="mt-2 flex flex-row flex-wrap gap-4 md:flex-nowrap"
          />
        </div>
      </div>
    </div>
  );
};
