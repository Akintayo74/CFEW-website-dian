import React from 'react';
import Clipboard from '../../assets/clipboard.svg'

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
    <div className="flex flex-col gap-1 relative leading-relaxed">
      <button className="flex items-center gap-2.5" onClick={handleCopy}>
        {prefix && <span className="text-cfew-dark">{prefix}</span>}
        {label || text}
        <span>
          <img
            src={Clipboard}
            alt="An Image of a clipboard to indicate a copy paste feature"
          />
        </span>
      </button>
      {copied && (
        <span className="absolute top-4 md:top-7 left-0 text-sm bg-cfew-primary-800 opacity-100 text-white px-4 py-2 rounded shadow-lg w-max z-5">
         Text Copied!
        </span>
      )}
    </div>
  );
}

export default CopyButton;