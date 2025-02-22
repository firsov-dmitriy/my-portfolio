'use client';
import { NAV_LINKS } from './constants';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { useActiveLink } from '@/shared/model';

export const NavBar = () => {
  const t = useTranslations('Navbar');
  const getIsActiveHref = useActiveLink();

  return (
    <div
      className="hidden w-full rounded-xl bg-zinc-100 px-10 py-2 dark:bg-zinc-400 md:block md:w-auto"
      id="navbar-default"
    >
      <ul
        key="nav-ul"
        className="mt-4 flex flex-col rounded-lg border border-gray-100 p-4 font-medium dark:border-gray-700 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:p-0 rtl:space-x-reverse"
      >
        {NAV_LINKS.map(({ href, title }) => {
          const isActive = getIsActiveHref(href);

          return (
            <li key={href} className="group flex flex-col hover:cursor-pointer">
              <Link
                href={href}
                className="group-hover:text-blue-800 dark:text-white dark:group-hover:text-blue-200"
              >
                {t(title)}
              </Link>
              {isActive && (
                <span className="block h-[2px] rounded-xl bg-black group-hover:bg-blue-800 dark:bg-white dark:group-hover:bg-blue-200" />
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
