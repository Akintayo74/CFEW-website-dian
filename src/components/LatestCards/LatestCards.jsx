import React from 'react';
import Button from '../Button';

function LatestCards({ imageSrc, title, publisher, dateSent, textExcerpt }) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 md:gap-10 md:items-center text-left text-cfew-primary-900 mb-16 md:mb-30'>
      <div className='w-full'>
        <img src={imageSrc} className='w-full h-auto md:h-75 lg:h-auto object-cover'/>
      </div>

      <div className='flex flex-col gap-5'>
        <h6 className='font-bold text-xl lg:text-3xl mt-6'>
          { title }
        </h6>

        <div className='flex gap-5 items-center text-sm'>
          <p>
            { publisher }
          </p>
          <p>
            { dateSent }
          </p>
        </div>

        <p>
          { textExcerpt }
        </p>

        <Button className='bg-cfew-primary-100'>
          Read More
        </Button>
      </div>
    </div>
  );
}

export default LatestCards;
