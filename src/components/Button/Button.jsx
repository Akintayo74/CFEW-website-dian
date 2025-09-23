import React from 'react';

function Button({ children, className = '', align = 'self-start' }) {
  return (
    <button 
      className={`${align} bg-cfew-primary-50 text-cfew-primary-500 border-[1.5px] border-cfew-primary-500 px-6 py-3 rounded-full font-normal text-sm ${className}`}
    >
      { children }
    </button>
  );
}

export default Button;
