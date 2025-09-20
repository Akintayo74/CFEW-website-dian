import React from 'react';

function ActionCard({ imageSrc, imageAlt, header, className='' }) {
  return (
    <div className={`bg-cfew-primary-600 flex flex-col items-center h-55 w-full max-w-sm mx-auto rounded justify-center gap-6 mt-5 md:h-65 ${className}`}>
      <div className='bg-cfew-primary-500 rounded-full p-4 border border-cfew-interface'>
        <img src={imageSrc} alt={imageAlt} />
      </div>
      <div>
        <h4 className='text-cfew-interface font-bold text-3xl md:text-4xl'>{ header }</h4>
      </div>
    </div>
  );
}

export default ActionCard;
