import React from 'react';
import Container from '../Container';
import SectionHeader from '../SectionHeader/SectionHeader';
import Section from '../Section/Section';

function ThematicAreas() {
  return (
    <Section>
      <div className='text-center mb-6 lg:mb-10'>
        <SectionHeader>
          Our Thematic Areas
        </SectionHeader>
        <p className='text-cfew-dark'>
          Connecting the wellbeing of our planet and people through four pillars of change.
        </p>
      </div>
      
      <div className='grid grid-cols-2 lg:grid-cols-4'>
        <div className='relative'>
          <img src='./thematic-environment.png' className='w-full h-auto'/>
          <p className='text-cfew-primary-50 text-sm md:text-2xl font-bold absolute bottom-5 left-5 lg:bottom-10 lg:left-10'>
            Environment
          </p>
        </div>
        <div className='relative'>
          <img src='./thematic-health.png' className='w-full h-auto'/>
          <p className='text-cfew-primary-50 text-sm md:text-2xl font-bold absolute bottom-5 left-5 lg:bottom-10 lg:left-10'>
            Health
          </p>
        </div>
        <div className='relative'>
          <img src='./thematic-agriculture.png' className='w-full h-auto'/>
          <p className='text-cfew-primary-50 text-sm md:text-2xl font-bold absolute bottom-5 left-5 lg:bottom-10 lg:left-10'>
            Agriculture
          </p>
        </div>
        <div className='relative'>
          <img src='./thematic-education.png' className='w-full h-auto'/>
          <p className='text-cfew-primary-50 text-sm md:text-2xl font-bold absolute bottom-5 left-5 lg:bottom-10 lg:left-10'>
            Education
          </p>
        </div>
      </div>
    </Section>
  );
}

export default ThematicAreas;
