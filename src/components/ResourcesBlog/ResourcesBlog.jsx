import React from 'react';
import Container from '../Container';
import SectionHeader from '../SectionHeader';
import Section from '../Section';
import BlogCard from '../BlogCard/BlogCard';
import LatestCards from '../LatestCards/LatestCards';
import BlogList from '../BlogList/BlogList';
import FeaturedPost from '../FeaturedBlog/FeaturedPost';

function ResourcesBlog() {
  return (
    <div>
      <Section spacing='noneTight'>
        <Container>
          <SectionHeader align='text-left'>
            Latest from Blog
          </SectionHeader>

          <FeaturedPost type='blog'/>

        </Container>
      </Section>


      <Section background='pink'>
        <Container>
          <SectionHeader align='text-left mb-5 lg:mb-10'>
            Recent Blogs
          </SectionHeader>

          {/* Reusable BlogList component */}
          <BlogList page={1} pageSize={4} type='blog' gridCols="lg:grid-cols-4" />

        </Container>
      </Section>
    </div>
  );
}

export default ResourcesBlog;
