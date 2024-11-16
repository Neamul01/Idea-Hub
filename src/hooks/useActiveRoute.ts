'use client';

import { usePathname } from 'next/navigation';

export const useActiveRoute = () => {
  const pathname = usePathname();

  const isActiveNav = (path: string): boolean => {
    if (path === '/') {
      return path === pathname;
    }
    return pathname.startsWith(path) && path !== '/';
  };

  return { isActiveNav, pathname };
};
