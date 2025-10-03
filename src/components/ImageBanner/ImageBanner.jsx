import React from 'react';

function ImageBanner({ imageSrc, imageAlt, children, overlay = true }) {
  return (
    <div className='relative'>
      <img
        src={imageSrc}
        alt={imageAlt}
        className='w-full aspect-[4/3] md:aspect-[16/9] lg:aspect-[21/9] object-cover'
      />
      {overlay && <div className='absolute inset-0 bg-black/40'></div>}

      <h1 className='absolute bottom-5 left-0 px-5 leading-[1.4] lg:px-10 lg:bottom-15  text-cfew-interface font-bold text-xl md:text-4xl lg:text-5xl md:leading-tight'>
        { children }
      </h1>

    </div>
  );
}

export default ImageBanner;
