'use client';
import { IButtonProps } from './types';
import cn from 'classnames';

export const Button = ({ variant = 'primary', ...props }: IButtonProps) => {
  const { children, className } = props;

  if (variant === 'secondary') {
    return (
      <button
        className={cn(
          'max-w-40 rounded bg-slate-200 px-6 py-2 text-black hover:cursor-pointer hover:bg-opacity-80 dark:bg-slate-800 dark:text-white dark:hover:bg-opacity-80',
          className,
        )}
      >
        {children}
      </button>
    );
  }
  if (variant === 'primary') {
    return (
      <button
        className={cn(
          'max-w-40 rounded bg-indigo-200 px-6 py-2 text-black hover:cursor-pointer hover:bg-opacity-80 dark:bg-indigo-900 dark:text-white dark:hover:bg-opacity-80',
          className,
        )}
      >
        {children}
      </button>
    );
  }
};
