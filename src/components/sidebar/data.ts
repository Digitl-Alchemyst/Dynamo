import {
  HomeModernIcon,
  UserIcon,
  UserGroupIcon,
  ShoppingCartIcon,
  ReceiptPercentIcon,
  EnvelopeIcon,
  BoltIcon,
  DocumentIcon,
  CalendarDaysIcon,
  CogIcon,
  BackwardIcon,
  ChartBarSquareIcon,
  BookOpenIcon,
  IdentificationIcon,
} from '@heroicons/react/24/outline';

export const navMenu = [
  {
    id: 1,
    title: 'MAIN',
    listItems: [
      {
        id: 1,
        title: 'Homepage',
        url: '/',
        icon: HomeModernIcon,
      },
      {
        id: 2,
        title: 'Profile',
        url: '/users/1',
        icon: UserIcon,
      },
    ],
  },

  {
    id: 2,
    title: 'LIST',
    listItems: [
      {
        id: 1,
        title: 'Users',
        url: '/users',
        icon: UserGroupIcon,
      },
      {
        id: 2,
        title: 'Products',
        url: '/products',
        icon: ShoppingCartIcon,
      },
      {
        id: 3,
        title: 'Orders',
        url: '/orders',
        icon: ReceiptPercentIcon,
      },
      {
        id: 4,
        title: 'Posts',
        url: '/posts',
        icon: EnvelopeIcon,
      },
    ],
  },
  {
    id: 3,
    title: 'GENERAL',
    listItems: [
      {
        id: 1,
        title: 'Elements',
        url: '/',
        icon: BoltIcon,
      },
      {
        id: 2,
        title: 'Notes',
        url: '/',
        icon: DocumentIcon,
      },
      {
        id: 3,
        title: 'Forms',
        url: '/',
        icon: IdentificationIcon,
      },
      {
        id: 4,
        title: 'Calendar',
        url: '/',
        icon: CalendarDaysIcon,
      },
    ],
  },
  {
    id: 4,
    title: 'MAINTENANCE',
    listItems: [
      {
        id: 1,
        title: 'Settings',
        url: '/',
        icon: CogIcon,
      },
      {
        id: 2,
        title: 'Backups',
        url: '/',
        icon: BackwardIcon,
      },
    ],
  },
  {
    id: 5,
    title: 'ANALYTICS',
    listItems: [
      {
        id: 1,
        title: 'Charts',
        url: '/',
        icon: ChartBarSquareIcon,
      },
      {
        id: 2,
        title: 'Logs',
        url: '/',
        icon: BookOpenIcon,
      },
    ],
  },
];