import React from 'react';
import Container from '../Container';
import SectionHeader from '../SectionHeader';
import Button from '../Button';
import Section from '../Section';
import BlogCard from '../BlogCard/BlogCard';

function ResourcesBlog() {
  return (
    <div>
      <Container>
        <SectionHeader align='text-left'>
          Latest from Blog
        </SectionHeader>

        <div className='grid grid-cols-1 md:grid-cols-2 md:gap-10 md:items-center text-left text-cfew-primary-900 mb-16 md:mb-30'>
          <div className='w-full'>
            <img src='/blog-card-2.png' className='w-full h-auto md:h-75 lg:h-auto object-cover'/>
          </div>

          <div className='flex flex-col gap-5'>
            <h6 className='font-bold text-xl mt-6'>
              International Youth Day
            </h6>

            <div className='flex gap-5 items-center text-sm'>
              <p>
                Center for Earth Works (CFEW)
              </p>
              <p>
                13h ago
              </p>
            </div>

            <p>
              <b>“Local Youth Actions for the SDGs and Beyond.”</b> <br/>
              It was quite an unexpected sight to behold when the CFEW team arrived at one of our project communities, only to find the MDGs...
            </p>

            <Button className='bg-cfew-primary-100'>
              Read More
            </Button>
          </div>
        </div>

      </Container>


      <Section background='pink'>
        <Container>
          <SectionHeader align='text-left mb-5 lg:mb-10'>
            Recent Blogs
          </SectionHeader>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-20'>
            <BlogCard
              imageSrc='/blog-card-2.png'
              publishDate='August 8th 2025'
              title='The reemergence of the North Central Green life'
              background='bg-cfew-blog'
            />

            <BlogCard
              imageSrc='/blog-card-2.png'
              publishDate='August 8th 2025'
              title='The reemergence of the North Central Green life'
              background='bg-cfew-blog'
            />

            <BlogCard
              imageSrc='/blog-card-2.png'
              publishDate='August 8th 2025'
              title='The reemergence of the North Central Green life'
              background='bg-cfew-blog'
            />

            <BlogCard
              imageSrc='/blog-card-2.png'
              publishDate='August 8th 2025'
              title='The reemergence of the North Central Green life'
              background='bg-cfew-blog'
            />

            <BlogCard
              imageSrc='/blog-card-2.png'
              publishDate='August 8th 2025'
              title='The reemergence of the North Central Green life'
              background='bg-cfew-blog'
            />

            <BlogCard
              imageSrc='/blog-card-2.png'
              publishDate='August 8th 2025'
              title='The reemergence of the North Central Green life'
              background='bg-cfew-blog'
            />

            <BlogCard
              imageSrc='/blog-card-2.png'
              publishDate='August 8th 2025'
              title='The reemergence of the North Central Green life'
              background='bg-cfew-blog'
            />

            <BlogCard
              imageSrc='/blog-card-2.png'
              publishDate='August 8th 2025'
              title='The reemergence of the North Central Green life'
              background='bg-cfew-blog'
            />
          </div>

          <Button className='bg-[#E4E3CE] lg:mt-20'>
            Load More
          </Button>
        </Container>
      </Section>
    </div>
  );
}

export default ResourcesBlog;
