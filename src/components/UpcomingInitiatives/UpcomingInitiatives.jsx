import React from 'react';
import SectionHeader from '../SectionHeader';
import Container from '../Container';
import { UPCOMING_EVENTS } from '../../constants';
import location from '../../assets/Vector.svg';

function UpcomingInitiatives() {
  return (
    <div>
      <Container>
        <SectionHeader>
          Upcoming Events
        </SectionHeader>

        <hr className=" border-cfew-primary-400 border-[1.5px] " />

        <div className='flex flex-col gap-5 mt-5'>
          {UPCOMING_EVENTS.map((event, index) => (
            // <div key={index} className='grid grid-cols-1 h-full lg:grid-cols-4 items-center justify-items-center text-left text-cfew-primary-800 text-sm gap-5'>
            <div key={index} className='grid grid-cols-1 h-full lg:grid-cols-4 justify-items-start items-center  text-left text-cfew-primary-800 text-sm gap-5'>
              <div className='flex justify-center'>
                <span className='
                  bg-cfew-primary-500 
                  border-[0.5] border-cfew-primary-100
                  shadow-[inset_0_0_4px_4px_#D3DDCC] 
                  rounded-full w-20 h-20 flex justify-center items-center
                  font-bold text-cfew-primary-50
                '>
                  {event.date}
                </span>
              </div>
              <h5 className='font-bold text-xl'>
                {event.name}
              </h5>
              <p className='justify-self-end'>
                {event.time}
              </p>

              <div className='flex items-center gap-2'>
                {/* <div className='w-10'> */}
                  <img src={location} width={24} height={24} />
                {/* </div> */}
                <p>{event.location}</p>
              </div>

              <hr className="border-cfew-primary-400 border-[1.5px] w-full lg:hidden" />
            </div>
          ))}
        </div>
        
      </Container>
    </div>
  );
}

export default UpcomingInitiatives;
