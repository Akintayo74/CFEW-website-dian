import React from "react";

function ActionCard({ imageSrc, imageAlt, header, className = "" }) {
  return (
    <div
      className={`bg-cfew-primary-600 mx-auto mt-5 flex h-55 w-full max-w-sm flex-col items-center justify-center gap-6 rounded md:h-65 ${className}`}
    >
      <div className="bg-cfew-primary-500 border-cfew-interface rounded-full border p-4">
        <img src={imageSrc} alt={imageAlt} />
      </div>
      <div>
        <h4 className="text-cfew-interface text-3xl font-bold md:text-4xl">
          {header}
        </h4>
      </div>
    </div>
  );
}

export default ActionCard;
