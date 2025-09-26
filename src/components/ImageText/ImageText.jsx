import React from "react";
import Container from "../Container";

function ImageText({
  imageSrc,
  imageAlt = "Image",
  reverse = false,
  title,
  children,
}) {
  return (
    <Container>
      <div
        className={`flex flex-col pt-12 md:gap-10 xl:gap-16 ${
          reverse ? "md:flex-row" : "md:flex-row-reverse"
        }`}
      >
        {/* Text container - always first on mobile */}
        <div className="mb-8 flex-1 lg:mb-0 lg:flex lg:flex-col lg:justify-center">
          {title && (
            <h2 className="text-cfew-dark mb-5 text-left text-3xl font-bold lg:mb-6 lg:text-5xl">
              {title}
            </h2>
          )}
          {children}
        </div>

        {/* Image container - always second on mobile */}
        <div className="flex-1">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="h-full w-full rounded object-cover lg:rounded-lg"
          />
        </div>
      </div>
    </Container>
  );
}

export default ImageText;
