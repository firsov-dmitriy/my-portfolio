import { usePathname } from 'next/navigation';
import { useLocale } from 'use-intl';

export const useActiveLink = () => {
  const pathname = usePathname();
  const locale = useLocale();

  return (href: string) => {
    if (href === '/') {
      return `/${locale}` === pathname;
    }
    return `/${locale}${href}` === pathname;
  };
};
