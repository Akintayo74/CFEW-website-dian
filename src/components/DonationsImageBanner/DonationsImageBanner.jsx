import React from 'react';
import ImageBanner from '../ImageBanner/ImageBanner';

function DonationsImageBanner() {
  return (
    <ImageBanner
      imageSrc='/resources-image-banner.webp'
      imageAlt='An image of beautiful green plants with small buds of purple flowers sprouting from them.'
    >
      Your Donations Make a Difference!
    </ImageBanner>
  );
}

export default DonationsImageBanner;
