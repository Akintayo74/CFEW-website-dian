import React from 'react';
import Container from '../Container'

function ImageText({ imageSrc, imageAlt = "Image", reverse = false, children }) {

  return (
    <Container>
      <div className={`flex flex-col pt-12 lg:gap-15 ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"}`}>
        <div className='flex-1'>
          <img
           src={imageSrc}
           alt={imageAlt}
          className='w-full h-auto' />
        </div>
        <div className='flex-1'>
          { children }
        </div>
      </div>
    </Container>
  )
}

export default ImageText;
