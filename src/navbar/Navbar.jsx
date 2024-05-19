// Navbar.jsx
import React from 'react';
import DesktopNav from './Desktopnav';
import MobileNav from './Mobilenav';

const Navbar = () => {
  return (
    <nav>
        {/* Desktop Navigation */}
          <section className='hidden sm:flex flex-row gap-10 text-xl text-white bg-customBlue w-full justify-center'>
          <DesktopNav />
          </section>
          <section className='sm:hidden'>
          <MobileNav />
          </section>
    </nav>
  );
}

export default Navbar;
