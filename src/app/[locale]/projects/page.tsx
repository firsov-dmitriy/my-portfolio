import { Projects } from '@/views';
import { getProjects } from '@/shared/api';

interface PageProps {
  searchParams: Promise<{
    projectIds: number[];
  }>;
}
export default async function Page(props: PageProps) {
  const { searchParams } = props;

  const { projectIds } = await searchParams;
  const projects = await getProjects(projectIds);

  console.log(projects);
  return <Projects projects={projects} />;
}
