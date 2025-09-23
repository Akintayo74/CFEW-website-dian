import React from 'react';
import Section from '../Section/Section';
import ImageText from '../ImageText/ImageText';
import Button from '../Button/Button';

function FoundersMessage() {
  return (
    <Section background='pink' spacing='looseSymmetrical' >
        <ImageText 
          reverse={true}
          imageSrc='./portraits/founder-image.png' 
          imageAlt='An image of the founder of CFEW'
          title="Founder's Message"
        >
          <div className=''>
          <figure className='text-left'>
            <blockquote className='italic font-semibold md:font-medium text-base md:text-2xl lg:text-3xl'>
              <p>
                "I am inspired by the power of simple ideas backed by constructive action 
                to change the world. I believe that even the smallest steps can have a 
                profound impact when taken with intention and purpose."
              </p>
            </blockquote>
            <figcaption className='mt-6 text-base lg:text-2xl'>
              <strong>Dotun F. Benson</strong><br/>
              <span>CFEW Team Lead</span>
            </figcaption>
          </figure>

          <Button className='lg:self-start'>
            Learn More
          </Button>
          </div>
        </ImageText>
    </Section>
  );
}

export default FoundersMessage;
