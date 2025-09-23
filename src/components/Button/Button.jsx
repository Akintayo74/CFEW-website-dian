import React from "react";

function Button({ children, className = "", align = "self-start" }) {
  return (
    <button
      className={`${align} bg-cfew-primary-50 text-cfew-primary-500 border-cfew-primary-500 rounded-full border-[1.5px] px-6 py-3 text-sm font-normal ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
