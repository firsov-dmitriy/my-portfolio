'use client';
import { useEffect, useRef, useState } from 'react';
import { IPopoverProps } from '@/shared/ui/Popover/types';

export const Popover = (props: IPopoverProps) => {
  const { children, content, trigger = 'click' } = props;
  const [show, setShow] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (trigger === 'click' && show) {
      const handleClickOutside = (event: MouseEvent) => {
        if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
          setShow(false);
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [show, trigger]);

  return (
    <div
      ref={wrapperRef}
      onMouseEnter={trigger === 'hover' ? () => setShow(true) : undefined}
      onMouseLeave={trigger === 'hover' ? () => setShow(false) : undefined}
      className="relative flex h-fit w-fit justify-center transition delay-300 duration-300 ease-in-out"
    >
      <div onClick={trigger === 'click' ? () => setShow(!show) : undefined}>{children}</div>
      {show && (
        <div className="absolute bottom-[100%] z-50 h-fit w-[200px] min-w-fit transition-all">
          <div className="mb-[10px] rounded bg-white p-3 shadow-[10px_30px_150px_rgba(46,38,92,0.25)]">
            {content}
          </div>
        </div>
      )}
    </div>
  );
};
