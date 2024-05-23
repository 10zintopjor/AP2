// Navbar.jsx
import React from 'react';
import DesktopNav from './Desktopnav';
import MobileNav from './Mobilenav';

const NavBar = () => {
  return (
    <nav>
          <div className='hidden sm:block'>
          <DesktopNav />
          </div>     
          <div className='sm:hidden'>
          <MobileNav />
          </div>
    </nav>
  );
}

export default NavBar;
