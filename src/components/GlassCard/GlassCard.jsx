import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function GlassCard({ runningAnimation, text, suffix = "+" }) {
  const countRef = React.useRef(null);
  const cardRef = React.useRef(null);

  React.useEffect(() => {
    const triggerElement = cardRef.current;
    const counter = { value: 0 };

    // Check if screen is mobile (less than 640px)
    const isMobile = window.matchMedia("(max-width: 639px)").matches;
    
    if (isMobile) {
      // Skip animation on mobile - show final value immediately
      if (countRef.current) {
        const formattedNumber = runningAnimation.toLocaleString('en-US');
        countRef.current.innerText = `${formattedNumber}${suffix}`;
      }
      return; // Exit early, no animation
    }


    const tween = gsap.to(counter, {
      value: runningAnimation,
      duration: 2.5,
      ease: "power2.out",
      onUpdate: () => {
        if (countRef.current) {
          const formattedNumber = Math.round(counter.value).toLocaleString('en-US');
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
  }, [runningAnimation, suffix]);

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