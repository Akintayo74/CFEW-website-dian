import React from 'react';
import Container from '../Container';
import SectionHeader from '../SectionHeader';
import Button from '../Button/Button';
import LatestCards from '../LatestCards/LatestCards';
import Section from '../Section';
import FeaturedPost from '../FeaturedBlog';

function ResourcesPressRelease() {
  return (
    <Section spacing='noneTight'>
      <Container>
        <SectionHeader align='text-left'>
          Recent Press Release
        </SectionHeader>

        {/* <LatestCards
          imageSrc='/blog-card-2.png'
          title='GAIA calls for limited production of plastics, says it’s a threat to public health.'
          publisher='Daily Trust'
          dateSent='August 18th 2025'
          textExcerpt='The Global Alliance for Incinerator Alternatives (GAIA) has pushed for a limit in the production of plastic products because it has become a threat to public health and environmental pollution.'
        /> */}
        <FeaturedPost type='press-release' />
      </Container>
    </Section>
  );
}

export default ResourcesPressRelease;
