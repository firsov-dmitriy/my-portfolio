import { ProjectsInfo } from '@/views/projectsInfo';
import { getProjectById } from '@/shared/api';

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}
export default async function Page(props: PageProps) {
  const { params } = props;
  const { id } = await params;
  const projectById = await getProjectById(Number(id));
  return <ProjectsInfo project={projectById} />;
}
