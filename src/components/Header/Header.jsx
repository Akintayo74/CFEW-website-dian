import React from "react";
import logo from "@/assets/CFEW-Logo.png";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/constants";
import Container from "../Container/Container";
import { Link, useLocation } from "react-router-dom";
import Dropdown from "../DropdownMenu/DropdownMenu";

function Header() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  function toggleMobileMenu() {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }

  const getLinkClassName = (href) => {
    const isActive = location.pathname === href;
  
    return isActive
      ? "text-cfew-primary-400 font-bold text-base"
      : "text-cfew-interface font-bold text-base hover:text-cfew-primary-400";
  };

  return (
    <header className="bg-cfew-primary-900-90% sticky top-0 z-10">
      <Container>
        <div className="flex items-center justify-between py-3.5">
          <img src={logo} />
          <div>
            {/* Mobile First design */}
            <button
              onClick={toggleMobileMenu}
              className="px-3 py-2 md:hidden"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X color="#ffffff" />
              ) : (
                <Menu color="#ffffff" />
              )}
            </button>

            {/* Desktop Design */}
            <nav className="hidden items-center gap-8 md:flex">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={getLinkClassName(link.href)}
                >
                  {link.label}
                </Link>
              ))}
              <Dropdown isMobile={false}/>
            </nav>
          </div>

          <button className="bg-cfew-primary-500 hidden rounded-4xl px-8 py-4 text-white md:block">
            Donate
          </button>
        </div>

        {isMobileMenuOpen && (
          <nav className="md:hidden flex flex-col items-center gap-5 bg-cfew-primary-800 absolute top-full left-0 right-0 ">
            <div className="flex flex-col items-center gap-5 mt-5">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-bold text-white hover:text-cfew-primary-400"
                >
                  {link.label}
                </a>
              ))}
              <Dropdown isMobile={true}/>
            </div>

            <button className="bg-cfew-primary-500 rounded-3xl px-4 py-2 text-white mb-16 font-bold">
              Donate
            </button>
          </nav>
        )}
      </Container>
    </header>
  );
}

export default Header;
