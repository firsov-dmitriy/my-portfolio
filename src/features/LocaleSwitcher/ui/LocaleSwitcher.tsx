'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useCallback, useTransition } from 'react';
import { locales } from '../model/locales';
import { useLocale } from 'use-intl';
import cn from 'classnames';

export const LocaleSwitcher = ({ className }: { className?: string }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [_, startTransition] = useTransition();
  const locale = useLocale();
  const changeLocale = useCallback(
    (value: string) => {
      startTransition(() => {
        router.replace(`/${value}${pathname?.replace(/^\/(en|ru)/, '')}`);
      });
    },
    [pathname, router],
  );

  return (
    <div className={cn('relative', className)}>
      <select
        value={locale}
        onChange={(e) => changeLocale(e.target.value)}
        className="rounded-lg border bg-white px-4 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label="Select language"
      >
        {locales.map(({ code, label }) => (
          <option key={code} value={code}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
};
