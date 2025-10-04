// src/pages/Posts.jsx
import { useState } from "react";
import { Plus } from "lucide-react";
import Button from "../components/Button";

export default function Posts() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");
  const [author, setAuthor] = useState("");

  return (
    <div className="w-full h-full flex">
      {/* Editor main column */}
      <div className="flex-1 p-6 pr-4">
        {/* Page heading and actions */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-[#1B2816] text-[32px] font-bold">Post blog</h1>
          </div>
          <div className="flex items-center gap-3">
            <button className="px-4 py-2 rounded border border-[#C8D6C8] text-[#1B2816] bg-[#F3F6F3] hover:bg-white">Save Draft</button>
            <button className="px-4 py-2 rounded border border-[#C8D6C8] text-[#1B2816] hover:bg-[#F3F6F3]">Preview</button>
            <button className="px-4 py-2 rounded bg-[#4B6E3C] text-white hover:bg-[#39552E]">Publish</button>
          </div>
        </div>

        {/* Title */}
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Add title"
          className="w-full text-[40px] font-bold text-[#1B2816] placeholder-[#1B2816] bg-transparent outline-none border-0 mb-6"
        />

        {/* Content placeholder area */}
        <div className="relative border border-[#E5E7EB] rounded bg-white min-h-[480px] p-6">
          <div className="flex items-center gap-2">
            <p className="text-[#1B2816] text-[14px]">
              Start writing or paste text / To choose a block
            </p>
            <button
              type="button"
              className="border border-[#4B6E3C] text-[#4B6E3C] rounded-[6px] hover:bg-[#4B6E3C] hover:text-white p-1"
              title="Add block"
            >
              <Plus size={18} />
            </button>
          </div>

          {/* Simple textarea as placeholder for editor */}
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full mt-4 h-[360px] resize-vertical outline-none"
            placeholder="Write your post content here..."
          />
        </div>
      </div>

      {/* Right side panel */}
      <aside className="w-[300px] bg-[#F7F7F7] border-l border-[#E5E7EB] p-4">
        <div className="mb-4">
          <label className="block text-sm text-gray-600 mb-2">Tags</label>
          <input
            type="text"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            placeholder="Enter tags"
            className="w-full bg-[#4B6E3C1A] border border-[#C8D6C8] rounded px-3 py-2 outline-none"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm text-gray-600 mb-2">Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Enter name"
            className="w-full bg-[#4B6E3C1A] border border-[#C8D6C8] rounded px-3 py-2 outline-none"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm text-gray-600 mb-2">Featured Image</label>
          <div className="border border-[#4B6E3C] rounded px-4 py-8 text-center bg-[#4B6E3C1A]">
            Preview
          </div>
        </div>
      </aside>
    </div>
  );
}
