import Container from "../Container/Container";
import React from "react";

function BlogCard({ imageSrc, imageAlt, publishDate, title, background = 'bg-cfew-blog-default', destination }) {
  return (
    <div className={`${background} flex flex-col w-full}`}>

      <div className="w-full aspect-[4/3] md:aspect-[16/9] lg:aspect-[3/2]">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col text-left gap-4 p-6 hover:cursor-pointer transition duration-300 hover:bg-cfew-blog-hover">
        <p className="text-sm md:text-base lg:text-lg text-cfew-dark leading-relaxed">{publishDate}</p>
        <div>
        <h6 className="font-bold text-xl lg:text-2xl text-cfew-dark leading-[1.4] [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:3] overflow-hidden">{title}</h6>
        </div>
        <a href={destination} className="font-semibold text-sm md:text-base leading-none text-cfew-primary-400 hover:underline">
          Read More
        </a>
      </div>
    </div>
  );
}

export default BlogCard;
