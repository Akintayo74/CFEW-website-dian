import React from 'react';
import Container from '../Container';
import SectionHeader from '../SectionHeader';
import Section from '../Section';
import BlogCard from '../BlogCard/BlogCard';
import LatestCards from '../LatestCards/LatestCards';
import BlogList from '../BlogList/BlogList';
import FeaturedBlog from '../FeaturedBlog/FeaturedBlog';

function ResourcesBlog() {
  return (
    <div>
      <Section spacing='noneTight'>
        <Container>
          <SectionHeader align='text-left'>
            Latest from Blog
          </SectionHeader>

          {/* <LatestCards
            imageSrc='/blog-card-2.png'
            title='International Youth Day'
            publisher='Center for Earth Works (CFEW)'
            dateSent='13h ago'
            textExcerpt='“Local Youth Actions for the SDGs and Beyond.” It was quite an unexpected sight to behold when the CFEW team arrived at one of our project communities, only to find the MDGs hall, the proposed venue for the event, to be occupied. This would have...'
          /> */}
          <FeaturedBlog />

        </Container>
      </Section>


      <Section background='pink'>
        <Container>
          <SectionHeader align='text-left mb-5 lg:mb-10'>
            Recent Blogs
          </SectionHeader>

          {/* Reusable BlogList component */}
          <BlogList page={1} pageSize={4} gridCols="lg:grid-cols-4" />

        </Container>
      </Section>
    </div>
  );
}

export default ResourcesBlog;
