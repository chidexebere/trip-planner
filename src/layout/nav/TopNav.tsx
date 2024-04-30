import { Icon } from '@/components/Icon';
import Image from 'next/image';
import Link from 'next/link';

const nav1: NavType[] = [
  { id: 1, label: 'Home', href: '/home', icon: 'House' },
  { id: 2, label: 'Dashboard', href: '/dashboard', icon: 'Dashboard' },
  { id: 3, label: 'Wallet', href: '/wallet', icon: 'Wallet' },
  { id: 4, label: 'Plan a trip', href: '/', icon: 'PlanTrip' },
  {
    id: 5,
    label: 'Commision for life',
    href: '/commission',
    icon: 'Commission',
  },
];

const nav2: NavType[] = [
  { id: 1, label: 'Notification', href: '/notification', icon: 'Notification' },
  { id: 2, label: 'Carts', href: '/carts', icon: 'Carts' },
  { id: 3, label: 'Create', href: '/create', icon: 'Create' },
];

export const TopNav = () => {
  return (
    <div className="flex items-center xl:divide-x-2 divide-slate-400 text-[#647995]">
      <ul className="hidden xl:flex items-center gap-x-6 mr-8">
        {nav1.map((item) => (
          <li key={item.id}>
            <Link
              href={item.href}
              className="flex flex-col gap-y-2 justify-center items-center"
            >
              <Icon name={item.icon} className="h-8 w-8" />
              <span>{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-x-8">
        <button
          type="button"
          className="ml-8 hidden lg:block text-white bg-[#0D6EFD] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5"
        >
          Subscribe
        </button>
        <ul className="hidden md:flex items-center gap-x-6">
          {nav2.map((item) => (
            <li key={item.id}>
              <Link
                href={item.href}
                className="flex flex-col gap-y-2 justify-center items-center"
              >
                <Icon name={item.icon} className="h-8 w-8" />
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-x-4 cursor-pointer">
          <Image
            src="/images/avatar.svg"
            alt="avatar"
            width={52}
            height={52}
            priority
          />
          <Icon name="CaretDown" className="h-6 w-6" />
        </div>
      </div>
    </div>
  );
};
