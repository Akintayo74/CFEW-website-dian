// src/pages/Publication.jsx
import { useState } from "react";

export default function Publication() {
  const [title, setTitle] = useState("");
  const [publisher, setPublisher] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [link, setLink] = useState("");

  return (
    <div className="w-full h-full flex">
      {/* Main column */}
      <div className="flex-1 p-6 pr-4">
        {/* Page heading and actions */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-[#1B2816] text-[32px] font-bold">Post publication</h1>
          </div>
          <div className="flex items-center gap-3">
            <button className="px-4 py-2 rounded border border-[#C8D6C8] text-[#1B2816] bg-[#F3F6F3] hover:bg-white">Save Draft</button>
            <button className="px-4 py-2 rounded border border-[#C8D6C8] text-[#1B2816] hover:bg-[#F3F6F3]">Preview</button>
            <button className="px-4 py-2 rounded bg-[#4B6E3C] text-white hover:bg-[#39552E]">Publish</button>
          </div>
        </div>

        {/* Form fields - single column */}
        <div className="max-w-[720px]">
          {/* Title */}
          <label className="block text-sm text-gray-600 mb-2">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter title"
            className="w-full bg-[#4B6E3C1A] border border-[#C8D6C8] rounded px-4 py-3 outline-none mb-6"
          />

          {/* Publisher */}
          <label className="block text-sm text-gray-600 mb-2">Publisher</label>
          <input
            type="text"
            value={publisher}
            onChange={(e) => setPublisher(e.target.value)}
            placeholder="Enter publisher name"
            className="w-full bg-[#4B6E3C1A] border border-[#C8D6C8] rounded px-4 py-3 outline-none mb-6"
          />

          {/* Excerpt */}
          <label className="block text-sm text-gray-600 mb-2">Excerpt</label>
          <input
            type="text"
            value={excerpt}
            onChange={(e) => setExcerpt(e.target.value)}
            placeholder="Enter excerpt"
            className="w-full bg-[#4B6E3C1A] border border-[#C8D6C8] rounded px-4 py-3 outline-none mb-6"
          />

          {/* Featured image */}
          <label className="block text-sm text-gray-600 mb-2">Featured Image</label>
          <button
            type="button"
            className="w-full h-[120px] flex items-center justify-center bg-[#E9EFE9] border border-[#4B6E3C] rounded text-[#4B6E3C] mb-6"
          >
            Set featured image
          </button>

          {/* Link */}
          <label className="block text-sm text-gray-600 mb-2">Link</label>
          <input
            type="url"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            placeholder="Paste link"
            className="w-full bg-[#4B6E3C1A] border border-[#C8D6C8] rounded px-4 py-3 outline-none"
          />
        </div>
      </div>
    </div>
  );
}
