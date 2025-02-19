import { ProjectCard } from '@/entities/ProjectCard';
import { IProjectProps } from '@/views/projects/types';

export const Projects = async (props: IProjectProps) => {
  const { projects } = props;
  return (
    <div className="list-wrapper">
      <h2 className="mx-auto block text-center text-4xl font-bold">
        Проекты в которых принимал участие
      </h2>
      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:grid-rows-2">
        {projects.map((item, index) => (
          <ProjectCard key={index} {...item} idx={index} />
        ))}
      </div>
    </div>
  );
};
