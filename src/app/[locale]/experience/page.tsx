'use server';
import { getSkills } from '@/shared/api';
import { Skills } from '@/views';

export default async function Page() {
  const skills = await getSkills();

  return <Skills skills={skills} />;
}
