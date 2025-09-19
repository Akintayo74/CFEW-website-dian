import React from 'react';
import Section from '../Section/Section';
import ImageText from '../ImageText/ImageText';
import SectionHeader from '../SectionHeader/SectionHeader';
import Button from '../Button/Button';

function AboutUs() {
  return (
    <Section>
      <ImageText imageSrc='/about-us.png'>
        <SectionHeader>
          About Us
        </SectionHeader>
        <p className='text-cfew-dark'>
          <b>Centre for Earth Works (CFEW)</b> is a research-driven nongovernmental organisation that is passionate about securing the Earth and working to empower communities with sustainable strategies for solving environmental challenges such as waste management, toxic chemicals, sustainable land management, water, sanitation and hygiene, renewable energy, and environmental justice.
        </p>
        <div className='text-cfew-primary-600 md:flex md:items-center md:gap-6'>
          <div className='my-6'>
            <h6 className='font-bold text-2xl'>17,000+</h6>
            <div className='font-semibold'>Trees Planted</div>
          </div>

          <hr className='border-cfew-primary-400 border-[1.5px] md:hidden' />
          <div className="hidden md:block md:border-l md:border-cfew-primary-400 md:h-12"></div>

          <div className='my-6'>
            <h6 className='font-bold text-2xl'>500+</h6>
            <div className='font-semibold'>Green Jobs Created</div>
          </div>

          <hr className='border-cfew-primary-400 border-[1.5px] md:hidden' />
          <div className="hidden md:block md:border-l md:border-cfew-primary-400 md:h-12"></div>

          <div className='my-6'>
            <h6 className='font-bold text-2xl'>102+</h6>
            <div className='font-semibold'>Tonnes of Recovered Plastic</div>
          </div>

          <Button className='md:hidden'>
            Volunteer
          </Button>
        </div>
        <Button className='hidden md:block'>
          Volunteer
        </Button>
      </ImageText>
    </Section>
  );
}

export default AboutUs;
