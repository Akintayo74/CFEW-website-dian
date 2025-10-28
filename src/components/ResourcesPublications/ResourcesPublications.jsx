import React from 'react';
import Container from '../Container';
import SectionHeader from '../SectionHeader';
import LatestCards from '../LatestCards/LatestCards';
import Section from '../Section';

function ResourcesPublications() {
  return (
    <Section spacing='noneTight'>
      <Container>
        <SectionHeader align='text-left'>
          Publications
        </SectionHeader>

        <LatestCards
          imageSrc='/blog-card-2.png'
          title='The Nigerian Plastic Tsunami Report 2023.pdf'
          publisher='Center for Earth Works(CFEW)'
          dateSent='Fri, 18 Aug 2023'
          textExcerpt='The Global Alliance for Incinerator Alternatives (GAIA) has pushed for a limit in the production of plastic products because it has become a threat to public health and environmental pollution.'
        />

      </Container>
    </Section>
  );
}

export default ResourcesPublications;
