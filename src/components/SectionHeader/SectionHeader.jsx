import React from "react";

function SectionHeader({ children, align = 'text-center', marginBottom = "lg:mb-6", textColor = 'text-cfew-dark', className = "" }) {
  return <h1 className={`${align} ${textColor}  text-4xl lg:text-[56px] mb-5 font-bold ${marginBottom} ${className}`}>{children}</h1>;
}

export default SectionHeader;
