import React from "react";
import Card from "../Card/Card";

function Slideshow() {
  //  const slides = [
  //   "/slide-1.png",
  //   "/slide-2.png",
  //   "/slide-3.png",
  //   "/slide-4.png",
  //   "/slide-5.png",
  // ];

  return (
    <div className="relative">
      <img src="/slide-1.png" className="h-150 w-full md:h-auto" />
      <div className="absolute bottom-20 left-0">
        <Card />
      </div>
    </div>
  );
}

export default Slideshow;
