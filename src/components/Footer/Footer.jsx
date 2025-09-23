import React from "react";
import Container from "../Container/Container";
import { NAV_LINKS } from "../../constants";
import { Phone, Mail, MapPin } from "lucide-react";
import facebook from "@/assets/facebook.svg";
import instagram from "@/assets/instagram.svg";
import linkedIn from "@/assets/linked-in.svg";
import xIcon from "@/assets/x.svg";
import youtube from "@/assets/youtube.svg";

function Footer() {
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription logic here
    const formData = new FormData(e.target);
    const email = formData.get("email");
    console.log("Newsletter subscription:", email);
  };

  return (
    <footer className="bg-cfew-primary-800">
      <Container>
        {/* Main Footer Layout */}
        <div className="mt-16 grid grid-cols-1 gap-12 lg:my-20 lg:grid-cols-2 lg:gap-16">
          {/* LEFT COLUMN - Newsletter & Social Icons */}
          <div className="space-y-8">
            {/* Newsletter Section */}
            <section className="newsletter-section">
              <h2 className="mb-4 text-3xl font-bold text-white lg:text-4xl">
                Stay updated with the Latest News
              </h2>
              <p className="mb-6 text-lg text-white">
                Get instant news by subscribing to our news letter
              </p>

              <form
                onSubmit={handleNewsletterSubmit}
                className="relative mb-8 flex max-w-lg rounded-full bg-white px-2 py-2"
              >
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="flex-1 rounded-full border-none px-6 py-4 text-lg text-gray-700 outline-none"
                  required
                />
                <button
                  type="submit"
                  className="bg-cfew-primary-500 hover:bg-cfew-primary-600 absolute top-2 right-1 rounded-full px-8 py-4 text-lg font-medium text-white transition-colors"
                >
                  SUBSCRIBE
                </button>
              </form>
            </section>

            {/* Social Media Icons - Desktop */}
            <div
              className="hidden gap-4 lg:flex"
              role="list"
              aria-label="Social media links"
            >
              <a
                href="https://facebook.com/cearthworks"
                aria-label="Visit our Facebook page"
                className="transition-opacity hover:opacity-80"
              >
                <img src={facebook} width={40} height={40} alt="Facebook" />
              </a>
              <a
                href="https://instagram.com/cearthworks"
                aria-label="Visit our Instagram page"
                className="transition-opacity hover:opacity-80"
              >
                <img src={instagram} width={40} height={40} alt="Instagram" />
              </a>
              <a
                href="https://x.com/cearthworks"
                aria-label="Visit our X (Twitter) page"
                className="transition-opacity hover:opacity-80"
              >
                <img src={xIcon} width={40} height={40} alt="X (Twitter)" />
              </a>
              <a
                href="https://youtube.com/cearthworks"
                aria-label="Visit our YouTube channel"
                className="transition-opacity hover:opacity-80"
              >
                <img src={youtube} width={40} height={40} alt="YouTube" />
              </a>
              <a
                href="https://linkedin.com/company/cearthworks"
                aria-label="Visit our LinkedIn page"
                className="transition-opacity hover:opacity-80"
              >
                <img src={linkedIn} width={40} height={40} alt="LinkedIn" />
              </a>
            </div>

            {/* Website Credit - Desktop */}
            <div className="hidden lg:block">
              <p className="text-sm text-white">©www.cearthworks.org</p>
            </div>
          </div>

          {/* RIGHT COLUMN - Links & Contact */}
          <div className="space-y-12">
            {/* Top Row - Quick Links & Get Involved */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
              {/* Quick Links */}
              <nav aria-labelledby="quick-links-heading">
                <h3
                  id="quick-links-heading"
                  className="mb-6 text-2xl font-bold text-white"
                >
                  Quick Links
                </h3>
                <ul className="flex flex-col gap-4">
                  {NAV_LINKS.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className="text-lg text-white transition-colors hover:text-gray-300"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Get Involved */}
              <nav aria-labelledby="get-involved-heading">
                <h3
                  id="get-involved-heading"
                  className="mb-6 text-2xl font-bold text-white"
                >
                  Get Involved
                </h3>
                <ul className="flex flex-col gap-4">
                  <li>
                    <a
                      href="/donate"
                      className="text-lg text-white transition-colors hover:text-gray-300"
                    >
                      Donate
                    </a>
                  </li>
                  <li>
                    <a
                      href="/volunteer"
                      className="text-lg text-white transition-colors hover:text-gray-300"
                    >
                      Volunteer
                    </a>
                  </li>
                  <li>
                    <a
                      href="/partner"
                      className="text-lg text-white transition-colors hover:text-gray-300"
                    >
                      Partner with us
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            {/* Bottom Row - Contact Info (Full Width) */}
            <section className="contact-section">
              <h3 className="mb-6 text-2xl font-bold text-white">
                Contact Info
              </h3>
              <address className="space-y-4 not-italic">
                <div className="flex items-center gap-3">
                  <Phone color="#ffffff" size={20} className="flex-shrink-0" />
                  <a
                    href="tel:+2347062249235"
                    className="text-lg text-white transition-colors hover:text-gray-300"
                  >
                    +234706224-9235 (24/7 Support Line)
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Mail color="#ffffff" size={20} className="flex-shrink-0" />
                  <a
                    href="mailto:cearthwork@gmail.com"
                    className="text-lg text-white transition-colors hover:text-gray-300"
                  >
                    cearthwork@gmail.com
                  </a>
                </div>

                <div className="flex items-start gap-3 text-white">
                  <MapPin
                    color="#ffffff"
                    size={20}
                    className="mt-1 flex-shrink-0"
                  />
                  <p className="text-lg">
                    No.3 Old Nitel Building, Old Airport Road, Jos Plateau
                    State, Nigeria
                  </p>
                </div>
              </address>
            </section>
          </div>
        </div>

        {/* Mobile-only elements */}
        <div className="mt-12 mb-16 space-y-6 lg:hidden">
          {/* Social Media Icons - Mobile */}
          <div
            className="flex gap-4"
            role="list"
            aria-label="Social media links"
          >
            <a
              href="https://facebook.com/cearthworks"
              aria-label="Visit our Facebook page"
              className="transition-opacity hover:opacity-80"
            >
              <img src={facebook} width={40} height={40} alt="Facebook" />
            </a>
            <a
              href="https://instagram.com/cearthworks"
              aria-label="Visit our Instagram page"
              className="transition-opacity hover:opacity-80"
            >
              <img src={instagram} width={40} height={40} alt="Instagram" />
            </a>
            <a
              href="https://x.com/cearthworks"
              aria-label="Visit our X (Twitter) page"
              className="transition-opacity hover:opacity-80"
            >
              <img src={xIcon} width={40} height={40} alt="X (Twitter)" />
            </a>
            <a
              href="https://youtube.com/cearthworks"
              aria-label="Visit our YouTube channel"
              className="transition-opacity hover:opacity-80"
            >
              <img src={youtube} width={40} height={40} alt="YouTube" />
            </a>
            <a
              href="https://linkedin.com/company/cearthworks"
              aria-label="Visit our LinkedIn page"
              className="transition-opacity hover:opacity-80"
            >
              <img src={linkedIn} width={40} height={40} alt="LinkedIn" />
            </a>
          </div>

          {/* Website Credit - Mobile */}
          <div>
            <p className="text-sm text-white">©www.cearthworks.org</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
