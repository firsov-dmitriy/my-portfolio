'use server';
import { getSkills } from '@/shared/api';
import { Experience } from '@/views';
export default async function Page() {
  const skills = await getSkills();
  return <Experience skills={skills} />;
}
