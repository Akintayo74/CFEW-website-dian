// import React from "react";

// function GlassCard({ children, runningAnimation }) {
//   return (
//     <div 
//       className="w-80 min-h-45 rounded-2xl bg-[#1B281626] border-[5.29px] border-[#1B281603] flex flex-col"
//       style={{
//         backgroundColor: '#1B281626',
//         boxShadow: 'inset 0 0 0 5.29px #1B281603'
//       }}  
//     >
      // <div className="font-bold text-5xl">
      //   { runningAnimation }
      // </div>
      // <div>
      //   { children }
      // </div>
//     </div>
//   );
// }

// export default GlassCard;


import React from 'react';

function GlassCard({ children, runningAnimation }) {
  return (
    <div 
      className='w-80 min-h-45 rounded-2xl'
      style={{
        backgroundColor: '#1B281626',
        boxShadow: 'inset 0 0 0 5.29px #1B281603'
      }}
    >
      <div className="font-bold text-5xl">
        { runningAnimation }
      </div>
      <div>
        { children }
      </div>
    </div>
  );
}

export default GlassCard;