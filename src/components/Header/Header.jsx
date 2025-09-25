import React from "react";
import logo from "@/assets/CFEW-Logo.png";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/constants";
import Container from "../Container/Container";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  function toggleMobileMenu() {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }

  return (
    <header className="bg-cfew-primary-900">
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
                <a key={link.href} href={link.href} className="text-cfew-interface hover:underline">
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <button className="bg-cfew-primary-500 hidden rounded-4xl px-8 py-4 text-white md:block">
            Donate
          </button>
        </div>

        {isMobileMenuOpen && (
          <nav className="md:hidden">
            <div className="flex flex-col">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>

            <button className="bg-cfew-primary-500 rounded-2xl px-4 py-2 text-white">
              Donate
            </button>
          </nav>
        )}
      </Container>
    </header>
  );
}

export default Header;
