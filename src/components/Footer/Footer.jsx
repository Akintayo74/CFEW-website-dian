import React from 'react';
import Container from '../Container/Container';
import { NAV_LINKS } from '../../constants';

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
              </div>
              
            </div>

          </div>

        </Container>
      </footer>
    </>
  );
}

export default Footer;
