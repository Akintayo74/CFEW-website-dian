import React from "react";
import Card from "../Card/Card";
import ImageBanner from "../ImageBanner/ImageBanner";

function Slideshow() {
  const slides = [
    { src: "/slide-1.png", alt: "Slide 1" },
    { src: "/slide-2.png", alt: "Slide 2" },
    { src: "/slide-3.png", alt: "Slide 3" },
    { src: "/slide-4.png", alt: "Slide 4" },
    { src: "/slide-5.png", alt: "Slide 5" },
  ];

  const [currentSlide, setCurrentSlide] = React.useState(0);

  // Auto-advance slides every 5 seconds
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative">
      <ImageBanner
        imageSrc={slides[currentSlide].src}
        imageAlt={slides[currentSlide].alt}
      >
        <Card />
      </ImageBanner>
    </div>
  );
}

export default Slideshow;
