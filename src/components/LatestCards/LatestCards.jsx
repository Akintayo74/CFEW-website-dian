import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

function LatestCards({
  imageSrc,
  title,
  publisher,
  dateSent,
  textExcerpt,
  postId,
  enableLink = true,
}) {
  return (
    // <div className="flex flex-col md:flex-row md:justify-between md:gap-10 md:items-center text-left text-cfew-primary-900 mb-16 md:mb-30">
      <div className="md:grid md:grid-cols-5 md:gap-10 md:items-center text-left text-cfew-primary-900 mb-16 md:mb-30">
      <div className="w-full md:col-span-3 h-[300px] md:w-[500px] lg:w-[700px] aspect-[4/3] md:aspect-[16/9] lg:aspect-[3/2]">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover rounded-sm"
        />
      </div>
      <div className="md:col-span-2 flex flex-col gap-5">
        <h6 className="font-bold text-xl lg:text-3xl mt-6">{title}</h6>
        <div className="flex gap-5 items-center text-sm">
          <p>{publisher}</p>
          <p>{dateSent}</p>
        </div>
        <p className="[display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:3] overflow-hidden">{textExcerpt}</p>
        {/* <Link to={`/posts/${postId}`}>
          <Button className="bg-cfew-primary-100">Read More</Button>
        </Link> */}

        {enableLink ? (
          <Link to={`/posts/${postId}`}>
            <Button className='bg-cfew-primary-100'>
              Read More
            </Button>
          </Link>
        ) : (
          <Button className='bg-cfew-primary-100' disabled>
            Read More
          </Button>
        )}
      </div>
    </div>
  );
}

export default LatestCards;
