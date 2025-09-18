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
  return (
    <>
      <footer className='bg-cfew-primary-800 mb-10'>
        <Container>
          <h1 className='text-purple-500 font-bold'>
            Stay Updated with the Latest News
          </h1>
          <p className='text-white'>Get instant news by subscribing to our newsletter</p>

          <div className='flex flex-col lg:flex-row lg:gap-3'>
            <div>
            <span className='bg-white relative flex px-1 py-5 rounded-2xl md:w-100 md:h-17'>
              <input
                type='email'
                placeholder='Enter your email'
                className='rounded'
              />

              <button className='bg-cfew-primary-500 absolute top-2 right-3  text-white px-6 py-3 rounded-4xl md:py-3 md:px-6'>
                Subscribe
              </button>
            </span>

              {/* Desktop View */}
              <div className='hidden md:flex mt-8 gap-2'>
                <img src={facebook} width={40} height={40} />
                <img src={instagram} width={40} height={40} />
                <img src={linkedIn} width={40} height={40} />
                <img src={xIcon} width={40} height={40} />
                <img src={youtube} width={40} height={40} />
              </div>
            </div>

            <div className='flex flex-col gap-4 md:flex-row'>
              <div>
                <h2 className='font-bold text-2xl text-white'>Quick Links</h2>
                <div className='flex flex-col text-white gap-4'>
                  {NAV_LINKS.map((link) => (
                    <a key={link.href} href={link.href}>
                      { link.label }
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <h2 className='font-bold text-2xl text-white'>Get Involved</h2>
                <div className='flex flex-col gap-4'>
                  <a>Donate</a>
                  <a>Volunteer</a>
                  <a>Partner with us</a>
                </div>

              </div>

              <div>
                <h2 className='font-bold text-2xl text-white'>Contact Info</h2>
                <address>
                  <span className='flex gap-2'>
                    <Phone color='#ffffff' />
                    <a href='tel:+234706224-9235'>+234706224-9235 (24/7 Support Line)</a>
                  </span>
                  
                  <span className='flex gap-2'>
                    <Mail color='#ffffff' />
                    <a href='mailto:cearthwork@gmail.com'>cearthwork@gmail.com</a>
                  </span>

                  <span className='flex text-white items-center'>
                    <MapPin color='#ffffff' width={50} height={50} />
                    <p>No.3 Old Nitel Building, Old Airport Road, Jos Plateau State, Nigeria</p>
                  </span>

                </address>
              </div>

              {/* Mobile View */}
              <div className='flex gap-2 md:hidden'>
                  <img src={facebook} width={40} height={40} />
                  <img src={instagram} width={40} height={40} />
                  <img src={linkedIn} width={40} height={40} />
                  <img src={xIcon} width={40} height={40} />
                  <img src={youtube} width={40} height={40} />
              </div>
              
            </div>

          </div>

        </Container>
      </footer>
    </>
  );
}

export default Footer;
