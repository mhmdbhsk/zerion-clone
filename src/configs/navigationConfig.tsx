import {
  IconArrowsDiff,
  IconBounceRight,
  IconBrandSafari,
  IconEye,
  IconSend,
  IconSettings,
  IconStar,
} from '@tabler/icons-react';

const navigationConfig = [
  {
    id: 'overview',
    title: 'Overview',
    icon: IconEye,
  },
  {
    id: 'explore',
    title: 'Explore',
    icon: IconBrandSafari,
  },
  {
    id: 'favorites',
    title: 'Favorites',
    icon: IconStar,
  },
  {
    id: 'send',
    title: 'Send',
    icon: IconSend,
  },
  {
    id: 'swap',
    title: 'Swap',
    icon: IconArrowsDiff,
  },
  {
    id: 'bridge',
    title: 'Bridge',
    icon: IconBounceRight,
  },
  {
    id: 'settings',
    title: 'Settings',
    icon: IconSettings,
  },
];

export default navigationConfig;
