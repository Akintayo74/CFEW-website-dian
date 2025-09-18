import React from 'react';
import Container from '../Container/Container';

function Card() {
  return (
    <Container>
      <div className='bg-cfew-transparent p-2 md:p-5 w-80 md:w-120 lg:w-160 2xl:w-200'>
        <h4 className='font-bold mb-5 text-cfew-interface text-xl md:text-4xl lg:font-black lg:text-6xl'>Securing the Earth Through Community Empowerment</h4>
        <p className='font-normal mb-6 text-sm text-cfew-interface'>
          At Centre for Earth Works (CFEW), we unite young minds and communities to protect the environment, tackle climate change, and build a sustainable future.
        </p>
        <div className='flex flex-start gap-4'>
          <button 
            className="bg-cfew-primary-500 text-white px-6 py-3 rounded-full font-normal text-sm"
          >
            Donate
          </button>

          <button 
            className="bg-transparent border-[1.5px] border-cfew-interface text-white px-6 py-3 rounded-full font-normal text-sm"
          >
            Volunteer
          </button>
        </div>
         
        
      </div>
    </Container>
  );
}

export default Card;
