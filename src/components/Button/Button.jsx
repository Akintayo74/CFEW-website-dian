import React from "react";

function Button({
  children,
  className = "",
  align = "self-start",
  size = "large",
  color = "primary",
  ...delegated
}) {

  const buttonSizes = {
    small: "px-4 py-2",
    medium: "px-4 py-2 lg:px-6 lg:py-3",
    large: "px-6 py-3 lg:px-8 lg:py-4",
  };

  const buttonColors = {
    primary: "bg-cfew-primary-500 text-white",
    clear: "bg-transparent text-cfew-interface border-[1.5px] border-cfew-interface",
    overlay: "bg-cfew-primary-500-15% text-cfew-primary-500 border-[1.5px] border-cfew-primary-500 hover:text-cfew-interface",
  };


  return (
    <button
      className={`${align} rounded-full text-base font-normal uppercase hover:bg-cfew-primary-400 cursor-pointer ${buttonSizes[size]} ${buttonColors[color]} ${className}`}
      {...delegated }
    >
      {children}
    </button>
  );
}

export default Button;
