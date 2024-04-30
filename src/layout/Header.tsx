import { SearchBar } from '@/components/SearchBar';
import Image from 'next/image';
import { TopNav } from './nav/TopNav';

const Header = () => {
  return (
    <header className="sticky top-0 p-10 bg-white">
      <nav className="flex items-center justify-between">
        <div className="flex items-center gap-x-7 ml-6 lg:ml-4 2xl:ml-0">
          <Image
            src="/images/logo.svg"
            alt="logo"
            width={58}
            height={56}
            priority
          />
          <div className="hidden 2xl:block">
            <SearchBar />
          </div>
        </div>
        <TopNav />
      </nav>
    </header>
  );
};

export default Header;
