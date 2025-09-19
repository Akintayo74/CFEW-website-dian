import React from 'react';

function SectionHeader({ children }) {
  return (
    <h1 className='text-cfew-dark font-bold mb-5 lg:mb-6'>
      { children }
    </h1>
  );
}

export default SectionHeader;
