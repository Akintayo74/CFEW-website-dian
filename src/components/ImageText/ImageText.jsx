import React from 'react';
import Container from '../Container';

function ImageText({ 
  imageSrc, 
  imageAlt = "Image", 
  reverse = false, 
  title,
  children 
}) {
  return (
    <Container>
      <div className={`flex pt-12 md:gap-10 lg:gap-15 ${
        reverse 
          ? "flex-col lg:flex-row-reverse" 
          : "flex-col-reverse lg:flex-row"
      }`}>

        {/* Desktop -- Image container */}
        <div className='hidden lg:flex-1 lg:flex'>
          <img
            src={imageSrc}
            alt={imageAlt}
            className='w-full h-auto object-cover rounded lg:rounded-lg lg:h-full'
          />
        </div>

        <div className='flex-1 mb-12 md:mb-0 lg:flex lg:flex-col'>
          {title && (
            <h2 className='text-cfew-dark text-left text-3xl lg:text-5xl font-bold mb-5 lg:mb-6'>
              {title}
            </h2>
          )}

          {/* Mobile -- reverse=true image */}
          {reverse && (<div className='lg:hidden mb-8'>
            <img
              src={imageSrc}
              alt={imageAlt}
              className='w-full h-auto object-cover rounded'
            />
          </div>)}

          {children}

          {/* Mobile -- regular(reverse=false) imag */}
          {reverse ? undefined : (<div className='flex-1 lg:flex'>
            <img
              src={imageSrc}
              alt={imageAlt}
              className='w-full h-auto object-cover rounded lg:rounded-lg lg:h-full'
            />
          </div>)}
        </div>
      </div>
    </Container>
  );
}

export default ImageText;
