import Container from "../Container/Container";
import React from "react";

function BlogCard({ imageSrc, imageAlt, publishDate, title, background = 'bg-cfew-trial' }) {
  return (
    <div className={`${background} flex flex-col w-full}`}>
      {/* <div className="flex justify-center">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-50 md:h-60 lg:h-80 object-cover"
        />
      </div> */}

      <div className="w-full aspect-[4/3] md:aspect-[16/9] lg:aspect-[3/2]">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col text-left gap-4 p-6">
        <p className="text-sm md:text-base lg:text-lg text-cfew-dark leading-relaxed">{publishDate}</p>
        <div>
        <h6 className="font-bold text-xl lg:text-2xl text-cfew-dark leading-[1.4] [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:3] overflow-hidden">{title}</h6>
        </div>
        <a href="https://www.wikipedia.org/" className="font-semibold text-sm md:text-base leading-none text-cfew-primary-400 hover:underline">
          Read More
        </a>
      </div>
    </div>
  );
}

export default BlogCard;
