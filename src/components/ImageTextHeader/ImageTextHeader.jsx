import React from 'react';

function ImageTextHeader({ children }) {
  return (
    <h2 className='text-cfew-dark text-left text-5xl font-bold mb-5 lg:mb-6'>
      { children }
    </h2>
  );
}

export default ImageTextHeader;
