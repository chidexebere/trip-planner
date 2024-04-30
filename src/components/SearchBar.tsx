'use client';

import { useState } from 'react';
import { Icon } from './Icon';

interface Props {
  placeholder?: string;
}

export const SearchBar = () => {
  const [searchItem, setSearchItem] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchItem(value);
  };

  return (
    <div className="relative flex items-center">
      <button type="button" className="absolute left-2">
        <Icon name="Search" className="w-6 h-6 " />
      </button>
      <input
        type="search"
        className="py-4 pl-10 pr-3 w-full bg-gray-100 rounded focus:outline-none focus:none"
        value={searchItem}
        onChange={handleInputChange}
        placeholder="Search"
      />
    </div>
  );
};
