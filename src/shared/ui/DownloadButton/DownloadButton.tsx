'use client';

import { PropsWithChildren } from 'react';
import { IDownloadButtonProps } from './types';

export const DownloadButton = (props: PropsWithChildren<IDownloadButtonProps>) => {
  const { fileLink, fileName, children } = props;
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = fileLink;
    link.download = fileName;
    link.click();
  };

  return (
    <button
      onClick={handleDownload}
      className="max-w-80 rounded bg-gray-200 p-2 text-white hover:scale-105 dark:bg-neutral-700 dark:text-white"
    >
      {children}
    </button>
  );
};
