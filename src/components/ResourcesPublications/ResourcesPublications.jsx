import React from 'react';
import Container from '../Container';
import SectionHeader from '../SectionHeader';
import Button from '../Button';

function ResourcesPublications() {
  return (
    <div>
      <Container>
        <SectionHeader align='text-left'>
          Publications
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
    </div>
  );
}

export default ResourcesPublications;
