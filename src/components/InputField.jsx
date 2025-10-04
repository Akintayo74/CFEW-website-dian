// src/components/InputField.jsx
import { useState } from "react";

export default function InputField({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  required = false,
  showToggle = false, // for password visibility toggle
}) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      {label && <label className="block text-sm font-medium">{label}</label>}
      <div className="relative">
        <input
          type={showToggle ? (showPassword ? "text" : "password") : type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          className="w-full text-[#2D2D2D] text-[16px] font-normal p-[12px] mt-1 bg-[#4B6E3C1A] rounded-[8px] focus:outline-green-700 gap-[8px]"
        />
        {showToggle && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-2 top-4 text-gray-500"
          >
            {showPassword ? "🙈" : "👁️"}
          </button>
        )}
      </div>
    </div>
  );
}
