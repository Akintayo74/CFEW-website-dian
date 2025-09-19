import React from 'react';
import Container from '../Container'

function ImageText({ imageSrc, imageAlt = "Image", reverse = false, children }) {

  return (
    <Container>
      <div className={`flex flex-col-reverse pt-12 md:gap-10 lg:gap-15 ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"}`}>
        <div className='flex-1 lg:flex'>
          <img
            src={imageSrc}
            alt={imageAlt}
            className='w-full h-auto object-cover rounded lg:rounded-lg lg:h-full' />
        </div>
        <div className='flex-1 mb-12 md:mb-0 lg:flex lg:flex-col lg:justify-between'>
          { children }
        </div>
      </div>
    </Container>
  )
}

export default ImageText;
