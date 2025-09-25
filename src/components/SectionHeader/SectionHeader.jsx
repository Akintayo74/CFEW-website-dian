import React from "react";

function SectionHeader({ children, align = 'text-center' }) {
  return <h1 className={`${align} text-cfew-dark  text-4xl lg:text-5xl mb-5 font-bold lg:mb-6`}>{children}</h1>;
}

export default SectionHeader;
