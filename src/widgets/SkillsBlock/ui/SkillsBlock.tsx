'use server';
import { ISkillsBlockProps } from '../model/types-props';
import { Popover } from '@/shared/ui';
import Image from 'next/image';

export const SkillsBlock = async (props: ISkillsBlockProps) => {
  const { skills, className } = props;
  return (
    <div className={className}>
      {skills.map((item) => (
        <Popover key={item.name} content={item.name} trigger="hover">
          <div className="rounded bg-zinc-200 p-2 dark:bg-zinc-100">
            <Image src={item.icon} alt={item.name} width={48} height={48} />
          </div>
        </Popover>
      ))}
    </div>
  );
};
