'use client';
import { useState, useEffect, useRef } from 'react';
import { NAV_LINKS } from '@/shared/ui/NavBar/constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import cn from 'classnames';

export const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);

  // Закрытие при клике вне меню
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  return (
    <div className="displ relative sm:block md:hidden" ref={menuRef}>
      {/* Кнопка для открытия меню */}
      <button
        className="group flex h-12 w-12 items-center justify-center rounded bg-white text-slate-800 shadow transition hover:cursor-pointer hover:shadow-lg"
        aria-pressed={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="sr-only">Menu</span>
        <svg
          className="pointer-events-none h-6 w-6 fill-current"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            className={cn(
              'origin-center -translate-y-[5px] translate-x-[7px] transition-all duration-300 ease-out',
              { 'translate-x-0 translate-y-0 rotate-[315deg]': isOpen },
            )}
            y="7"
            width="9"
            height="2"
            rx="1"
          />
          <rect
            className={cn('origin-center transition-all duration-300 ease-out', {
              'rotate-45': isOpen,
            })}
            y="7"
            width="16"
            height="2"
            rx="1"
          />
          <rect
            className={cn('origin-center translate-y-[5px] transition-all duration-300 ease-out', {
              'translate-y-0 rotate-[135deg]': isOpen,
            })}
            y="7"
            width="9"
            height="2"
            rx="1"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-2/4 mt-2 w-48 rounded-md bg-white p-4 opacity-100 shadow-lg transition-opacity duration-300">
          <ul>
            {NAV_LINKS.map(({ href, title }) => {
              const isActive = href === pathname;

              return (
                <li key={href} className="group flex flex-col hover:cursor-pointer">
                  <Link
                    href={href}
                    className={cn(
                      'p-2 group-hover:text-blue-800 dark:text-white dark:group-hover:text-blue-200',
                      { 'rounded bg-zinc-200': isActive },
                    )}
                    onClick={() => setIsOpen(false)} // Закрытие при клике на ссылку
                  >
                    {title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};
