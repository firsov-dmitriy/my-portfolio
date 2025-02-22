'use client';
import { useState, useEffect, useRef } from 'react';
import { NAV_LINKS } from '@/shared/ui/NavBar/constants';
import cn from 'classnames';
import { useTranslations } from 'next-intl';
import { LocaleSwitcher } from '@/features/LocaleSwitcher';
import { Link } from '@/i18n/routing';
import { useActiveLink } from '@/shared/model';

export const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const getIsActiveHref = useActiveLink();
  const menuRef = useRef<HTMLDivElement>(null);
  const t = useTranslations('Navbar');
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
    <div className="relative block sm:block md:hidden" ref={menuRef}>
      <button
        className="relative h-10 rounded bg-slate-400 p-2"
        aria-pressed={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="grid justify-items-center gap-1.5">
          <span
            className={cn(
              'h-[2px] w-6 rounded-full bg-black transition',
              isOpen ? 'translate-y-2 rotate-45' : '',
            )}
          />
          <span
            className={cn(
              'h-[2px] w-6 rounded-full bg-black transition',
              isOpen ? 'scale-x-0' : '',
            )}
          />
          <span
            className={cn(
              'h-[2px] w-6 rounded-full bg-black transition',
              isOpen ? '-translate-y-2 -rotate-45' : '',
            )}
          />
        </div>
      </button>

      {isOpen && (
        <div className="absolute right-2/4 mt-2 w-48 rounded-md bg-white p-4 opacity-100 shadow-lg transition-opacity duration-300">
          <LocaleSwitcher className="rounded bg-zinc-100 px-4 py-2" />

          <ul>
            {NAV_LINKS.map(({ href, title }) => {
              const isActive = getIsActiveHref(href);

              return (
                <li key={href} className="group flex flex-col hover:cursor-pointer">
                  <Link
                    href={href}
                    className={cn(
                      'p-2 group-hover:text-blue-800 dark:text-white dark:group-hover:text-blue-200',
                      { 'rounded bg-zinc-200': isActive },
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {t(title)}
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
