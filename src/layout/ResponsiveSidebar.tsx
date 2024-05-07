'use client';

import { slide as Menu } from 'react-burger-menu';
import { SideNav } from './nav/SideNav';

interface Props {
  pageWrapId: string;
  outerContainerId: string;
}

const ResponsiveSidebar = () => {
  return (
    <Menu>
      <SideNav />
    </Menu>
  );
};

export default ResponsiveSidebar;
