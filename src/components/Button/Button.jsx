import React from "react";

function Button({
  children,
  className = "",
  align = "self-start",
  size = "small",
  color = "primary",
}) {

  const buttonSizes = {
    small: "px-4 py-2",
    medium: "px-6 py-3",
    large: "px-8 py-4",
  };

  const buttonColors = {
    primary: "bg-cfew-primary-500 text-white",
    clear: "bg-cfew-interface",
    overlay: "bg-cfew-primary-500-15%",
  };


  return (
    <button
      className={`${align} text-cfew-primary-500 border-cfew-primary-500 rounded-full border-[1.5px] px-6 py-3 text-sm font-normal hover:bg-cfew-primary-500-15% ${buttonSizes[size]} ${buttonColors[color]} ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
