import React from 'react';
import Section from '../Section/Section';
import SectionHeader from '../SectionHeader';
import Container from '../Container';

function WhoWeAre() {
  return (
    <Section spacing='defaultLoose'>
      <Container>
        <SectionHeader>
          Who We Are
        </SectionHeader>

        <div className='text-left grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-20 text-sm lg:text-lg lg:mt-4 text-cfew-dark leading-relaxed'>
          <p>
            <b>Centre for Earth Works (CFEW) is a research-driven non-governmental organization</b> that is passionate about securing the Earth and working to empower communities with sustainable strategies for solving environmental challenges. CFEW is also concerned with empowering communities about environmental issues using sustainable living concepts, awareness about waste management, toxic chemicals, sustainable land management, water sanitation and hygiene, renewable energy, and environmental justice.
          </p>

          <p>
            Today, environmental concerns occupy centre stage in global deliberations. The role the environment plays in a nation’s development process can no longer be relegated to the background. We face great environmental change, marked by deep and untold conflicts, tensions, and social factions that amount to societal dissolution and the destruction of our ecosystem; the stability and peace within and among nations. Therefore, there is a need to raise awareness, conduct research, sensitize, and provide environmental-related educational programs to orientate the larger society on how to manage and preserve the environment.
          </p>

          <p>
            What originally began as an idea in 2015 - one man’s vision to contribute to the implementation of the SDGs in Nigeria, has grown into nine (9) years of sustainable impact. In 2017 Centre for Earth Works was officially registered with the Corporate Affairs Commission (CAC) of Nigeria and began operations.
          </p>
        </div>
      </Container>
    </Section>
  );
}

export default WhoWeAre;
