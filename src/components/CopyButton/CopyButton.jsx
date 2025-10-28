import React from "react";
import Clipboard from "../../assets/clipboard.svg";

function CopyButton({ text, label, prefix }) {
  const [copied, setCopied] = React.useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text");
    }
  }

  return (
    <div className="inline-flex gap-1 relative leading-relaxed self-start">
      <button
        className="flex items-center gap-2.5"
        onClick={handleCopy}
      >
        {prefix && <span className="text-cfew-primary-500 font-semibold text-lg">{prefix}</span>}
        {label || text}
        <span>
          <img
            src={Clipboard}
            alt="An Image of a clipboard to indicate a copy paste feature"
            className="flex-shrink-0"
          />
        </span>
      </button>
      {copied && (
        <span className="absolute left-full top-1/2 -translate-y-1/2 ml-2 text-sm bg-cfew-primary-800 opacity-100 text-white px-4 py-2 rounded shadow-lg w-max z-5">
          Text Copied!
        </span>
      )}
    </div>
  );
}

export default CopyButton;
