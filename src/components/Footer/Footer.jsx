import React from "react";
import Container from "../Container/Container";
import { NAV_LINKS } from "../../constants";
import { Phone, Mail, MapPin } from "lucide-react";
import {SOCIAL_LINKS} from '../../constants';
import {GET_INVOLVED_FOOTER} from '../../constants';
import { useLocation } from "react-router-dom";


function Footer() {
  const location = useLocation();

  const getLinkClassName = (href) => {
    const isActive = location.pathname === href;
    
    return isActive
    ? "text-cfew-primary-400 font-bold text-sm md:text-lg hover:text-cfew-primary-400 hover:no-underline"
    : "text-cfew-interface font-bold text-sm md:text-lg hover:text-gray-300 hover:underline";
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    console.log("Newsletter subscription:", email);
  };

  return (
    <footer className="bg-cfew-primary-800 text-cfew-interface">
      <Container>
        <div className="py-16 lg:py-20">
          {/* Two Column Layout */}
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left Column: Newsletter and Social */}
            <div className="flex flex-col">
              <div>
                <h2 className="mb-4 text-3xl font-bold lg:text-4xl lg:mb-6">
                  Stay updated with the Latest News
                </h2>
                <p className="mb-6 lg:mb-8 text-lg">
                  Get instant news by subscribing to our news letter
                </p>

                <form
                  onSubmit={handleNewsletterSubmit}
                  className="md:relative mb-8 flex flex-col gap-4 md:flex-row max-w-lg rounded-full md:bg-white px-2 py-2 lg:mb-12"
                >
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    className="flex-1 rounded-full border-none px-6 py-4 text-sm bg-white text-gray-700 outline-none md:text-lg md:pr-40"
                    required
                  />
                  <button
                    type="submit"
                    className="md:absolute md:right-2.5 md:top-2.5 rounded-full bg-cfew-primary-500 px-6 py-3 font-medium transition-colors hover:bg-cfew-primary-600 md:px-8 md:py-4"
                  >
                    SUBSCRIBE
                  </button>
                </form>
              </div>

              {/* Social Media & Copyright - Desktop Only in Left Column */}
              <div className="hidden space-y-6 lg:flex lg:flex-col justify-between h-full">
                <div className="flex gap-4" role="list" aria-label="Social media links">
                  {SOCIAL_LINKS.map((social) => (
                    <a
                      key={social.href}
                      href={social.href}
                      aria-label={`Visit our ${social.alt} page`}
                      className="transition-opacity hover:opacity-80"
                    >
                      <img src={social.icon} width={40} height={40} alt={social.alt} />
                    </a>
                  ))}
                </div>

                <p className="text-sm">©www.cearthworks.org</p>
              </div>
            </div>

            {/* Right Column: Links & Contact */}
            <div className="space-y-12">
              {/* Links Grid */}
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
                {/* Quick Links */}
                <nav aria-labelledby="quick-links-heading">
                  <h3 id="quick-links-heading" className="mb-6 text-2xl font-bold">
                    Quick Links
                  </h3>
                  <ul className="flex flex-col gap-4 font-semibold">
                    {NAV_LINKS.map((link) => (
                      <li key={link.href}>
                        <a
                          href={link.href}
                          className={getLinkClassName(link.href)}
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>

                {/* Get Involved */}
                <nav aria-labelledby="get-involved-heading">
                  <h3 id="get-involved-heading" className="mb-6 text-2xl font-bold">
                    Get Involved
                  </h3>
                  <ul className="flex flex-col gap-4 font-semibold">
                    {GET_INVOLVED_FOOTER.map((link) => (
                      <li key={link.href}>
                        <a
                          href={link.href}
                          className="text-sm transition-colors hover:text-gray-300 hover:underline md:text-lg"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>

              {/* Contact Info */}
              <section>
                <h3 className="mb-6 text-2xl font-bold">Contact Info</h3>
                <address className="space-y-4 not-italic text-sm leading-relaxed">
                  <div className="flex items-center gap-3">
                    <Phone color="#ffffff" size={20} className="flex-shrink-0" />
                    <a href="tel:+2347062249235" className="hover:text-white">
                      +234706224-9235 (24/7 Support Line)
                    </a>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail color="#ffffff" size={20} className="flex-shrink-0" />
                    <a href="mailto:cearthwork@gmail.com" className="hover:underline">
                      cearthwork@gmail.com
                    </a>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin color="#ffffff" size={20} className="mt-1 flex-shrink-0" />
                    <p>
                      No.3 Old Nitel Building, Old Airport Road, Jos Plateau State,
                      Nigeria
                    </p>
                  </div>
                </address>
              </section>
            </div>
          </div>

          {/* Social Media & Copyright - Mobile/Tablet Only */}
          <div className="mt-12 space-y-6 lg:hidden">
            <div className="flex gap-4" role="list" aria-label="Social media links">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  aria-label={`Visit our ${social.alt} page`}
                  className="transition-opacity hover:opacity-80"
                >
                  <img src={social.icon} width={40} height={40} alt={social.alt} />
                </a>
              ))}
            </div>

            <p className="text-sm">©www.cearthworks.org</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;