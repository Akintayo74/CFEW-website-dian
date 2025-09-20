import React from 'react';
import Container from '../Container';
import SectionHeader from '../SectionHeader/SectionHeader';
import ActionCard from '../ActionCard/ActionCard';
import Section from '../Section/Section';
import Megaphone from '../../assets/Megaphone.png';
import HandHeart from '../../assets/HandHeart.png';
import Recycle from '../../assets/Recycle.png';
import SunHorizon from '../../assets/SunHorizon.png';
import Laptop from '../../assets/Laptop.png';

function HowWeWork() {
  return (
    <Section spacing='loose'>
      <Container>
        <SectionHeader>
          How We Work
        </SectionHeader>
        <p className='text-cfew-dark'>
          Where advocacy meets action, and every effort counts toward a sustainable tomorrow.
        </p>
        <div className='grid grid-cols-1 lg:grid-cols-6 lg:gap-20 '>
          <ActionCard imageSrc={Megaphone} imageAlt='An image' header='Policy Advocacy' className='lg:col-span-2' />
          <ActionCard imageSrc={HandHeart} imageAlt='An image' header='Community Empowerment' className='lg:col-span-2' />
          <ActionCard imageSrc={Laptop} imageAlt='An image' header='Publication' className='lg:col-span-2' />
          <ActionCard imageSrc={Recycle} imageAlt='An image' header='Zero Waste' className='lg:col-start-2 lg:col-end-4' />
          <ActionCard imageSrc={SunHorizon} imageAlt='An image' header='Climate Action' className='lg:col-start-4 lg:col-end-6' />
        </div>
      
      </Container>
    </Section>
  );
}

export default HowWeWork;
