import React from 'react';
import logo from '@/assets/CFEW-Logo.png';
import { Menu, X } from 'lucide-react';
import { href } from 'react-router-dom';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(true);

  function toggleMobileMenu() {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }

  const navLinks = [
    {
      href: '/',
      label: 'Home',
    },
    {
      href: '/about',
      label: 'About',
    },
    {
      href: '/programs',
      label: 'Programs',
    },
    {
      href: '/resources',
      label: 'Resources'
    }
  ]

  return (
    <header className='bg-yellow-300 flex justify-between items-center'>
      <img src={logo} />

      <div>
        {/* Mobile First design */}
        <button onClick={toggleMobileMenu} className='md:hidden' aria-label="Toggle mobile menu">
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>

        {isMobileMenuOpen && (
          <nav className='flex flex-col'>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                { link.label }
              </a>
            ))}
          </nav>
        )}
      </div>

    </header>
  );
}

export default Header;
