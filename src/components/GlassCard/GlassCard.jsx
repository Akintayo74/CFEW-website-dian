import React from "react";

function GlassCard({ runningAnimation, text }) {
  return (
    <div 
      className="w-full max-w-80 h-full rounded-2xl backdrop-blur-none bg-white/1 border border-white/20 shadow-lg flex flex-col justify-center items-center gap-1 text-cfew-interface py-12 lg:py-0"
      style={{
        backgroundColor: '#1B281626',
        boxShadow: 'inset 0 0 0 5.29px #1B281603'
      }}  
    >
      <div className="font-bold text-3xl lg:text-5xl">
        { runningAnimation }
      </div>
      <div className="font-semibold text-base md:text-lg ">
        { text }
      </div>
    </div>
  );
}

export default GlassCard;