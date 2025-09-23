import React from 'react';
import Section from '../Section/Section';
import Button from '../Button/Button';
import Container from '../Container';

function FoundersMessage() {
  return (
    <Section background='pink' spacing='looseSymmetrical'>
      <Container>
        <div className='flex flex-col lg:flex-row lg:justify-between lg:items-start lg:gap-10'>
          {/* Text Content */}
          <div className='flex flex-col lg:w-180 lg:gap-10'>
            <h4 className='font-bold text-4xl lg:text-5xl lg:text-start mb-5 lg:mb-0'>
              Founder's Message
            </h4>
            
            {/* Mobile Image - positioned after title */}
            <img 
              src='/portraits/founder-image.png' 
              className='mb-12 lg:hidden'
              alt="Founder"
            />
            
            <figure className='text-left mb-6 lg:mb-0'>
              <blockquote className='italic font-semibold text-xl md:font-medium md:text-2xl lg:text-3xl'>
                <p>
                  "I am inspired by the power of simple ideas backed by constructive action
                  to change the world. I believe that even the smallest steps can have a
                  profound impact when taken with intention and purpose."
                </p>
              </blockquote>
              <figcaption className='mt-6 text-xl lg:text-2xl'>
                <strong>Dotun F. Benson</strong><br/>
                <span>CFEW Team Lead</span>
              </figcaption>
            </figure>
            
            <Button>
              Learn More
            </Button>
          </div>
          
          {/* Desktop Image */}
          <div className='hidden lg:block'>
            <img 
              src='/portraits/founder-image.png' 
              className='mb-12'
              alt="Founder"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default FoundersMessage;