// import React from 'react';
// import parallaxImage from '../../assets/parallax-image.jpg';
// import Container from '../Container';

// function OurMissionParallax() {
//   return (
//     <div>
//       {/* Parallax Section */}
//       <div
//         className="min-h-[300px] md:min-h-[500px] bg-cover bg-center bg-no-repeat bg-fixed"
//         style={{ backgroundImage: `url(${parallaxImage})` }}
//       >
//         <div className="absolute inset-0 bg-black/30"></div>
//         <Container>
//           <div className="min-h-[500px] grid grid-cols-1 md:grid-cols-2  justify-items-center items-center text-center text-cfew-interface">
//             <div>
//               <h2 className=" text-3xl lg:text-5xl font-bold mb-2.5">Our Mission</h2>
//               <p className=' text-sm md:text-lg leading-relaxed font-semibold'>
//                 To champion environmental sustainability through innovative programs, research, and proactive advocacy in communities.
//               </p>
//             </div>
//             <div>
//               <h2 className=" text-3xl lg:text-5xl font-bold mb-2.5">Our Vision</h2>
//               <p className=' text-sm md:text-lg leading-relaxed font-semibold'>
//                 “We envision an empowered world where humanity is at equilibrium with nature.”
//               </p>
//             </div>
            
//           </div>
//         </Container>
//       </div>
//     </div>
//   );
// }

// export default OurMissionParallax;


import React from 'react';
import parallaxImage from '../../assets/parallax-image.jpg';
import Container from '../Container';

function OurMissionParallax() {
  return (
    <div>
      {/* Parallax Section */}
      <div
        className="relative min-h-[300px] md:min-h-[500px] bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: `url(${parallaxImage})` }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/30"></div>
        
        {/* Content */}
        <div className='relative z-1'>
          <Container>
            <div className="min-h-[300px] md:min-h-[500px] grid grid-cols-1 md:grid-cols-2 justify-items-center items-center text-center text-cfew-interface">
              <div>
                <h2 className="text-3xl lg:text-5xl font-bold mb-2.5">Our Mission</h2>
                <p className='text-sm md:text-lg leading-relaxed font-semibold'>
                  To champion environmental sustainability through innovative programs, research, and proactive advocacy in communities.
                </p>
              </div>
              <div>
                <h2 className="text-3xl lg:text-5xl font-bold mb-2.5">Our Vision</h2>
                <p className='text-sm md:text-lg leading-relaxed font-semibold'>
                  "We envision an empowered world where humanity is at equilibrium with nature."
                </p>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default OurMissionParallax;