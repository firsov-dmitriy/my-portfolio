import { ReactNode } from 'react';

export type TButtonVariant = 'primary' | 'secondary';
export interface IButtonProps {
  className?: string;
  children?: ReactNode;
  variant?: TButtonVariant;
}
