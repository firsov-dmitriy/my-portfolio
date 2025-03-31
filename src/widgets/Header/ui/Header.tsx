'use server';
import { NavBar } from '@/shared/ui';
import { ModeSwitcher } from '@/features/ModeSwitcher';
import { BurgerMenu } from '@/features/BurgerMenu';
import { Link } from '@/i18n/routing';
import { LocaleSwitcher } from '@/features/LocaleSwitcher';

export const Header = async () => {
  return (
    <header className="bg-zinc-200 dark:bg-zinc-500">
      <nav className="border-gray-200">
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
          <Link href="/" className="">
            <svg
              width="150"
              height="60"
              viewBox="0 0 200 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <text
                x="10"
                y="40"
                font-family="Arial, sans-serif"
                font-size="36"
                font-weight="bold"
                className="fill-amber-950 dark:fill-amber-50"
              >
                Firsov
              </text>
            </svg>
          </Link>
          <NavBar />
          <div className="flex flex-row-reverse items-center gap-4">
            <BurgerMenu />
            <LocaleSwitcher className="hidden md:block" />
            <ModeSwitcher />
          </div>
        </div>
      </nav>
    </header>
  );
};
