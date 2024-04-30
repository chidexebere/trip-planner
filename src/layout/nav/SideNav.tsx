import { Icon } from '@/components/Icon';
import Link from 'next/link';

const nav: NavType[] = [
  { id: 1, label: 'Activities', href: '/activities', icon: 'Activities' },
  { id: 2, label: 'Hotels', href: '/hotels', icon: 'Hotels1' },
  { id: 3, label: 'Flights', href: '/flights', icon: 'Flights' },
  { id: 4, label: 'Study', href: '/study', icon: 'Study' },
  { id: 5, label: 'Visa', href: '/visa', icon: 'Visa' },
  { id: 6, label: 'Immigration', href: '/immigration', icon: 'Immigration' },
  { id: 7, label: 'Medical', href: '/medical', icon: 'Medical' },
  { id: 8, label: 'Vacation Packages', href: '/vacation', icon: 'Package' },
];

export const SideNav = () => {
  return (
    <div className="flex flex-col gap-y-16 bg-white p-6 text-[#647995]">
      <ul className="flex flex-col items-start gap-y-3">
        {nav.map((item) => (
          <li
            key={item.id}
            className="w-full hover:bg-[#F0F2F5] hover:text-black"
          >
            <Link href={item.href} className="flex flex-col gap-y-2 p-3">
              <Icon
                name={item.icon}
                className="h-8 w-8"
                childClassName="text-[#647995]"
              >
                {item.label}
              </Icon>
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-x-4 bg-[#F0F2F5] p-[18px] rounded mb-5 max-w-[252px]">
        <div className="flex items-center gap-x-2">
          <div className="p-3 bg-[#0D6EFD] text-white text-base font-medium rounded">
            Go
          </div>
          <p className="text-sm">Personal Account</p>
        </div>
        <Icon name="CaretUpDown" className="w-5 h-5" />
      </div>
    </div>
  );
};
