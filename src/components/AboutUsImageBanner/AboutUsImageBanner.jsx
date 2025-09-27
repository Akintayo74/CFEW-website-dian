import React from 'react';
import ImageBanner from '../ImageBanner/ImageBanner';

function AboutUsImageBanner() {
  return (
    <ImageBanner
      imageSrc='/about-us-page.webp'
      imageAlt='A picture of CFEW members posed in front of a large rock at World Health Day'
      overlay={false}
    >
      Passionate about securing the earth and dedicated to building capacity.
    </ImageBanner>
  );
}

export default AboutUsImageBanner;
