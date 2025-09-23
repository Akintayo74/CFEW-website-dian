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
      <div className={`flex flex-col pt-12 lg:gap-10 xl:gap-16 ${
        reverse ? 'lg:flex-row' : 'lg:flex-row-reverse'
      }`}>
        {/* Text container - always first on mobile */}
        <div className="flex-1 mb-8 lg:mb-0 lg:flex lg:flex-col lg:justify-center">
          {title && (
            <h2 className="text-cfew-dark text-left text-3xl lg:text-5xl font-bold mb-5 lg:mb-6">
              {title}
            </h2>
          )}
          {children}
        </div>
        
        {/* Image container - always second on mobile */}
        <div className="flex-1">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-auto object-cover rounded lg:rounded-lg"
          />
        </div>
      </div>
    </Container>
  );
}

export default ImageText;