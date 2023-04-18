import {
  IconArrowsDiff,
  IconBounceRight,
  IconBrandSafari,
  IconEye,
  IconSend,
  IconSettings,
  IconStar,
} from '@tabler/icons-react';

export const navigationConfig = [
  {
    id: 'overview',
    path: '/',
    title: 'Overview',
    icon: IconEye,
  },
  {
    id: 'explore',
    path: '/explore',
    title: 'Explore',
    icon: IconBrandSafari,
  },
  {
    id: 'favorites',
    path: '/favorites',
    title: 'Favorites',
    icon: IconStar,
  },
  {
    id: 'send',
    path: '/send',
    title: 'Send',
    icon: IconSend,
  },
  {
    id: 'swap',
    path: '/swap',
    title: 'Swap',
    icon: IconArrowsDiff,
  },
  {
    id: 'bridge',
    path: '/bridge',
    title: 'Bridge',
    icon: IconBounceRight,
  },
  {
    id: 'settings',
    path: '/settings',
    title: 'Settings',
    icon: IconSettings,
  },
];
