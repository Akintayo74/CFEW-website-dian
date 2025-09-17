import React from 'react';
import Section from '@/components/Section';
import logo from '@/assets/CFEW-Logo.png';
import { Menu } from 'lucide-react';

function Header() {
  return (
    <div className='bg-yellow-300'>
      <Section />
      <img src={logo} />
      <Menu />
    </div>
  );
}

export default Header;
