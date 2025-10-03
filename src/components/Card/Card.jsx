import React from "react";

function Card() {
  return (
    <div className="bg-cfew-transparent p-4 md:p-6 lg:p-8 max-w-[90%] md:max-w-lg lg:max-w-2xl">
      <h4 className="text-cfew-interface mb-3 text-lg font-bold md:mb-5 md:text-3xl lg:text-5xl lg:font-black">
        Securing the Earth Through Community Empowerment
      </h4>
      <p className="text-cfew-interface mb-4 text-xs leading-relaxed md:mb-6 md:text-sm lg:text-base">
        At Centre for Earth Works (CFEW), we unite young minds and communities
        to protect the environment, tackle climate change, and build a
        sustainable future.
      </p>
      <div className="flex gap-3 md:gap-4">
        <button className="bg-cfew-primary-500 rounded-full px-4 py-2 text-xs font-normal text-white md:px-6 md:py-3 md:text-sm">
          Donate
        </button>
        <button className="border-cfew-interface rounded-full border-[1.5px] bg-transparent px-4 py-2 text-xs font-normal text-white md:px-6 md:py-3 md:text-sm">
          Volunteer
        </button>
      </div>
    </div>
  );
}

export default Card;