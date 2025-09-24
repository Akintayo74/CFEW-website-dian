import React from "react";

function BlogCard({ imageSrc, imageAlt, publishDate, title }) {
  return (
    <div className="bg-cfew-primary-100 flex flex-col w-80">
      <div className="flex justify-center">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-auto object-cover"
        />
      </div>

      <div className="flex flex-col text-left gap-4 p-6">
        <p className="text-sm text-cfew-dark">{publishDate}</p>
        <h6 className="font-bold text-2xl text-cfew-dark">{title}</h6>
        <a href="https://www.wikipedia.org/" className="font-semibold text-sm text-cfew-primary-400">
          Read More
        </a>
      </div>
    </div>
  );
}

export default BlogCard;
