// import React from 'react';
// import Container from '../Container/Container';
// import { NAV_LINKS } from '../../constants';
// import { Phone, Mail, MapPin } from 'lucide-react';
// import facebook from '@/assets/facebook.svg';
// import instagram from '@/assets/instagram.svg';
// import linkedIn from '@/assets/linked-in.svg';
// import xIcon from '@/assets/x.svg';
// import youtube from '@/assets/youtube.svg';

// function Footer() {
//   return (
//     <footer className='bg-cfew-primary-800 mb-10'>
//       <Container>
//         <h1 className='text-purple-500 font-bold'>
//           Stay Updated with the Latest News
//         </h1>
//         <p className='text-white'>Get instant news by subscribing to our newsletter</p>

//         <div className='flex flex-col lg:flex-row lg:gap-3'>
//           <div>
//             <form className='bg-white relative flex px-1 py-5 rounded-2xl md:w-100 md:h-17'>
//               <input
//                 type='email'
//                 placeholder='Enter your email'
//                 className='rounded'
//               />

//               <button className='bg-cfew-primary-500 absolute top-2 right-3  text-white px-6 py-3 rounded-4xl md:py-3 md:px-6'>
//                 Subscribe
//               </button>
//             </form>

//             {/* Desktop View */}
//             <div className='hidden md:flex mt-8 gap-2'>
//               <img src={facebook} width={40} height={40} />
//               <img src={instagram} width={40} height={40} />
//               <img src={linkedIn} width={40} height={40} />
//               <img src={xIcon} width={40} height={40} />
//               <img src={youtube} width={40} height={40} />
//             </div>
//           </div>

//           <div className='flex flex-col gap-4 '>
//             <div className='flex flex-col md:flex-row md:justify-around lg:justify-around'>
//               <div>
//                 <h2 className='font-bold text-2xl text-white'>Quick Links</h2>
//                 <div className='flex flex-col text-white gap-4'>
//                   {NAV_LINKS.map((link) => (
//                     <a key={link.href} href={link.href}>
//                       { link.label }
//                     </a>
//                   ))}
//                 </div>
//               </div>

//               <div>
//                 <h2 className='font-bold text-2xl text-white'>Get Involved</h2>
//                 <div className='flex flex-col gap-4'>
//                   <a>Donate</a>
//                   <a>Volunteer</a>
//                   <a>Partner with us</a>
//                 </div>

//               </div>
//             </div>

//             <div>
//               <h2 className='font-bold text-2xl text-white'>Contact Info</h2>
//               <address className='not-italic'>
//                 <span className='flex gap-2'>
//                   <Phone color='#ffffff' />
//                   <a href='tel:+234706224-9235'>+234706224-9235 (24/7 Support Line)</a>
//                 </span>
                
//                 <span className='flex gap-2'>
//                   <Mail color='#ffffff' />
//                   <a href='mailto:cearthwork@gmail.com'>cearthwork@gmail.com</a>
//                 </span>

//                 <span className='flex text-white items-center'>
//                   <MapPin color='#ffffff' width={50} height={50} />
//                   <p>No.3 Old Nitel Building, Old Airport Road, Jos Plateau State, Nigeria</p>
//                 </span>

//               </address>
//             </div>

//             {/* Mobile View */}
//             <div className='flex gap-2 md:hidden'>
//                 <img src={facebook} width={40} height={40} />
//                 <img src={instagram} width={40} height={40} />
//                 <img src={linkedIn} width={40} height={40} />
//                 <img src={xIcon} width={40} height={40} />
//                 <img src={youtube} width={40} height={40} />
//             </div>
            
//           </div>

//         </div>

//       </Container>
//     </footer>
//   );
// }

// export default Footer;








import React from 'react';
import Container from '../Container/Container';
import { NAV_LINKS } from '../../constants';
import { Phone, Mail, MapPin } from 'lucide-react';
import facebook from '@/assets/facebook.svg';
import instagram from '@/assets/instagram.svg';
import linkedIn from '@/assets/linked-in.svg';
import xIcon from '@/assets/x.svg';
import youtube from '@/assets/youtube.svg';

function Footer() {
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription logic here
    const formData = new FormData(e.target);
    const email = formData.get('email');
    console.log('Newsletter subscription:', email);
  };

  return (
    <footer className="bg-cfew-primary-800 mb-10">
      <Container>
        {/* Newsletter Section */}
        <section className="newsletter-section pb-8 border-b border-cfew-primary-700">
          <h2 className="text-white font-bold text-2xl mb-4">
            Stay Updated with the Latest News
          </h2>
          <p className="text-white mb-6">
            Get instant news by subscribing to our newsletter
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Newsletter Form */}
            <div>
              <form 
                onSubmit={handleNewsletterSubmit}
                className="bg-white relative flex px-2 py-2 rounded-2xl max-w-md"
              >
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-xl border-none outline-none text-gray-700"
                  required
                />
                <button 
                  type="submit"
                  className="bg-cfew-primary-500 text-white px-6 py-3 rounded-xl font-medium hover:bg-cfew-primary-600 transition-colors"
                >
                  Subscribe
                </button>
              </form>

              {/* Social Media Icons - Desktop */}
              <div className="hidden md:flex gap-4 mt-6" role="list" aria-label="Social media links">
                <a 
                  href="https://facebook.com/cearthworks" 
                  aria-label="Visit our Facebook page"
                  className="hover:opacity-80 transition-opacity"
                >
                  <img src={facebook} width={40} height={40} alt="Facebook" />
                </a>
                <a 
                  href="https://instagram.com/cearthworks" 
                  aria-label="Visit our Instagram page"
                  className="hover:opacity-80 transition-opacity"
                >
                  <img src={instagram} width={40} height={40} alt="Instagram" />
                </a>
                <a 
                  href="https://linkedin.com/company/cearthworks" 
                  aria-label="Visit our LinkedIn page"
                  className="hover:opacity-80 transition-opacity"
                >
                  <img src={linkedIn} width={40} height={40} alt="LinkedIn" />
                </a>
                <a 
                  href="https://x.com/cearthworks" 
                  aria-label="Visit our X (Twitter) page"
                  className="hover:opacity-80 transition-opacity"
                >
                  <img src={xIcon} width={40} height={40} alt="X (Twitter)" />
                </a>
                <a 
                  href="https://youtube.com/cearthworks" 
                  aria-label="Visit our YouTube channel"
                  className="hover:opacity-80 transition-opacity"
                >
                  <img src={youtube} width={40} height={40} alt="YouTube" />
                </a>
              </div>
            </div>

            {/* Footer Links Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Quick Links */}
              <nav aria-labelledby="quick-links-heading">
                <h3 id="quick-links-heading" className="font-bold text-2xl text-white mb-4">
                  Quick Links
                </h3>
                <ul className="flex flex-col gap-3">
                  {NAV_LINKS.map((link) => (
                    <li key={link.href}>
                      <a 
                        href={link.href}
                        className="text-white hover:text-gray-300 transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Get Involved */}
              <nav aria-labelledby="get-involved-heading">
                <h3 id="get-involved-heading" className="font-bold text-2xl text-white mb-4">
                  Get Involved
                </h3>
                <ul className="flex flex-col gap-3">
                  <li>
                    <a href="/donate" className="text-white hover:text-gray-300 transition-colors">
                      Donate
                    </a>
                  </li>
                  <li>
                    <a href="/volunteer" className="text-white hover:text-gray-300 transition-colors">
                      Volunteer
                    </a>
                  </li>
                  <li>
                    <a href="/partner" className="text-white hover:text-gray-300 transition-colors">
                      Partner with us
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </section>

        {/* Contact Info Section */}
        <section className="contact-section pt-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Contact Information */}
            <div>
              <h3 className="font-bold text-2xl text-white mb-6">Contact Info</h3>
              <address className="not-italic">
                <div className="flex items-center gap-3 mb-4">
                  <Phone color="#ffffff" size={20} className="flex-shrink-0" />
                  <a 
                    href="tel:+2347062249235" 
                    className="text-white hover:text-gray-300 transition-colors"
                  >
                    +234706224-9235 (24/7 Support Line)
                  </a>
                </div>
                
                <div className="flex items-center gap-3 mb-4">
                  <Mail color="#ffffff" size={20} className="flex-shrink-0" />
                  <a 
                    href="mailto:cearthwork@gmail.com" 
                    className="text-white hover:text-gray-300 transition-colors"
                  >
                    cearthwork@gmail.com
                  </a>
                </div>

                <div className="flex items-start gap-3 text-white">
                  <MapPin color="#ffffff" size={20} className="mt-1 flex-shrink-0" />
                  <p>No.3 Old Nitel Building, Old Airport Road, Jos Plateau State, Nigeria</p>
                </div>
              </address>
            </div>

            {/* Website Credit */}
            <div className="flex items-end justify-start lg:justify-end">
              <p className="text-white text-sm">
                ©www.cearthworks.org
              </p>
            </div>
          </div>

          {/* Social Media Icons - Mobile */}
          <div className="flex gap-4 mt-8 md:hidden" role="list" aria-label="Social media links">
            <a 
              href="https://facebook.com/cearthworks" 
              aria-label="Visit our Facebook page"
              className="hover:opacity-80 transition-opacity"
            >
              <img src={facebook} width={40} height={40} alt="Facebook" />
            </a>
            <a 
              href="https://instagram.com/cearthworks" 
              aria-label="Visit our Instagram page"
              className="hover:opacity-80 transition-opacity"
            >
              <img src={instagram} width={40} height={40} alt="Instagram" />
            </a>
            <a 
              href="https://linkedin.com/company/cearthworks" 
              aria-label="Visit our LinkedIn page"
              className="hover:opacity-80 transition-opacity"
            >
              <img src={linkedIn} width={40} height={40} alt="LinkedIn" />
            </a>
            <a 
              href="https://x.com/cearthworks" 
              aria-label="Visit our X (Twitter) page"
              className="hover:opacity-80 transition-opacity"
            >
              <img src={xIcon} width={40} height={40} alt="X (Twitter)" />
            </a>
            <a 
              href="https://youtube.com/cearthworks" 
              aria-label="Visit our YouTube channel"
              className="hover:opacity-80 transition-opacity"
            >
              <img src={youtube} width={40} height={40} alt="YouTube" />
            </a>
          </div>
        </section>
      </Container>
    </footer>
  );
}

export default Footer;