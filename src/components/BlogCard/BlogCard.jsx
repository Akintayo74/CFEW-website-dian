import Container from "../Container/Container";
import React from "react";

function BlogCard({ imageSrc, imageAlt, publishDate, title }) {
  return (
    <div className="bg-cfew-primary-100 flex flex-col w-full">
      <div className="flex justify-center">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-auto object-cover"
        />
      </div>

      <div className="flex flex-col text-left gap-4 p-6">
        <p className="text-sm md:text-lg text-cfew-dark leading-relaxed">{publishDate}</p>
        <h6 className="font-bold text-2xl lg:text-3xl text-cfew-dark leading-[1.4]">{title}</h6>
        <a href="https://www.wikipedia.org/" className="font-semibold text-sm md:text-base leading-none text-cfew-primary-400 hover:underline">
          Read More
        </a>
      </div>
    </div>
  );
}

export default BlogCard;
