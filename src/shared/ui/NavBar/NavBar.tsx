'use client';
import Link from 'next/link';
import { NAV_LINKS } from './constants';
import { usePathname } from 'next/navigation';

export const NavBar = () => {
  const pathname = usePathname();
  return (
    <div
      className="hidden w-full rounded-xl bg-zinc-100 px-10 py-2 md:block md:w-auto dark:bg-zinc-400"
      id="navbar-default"
    >
      <ul
        key="nav-ul"
        className="mt-4 flex flex-col rounded-lg border border-gray-100 p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:p-0 rtl:space-x-reverse dark:border-gray-700"
      >
        {NAV_LINKS.map(({ href, title }) => {
          const isActive = href === pathname;

          return (
            <li key={href} className="group flex flex-col hover:cursor-pointer">
              <Link
                href={href}
                className="group-hover:text-blue-800 dark:text-white dark:group-hover:text-blue-200"
              >
                {title}
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
