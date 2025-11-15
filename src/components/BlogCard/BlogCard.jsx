// import React from "react";
// import { Link } from "react-router-dom";

// function BlogCard({
//   imageSrc,
//   imageAlt,
//   publishDate,
//   title,
//   background = "bg-cfew-blog-default",
//   postId,
//   externalLink,
// }) {

//   // If there's an external link, use <a> tag with target="_blank"
//   if (externalLink) {
//     return (
//       <a
//         href={externalLink}
//         target="_blank"
//         rel="noopener noreferrer"
//         className="block hover:opacity-90 transition-opacity"
//       >
//         {/* Your existing card content */}
//       </a>
//     );
//   }

//   return (
//     <Link
//       to={`/posts/${postId}`}
//       className={`${background} flex flex-col w-full`}
//     >
//       <div className="w-full aspect-[4/3] md:aspect-[16/9] lg:aspect-[3/2] overflow-hidden group">
//         <img
//           src={imageSrc}
//           alt={imageAlt}
//           className="w-full h-full object-cover scale-105 transition-transform duration-500 ease-in-out group-hover:scale-120 group-hover:duration-200 group-hover:ease-out"
//           style={{
//             transform: "scale(1.05) translateZ(0)",
//             backfaceVisibility: "hidden",
//             WebkitBackfaceVisibility: "hidden",
//             transformOrigin: "center center",
//           }}
//         />
//       </div>
//       <div className="group flex flex-col text-left gap-4 p-6 hover:cursor-pointer transition duration-300 text-cfew-dark hover:text-white hover:bg-cfew-blog-hover flex-1">
//         <p className="text-sm md:text-base lg:text-lg leading-relaxed">
//           {publishDate}
//         </p>
//         <div className="flex-1">
//           <h6 className="font-bold text-xl lg:text-2xl leading-[1.4] [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:3] overflow-hidden">
//             {title}
//           </h6>
//         </div>
//         <span className="font-semibold text-sm md:text-base leading-none text-cfew-primary-400 group-hover:text-cfew-primary-600 hover:underline">
//           Read More
//         </span>
//       </div>
//     </Link>
//   );
// }

// export default BlogCard;

import React from "react";
import { Link } from "react-router-dom";

function BlogCard({
  imageSrc,
  imageAlt,
  publishDate,
  background = "bg-cfew-blog-default",
  title,
  postId,
  externalLink,
}) {
  // Check if externalLink is a valid, non-empty URL
  const hasExternalLink =
    externalLink &&
    typeof externalLink === "string" &&
    externalLink.trim().length > 0;

  // Shared card content
  const cardContent = (
    <div className={`flex flex-col w-full flex-1`}>
      <div className="w-full aspect-[4/3] md:aspect-[16/9] lg:aspect-[3/2] overflow-hidden group">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-full object-cover scale-105 transition-transform duration-500 ease-in-out group-hover:scale-120 group-hover:duration-200 group-hover:ease-out"
          style={{
            transform: "scale(1.05) translateZ(0)",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transformOrigin: "center center",
          }}
        />
      </div>
      <div className="group flex flex-col text-left gap-4 p-6 hover:cursor-pointer transition duration-300 text-cfew-dark hover:text-white hover:bg-cfew-blog-hover flex-1">
        <p className="text-sm md:text-base lg:text-lg leading-relaxed">
          {publishDate}
        </p>
        <div className="flex-1">
          <h6 className="font-bold text-xl lg:text-2xl leading-[1.4] [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:3] overflow-hidden">
            {title}
          </h6>
        </div>
        <span className="font-semibold text-sm md:text-base leading-none text-cfew-primary-400 group-hover:text-cfew-primary-600 hover:underline">
          Read More
        </span>
      </div>
    </div>
  );

  // External link
  if (hasExternalLink) {
    return (
      <a
        href={externalLink}
        target="_blank"
        rel="noopener noreferrer"
        className={`${background} flex flex-col w-full h-full hover:opacity-90 transition-opacity`}
      >
        {cardContent}
      </a>
    );
  }

  // Internal link (blog posts)
  return (
    <Link
      to={`/posts/${postId}`}
      className={`${background} flex flex-col w-full h-full hover:opacity-90 transition-opacity`}
    >
      {cardContent}
    </Link>
  );
}

export default BlogCard;
