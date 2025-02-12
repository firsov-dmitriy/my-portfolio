import { ReactNode } from 'react';

export interface IPopoverProps {
  children?: ReactNode;
  content: ReactNode;
  trigger: 'click' | 'hover';
}
