import React from "react";

function SectionHeader({ children, align = 'text-center', marginBottom = "lg:mb-6" }) {
  return <h1 className={`${align} text-cfew-dark  text-4xl lg:text-5xl mb-5 font-bold ${marginBottom}`}>{children}</h1>;
}

export default SectionHeader;
