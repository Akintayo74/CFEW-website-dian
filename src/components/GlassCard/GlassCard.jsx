// import React from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);

// function GlassCard({ runningAnimation, text }) {
//   const countRef = React.useRef(null);
//   const cardRef = React.useRef(null);

//   React.useEffect(() => {
//     // We target the cardRef as our trigger element
//     const triggerElement = cardRef.current;

//     const counter = { value: 0 };

//     const tween = gsap.to(counter, {
//       value: runningAnimation,
//       duration: 2.5,
//       ease: "power2.out",
//       onUpdate: () => {
//         countRef.current.innerText = Math.round(counter.value).toLocaleString('en-US');
//       },
//       scrollTrigger: {
//         trigger: triggerElement,
//         start: "top 80%",
//         toggleActions: "restart none restart none",
//       }
//     });

//     return () => {
//       tween.kill();
//     };
//   }, [runningAnimation]);

//   return (
//     // Attach the cardRef here
//     <div
//       ref={cardRef}
//       className="w-full max-w-80 h-full rounded-2xl backdrop-blur-none bg-white/10 border border-white/20 shadow-lg flex flex-col justify-center items-center gap-1 text-cfew-interface py-12 px-4 lg:py-0"
//       style={{
//         backgroundColor: '#1B281626',
//         boxShadow: 'inset 0 0 0 5.29px #1B281603'
//       }}
//     >
//       <div ref={countRef} className="font-bold text-3xl lg:text-5xl">
//         0{/* Initial value */}
//       </div>
//       <div className="font-semibold text-base md:text-lg ">
//         {text}
//       </div>
//     </div>
//   );
// }

// export default GlassCard;




import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Add 'suffix' to the props, with a default empty string to make it optional
function GlassCard({ runningAnimation, text, suffix = "+" }) {
  const countRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    const triggerElement = cardRef.current;
    const counter = { value: 0 };

    const tween = gsap.to(counter, {
      value: runningAnimation,
      duration: 1.5,
      ease: "power2.out",
      onUpdate: () => {
        if (countRef.current) {
          // 1. Format the number as usual
          const formattedNumber = Math.round(counter.value).toLocaleString('en-US');
          // 2. Append the suffix to the final string
          countRef.current.innerText = `${formattedNumber}${suffix}`;
        }
      },
      scrollTrigger: {
        trigger: triggerElement,
        start: "top 80%",
        toggleActions: "restart none restart none",
      }
    });

    return () => {
      tween.kill();
    };
  }, [runningAnimation, suffix]); // Add suffix to dependency array

  return (
    <div
      ref={cardRef}
      className="w-full max-w-80 h-full rounded-2xl backdrop-blur-none bg-white/10 border border-white/20 shadow-lg flex flex-col justify-center items-center gap-1 text-cfew-interface py-12 px-4 lg-py-0"
      style={{
        backgroundColor: '#1B281626',
        boxShadow: 'inset 0 0 0 5.29px #1B281603'
      }}
    >
      <div ref={countRef} className="font-bold text-3xl lg:text-5xl">
        0{suffix} {/* Show initial suffix */}
      </div>
      <div className="font-semibold text-base md:text-lg ">
        {text}
      </div>
    </div>
  );
}

export default GlassCard;