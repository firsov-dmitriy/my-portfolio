'use client';
import { INavigateButtonProps } from './types';
import cn from 'classnames';
import { useRouter } from 'next/navigation';

export const NavigateButton = (props: INavigateButtonProps) => {
  const { children, href, disabled, className, ...buttonProps } = props;
  const { push } = useRouter();

  const handleClick = () => {
    if (!disabled) {
      push(href);
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className={cn(
        `group relative inline-block w-1/3 overflow-hidden rounded-xl px-6 py-3 text-lg tracking-wide text-white transition-all duration-300 dark:bg-gray-400 ${disabled ? 'cursor-not-allowed bg-gray-300' : 'bg-gray-200 hover:bg-gray-300'} `,
        className,
      )}
      {...buttonProps}
    >
      <span
        className={`relative z-10 transition-all duration-300 group-hover:tracking-wider group-hover:text-white ${disabled ? 'text-gray-500' : 'text-gray-800'} `}
      >
        {children}
      </span>
      <span
        className={`absolute inset-0 scale-x-0 rounded-xl bg-gray-600 transition-all duration-300 group-hover:scale-x-100 ${disabled ? 'bg-gray-400' : ''} `}
      ></span>
    </button>
  );
};
