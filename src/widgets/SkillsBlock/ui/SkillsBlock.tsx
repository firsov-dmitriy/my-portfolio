'use client';
import { ISkillsBlockProps } from '../model/types-props';
import { Popover } from '@/shared/ui';
import Image from 'next/image';
import { useResponsive } from '@/shared/model/useIsMobile';

export const SkillsBlock = (props: ISkillsBlockProps) => {
  const { skills, className, isInfo } = props;
  const { isMobile } = useResponsive();
  const items = isInfo ? skills : skills.slice(0, 4);

  return (
    <div className={className}>
      {items.map((item) => {
        const icon = (
          <div className="rounded bg-zinc-200 p-2 dark:bg-zinc-100">
            <Image src={item.icon} alt={item.name} width={48} height={48} />
          </div>
        );

        return isMobile ? (
          <div key={item.name}>{icon}</div>
        ) : (
          <Popover key={item.name} content={item.name} trigger="hover">
            {icon}
          </Popover>
        );
      })}
    </div>
  );
};
