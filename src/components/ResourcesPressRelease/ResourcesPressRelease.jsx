import React from 'react';
import Container from '../Container';
import SectionHeader from '../SectionHeader';
import Button from '../Button/Button';
import LatestCards from '../LatestCards/LatestCards';
import Section from '../Section';
import FeaturedPost from '../FeaturedBlog';
import BlogList from '../BlogList/BlogList';

function ResourcesPressRelease() {
  return (
    <Section spacing='noneTight'>
      <Container>
        <SectionHeader align='text-left'>
          Recent Press Release
        </SectionHeader>

        <FeaturedPost type='press-release' />

        <Section>
          <BlogList page={1} pageSize={8} type='press-release' />
        </Section>
      </Container>
    </Section>
  );
}

export default ResourcesPressRelease;
