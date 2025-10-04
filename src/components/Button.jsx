// src/components/Button.jsx
export default function Button({
    children,
    type = "button",
    onClick,
    className = "",
  }) {
    return (
      <button
        type={type}
        onClick={onClick}
        className={`w-full py-2 bg-[#4B6E3C] text-white rounded hover:bg-green-700 transition cursor-pointer ${className}`}
      >
        {children}
      </button>
    );
  }
  