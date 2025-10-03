// import React from "react";
// import Container from "../Container/Container";

// function Card() {
//   return (
//     <Container>
//       <div className="bg-cfew-transparent w-80 p-2 md:w-120 md:p-5 lg:w-160 2xl:w-200">
//         <h4 className="text-cfew-interface mb-5 text-xl font-bold md:text-4xl lg:text-6xl lg:font-black">
//           Securing the Earth Through Community Empowerment
//         </h4>
//         <p className="text-cfew-interface mb-6 text-sm font-normal">
//           At Centre for Earth Works (CFEW), we unite young minds and communities
//           to protect the environment, tackle climate change, and build a
//           sustainable future.
//         </p>
//         <div className="flex-start flex gap-4">
//           <button className="bg-cfew-primary-500 rounded-full px-6 py-3 text-sm font-normal text-white">
//             Donate
//           </button>

//           <button className="border-cfew-interface rounded-full border-[1.5px] bg-transparent px-6 py-3 text-sm font-normal text-white">
//             Volunteer
//           </button>
//         </div>
//       </div>
//     </Container>
//   );
// }

// export default Card;


import React from "react";

function Card() {
  return (
    <div className="bg-cfew-transparent p-4 md:p-6 lg:p-8 max-w-[90%] md:max-w-lg lg:max-w-2xl">
      <h4 className="text-cfew-interface mb-3 text-lg font-bold md:mb-5 md:text-3xl lg:text-5xl lg:font-black">
        Securing the Earth Through Community Empowerment
      </h4>
      <p className="text-cfew-interface mb-4 text-xs leading-relaxed md:mb-6 md:text-sm lg:text-base">
        At Centre for Earth Works (CFEW), we unite young minds and communities
        to protect the environment, tackle climate change, and build a
        sustainable future.
      </p>
      <div className="flex gap-3 md:gap-4">
        <button className="bg-cfew-primary-500 rounded-full px-4 py-2 text-xs font-normal text-white md:px-6 md:py-3 md:text-sm">
          Donate
        </button>
        <button className="border-cfew-interface rounded-full border-[1.5px] bg-transparent px-4 py-2 text-xs font-normal text-white md:px-6 md:py-3 md:text-sm">
          Volunteer
        </button>
      </div>
    </div>
  );
}

export default Card;