import { createNavigation } from 'next-intl/navigation';
export const locales = ['en', 'fr'];

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation();
