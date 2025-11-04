import React from "react";
import { Link } from "react-router-dom";

function ThematicCards({ href, imageSrc, cardName }) {
  return (
    <Link
      to={href}
      className="relative group overflow-hidden block leading-none"
    >
      <img
        src={imageSrc}
        alt={cardName}
        className="h-full w-full block object-cover scale-105 transition-transform duration-500 ease-in-out group-hover:scale-120 group-hover:duration-200 group-hover:ease-out"
        style={{ 
          transform: 'scale(1.05) translateZ(0)',
          backfaceVisibility: 'hidden',
          WebkitBackfaceVisibility: 'hidden',
          transformOrigin: 'center center'
        }}
      />
      <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100 group-hover:duration-200 group-hover:ease-out"></div>
      <p className="text-cfew-primary-50 absolute bottom-5 left-5 text-sm font-bold md:text-2xl lg:bottom-10 lg:left-10">
        {cardName}
      </p>
    </Link>
  );
}

export default ThematicCards;