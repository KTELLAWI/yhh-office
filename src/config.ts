import {Pathnames} from 'next-intl/navigation';

export const locales = ['en', 'ar'] as const;

export const pathnames = {
  '/': '/',
  '/about': "/about",
  '/portfolio': "/portfolio",
  '/portfolio/[id]': "/portfolio/[id]",
  '/services': '/services',
  '/blog': "/blog",
  '/blog/[id]': "/blog/[id]",
  '/privacy-policy': "/privacy-policy",
  '/contact': "/contact",
  '/newlayout': "/newlayout"
} satisfies Pathnames<typeof locales>;

// Use the default: `always`
export const localePrefix = undefined;

export type AppPathnames = keyof typeof pathnames;