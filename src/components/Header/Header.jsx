import React from 'react';
import logo from '@/assets/CFEW-Logo.png';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '@/constants';
import Container from '../Container/Container';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  function toggleMobileMenu() {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }

  return (
      <header className='bg-cfew-primary-900'>
        <Container>

        <div className='flex justify-between items-center py-3.5'>
          <img src={logo} />

          <div>
            {/* Mobile First design */}
            <button onClick={toggleMobileMenu} className='md:hidden px-3 py-2' aria-label="Toggle mobile menu">
              {isMobileMenuOpen ? <X color='#ffffff' /> : <Menu color='#ffffff' />}
            </button>

            {/* Desktop Design */}
            <nav className='hidden md:flex items-center gap-8'>
              {NAV_LINKS.map((link) => (
                <a key={link.href} href={link.href}>
                  { link.label }
                </a>
              ))}
            </nav>
          </div>

          <button className='hidden md:block bg-cfew-primary-500 text-white px-8 py-4 rounded-4xl'>
            Donate
          </button>
        </div>

        {isMobileMenuOpen && (
          <nav className='md:hidden '>
            <div className='flex flex-col'>
              {NAV_LINKS.map((link) => (
                <a key={link.href} href={link.href} onClick={() => setIsMobileMenuOpen(false)}>
                  { link.label }
                </a>
              ))}
            </div>

            <button className='bg-cfew-primary-500 text-white px-4 py-2 rounded-2xl'>
              Donate
            </button>
          </nav>  
        )}
        </Container>
      </header>
  );
}

export default Header;
