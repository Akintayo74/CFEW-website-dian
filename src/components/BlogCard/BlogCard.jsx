import React from "react";
import { Link } from "react-router-dom";

function BlogCard({ 
  imageSrc, 
  imageAlt, 
  publishDate, 
  title, 
  background = 'bg-cfew-blog-default',
  postId // Add this prop
}) {
  return (
    <Link 
      to={`/posts/${postId}`}
      className={`${background} flex flex-col w-full hover:shadow-lg transition-shadow duration-300 `}
    >
      <div className="w-full aspect-[4/3] md:aspect-[16/9] lg:aspect-[3/2]">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col text-left gap-4 p-6 hover:cursor-pointer transition duration-300 hover:bg-cfew-blog-hover flex-1">
        <p className="text-sm md:text-base lg:text-lg text-cfew-dark leading-relaxed">
          {publishDate}
        </p>
        <div className="flex-1">
          <h6 className="font-bold text-xl lg:text-2xl text-cfew-dark leading-[1.4] [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:3] overflow-hidden">
            {title}
          </h6>
        </div>
        <span className="font-semibold text-sm md:text-base leading-none text-cfew-primary-400 hover:underline">
          Read More
        </span>
      </div>
    </Link>
  );
}

export default BlogCard;