import React from 'react';
import ImageBanner from '../ImageBanner/ImageBanner';

function ProgramsImageBanner() {
  return (
    <ImageBanner
      imageSrc='/programs-page-banner.webp'
      // imageSrc='/BLOG.webp'
      imageAlt='An image of a Volunteer from CFEW in a red dress holding a piece of tape with another woman who has a baby on her back.'
    >
      Explore the programs and initiatives shaping communities and securing the planet.
    </ImageBanner>
  );
}

export default ProgramsImageBanner;
