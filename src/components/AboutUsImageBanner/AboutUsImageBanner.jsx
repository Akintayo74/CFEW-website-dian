import React from 'react';
import Container from '../Container';

function AboutUsImageBanner() {
  return (
    <div className='relative'>
      <img
        src="/about-us-page.webp"
        alt="A picture of CFEW members posed in front of a large rock at World Health Day"

      />

      <h1 className='absolute bottom-5 left-0 px-5 leading-[1.4] lg:px-10 lg:bottom-15  text-cfew-interface font-bold text-xl md:text-4xl lg:text-5xl md:leading-tight'>
        Passionate about securing the earth and dedicated to building capacity.
      </h1>

    </div>
  );
}

export default AboutUsImageBanner;
