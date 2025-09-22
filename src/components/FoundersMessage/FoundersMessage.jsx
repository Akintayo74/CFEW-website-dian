import React from 'react';
import Container from '../Container';
import Section from '../Section/Section';
import ImageText from '../ImageText/ImageText';
import SectionHeader from '../SectionHeader/SectionHeader';
import ImageTextHeader from '../ImageTextHeader/ImageTextHeader';

function FoundersMessage() {
  return (
    <Section background='pink' spacing='looseSymmetrical' >
        <ImageText reverse='true' imageSrc='./portraits/founder-image.png' imageAlt='An image of the founder of CFEW'>
          <ImageTextHeader>
            Founder's Message
          </ImageTextHeader>
            <p className='italic font-semibold md:font-medium text-normal md:text-2xl lg:text-3xl text-left'>
              “I am inspired by the power of simple ideas backed by constructive action to change the world. I believe that even the smallest steps can have a profound impact when taken with intention and purpose.”
            </p>
        </ImageText>
    </Section>
  );
}

export default FoundersMessage;
