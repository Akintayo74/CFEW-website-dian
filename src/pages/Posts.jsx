// src/pages/Posts.jsx
import { useEffect, useRef, useState } from "react";
import { Plus, Pilcrow, Image as ImageIcon, List, Bookmark, X } from "lucide-react";

export default function Posts() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");
  const [author, setAuthor] = useState("");
  const [showBlockMenu, setShowBlockMenu] = useState(false);
  const [blocks, setBlocks] = useState([]);
  const blockMenuRef = useRef(null);
  const editorRef = useRef(null);

  // Close the block menu when clicking outside
  useEffect(() => {
    function onDocClick(e) {
      if (blockMenuRef.current && !blockMenuRef.current.contains(e.target)) {
        setShowBlockMenu(false);
      }
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  // Function to insert different types of blocks
  const insertBlock = (blockType) => {
    const newBlock = {
      id: Date.now().toString(),
      type: blockType,
      content: "",
    };

    setBlocks([...blocks, newBlock]);
    setShowBlockMenu(false);
    
    // Focus the new block after a short delay
    setTimeout(() => {
      const newBlockElement = document.getElementById(newBlock.id);
      if (newBlockElement) {
        newBlockElement.focus();
      }
    }, 50);
  };

  // Update block content
  const updateBlockContent = (id, newContent) => {
    setBlocks(blocks.map(block => 
      block.id === id ? { ...block, content: newContent } : block
    ));
  };

  // Remove a block
  const removeBlock = (id) => {
    setBlocks(blocks.filter(block => block.id !== id));
  };

  // Render different block types
  const renderBlock = (block) => {
    const commonProps = {
      id: block.id,
      className: "w-full outline-none bg-transparent resize-none",
      value: block.content,
      onChange: (e) => updateBlockContent(block.id, e.target.value),
      placeholder: getBlockPlaceholder(block.type),
    };

    switch (block.type) {
      case 'paragraph':
        return (
          <div className="relative group flex items-start gap-2">
            <textarea
              {...commonProps}
              className="w-full outline-none bg-transparent resize-none min-h-[100px] p-2 border border-transparent hover:border-gray-200 rounded"
              placeholder="Write a paragraph..."
            />
            <button
              onClick={() => removeBlock(block.id)}
              className="opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-red-100 rounded"
            >
              <X size={16} />
            </button>
          </div>
        );
      
      case 'heading':
        return (
          <div className="relative group flex items-start gap-2">
            <textarea
              {...commonProps}
              className="w-full outline-none bg-transparent resize-none min-h-[60px] p-2 text-xl font-bold border border-transparent hover:border-gray-200 rounded"
              placeholder="Enter subheading..."
            />
            <button
              onClick={() => removeBlock(block.id)}
              className="opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-red-100 rounded"
            >
              <X size={16} />
            </button>
          </div>
        );
      
      case 'list':
        return (
          <div className="relative group flex items-start gap-2">
            <div className="flex-1 border border-transparent hover:border-gray-200 rounded p-2">
              <textarea
                {...commonProps}
                className="w-full outline-none bg-transparent resize-none min-h-[80px]"
                placeholder="Enter list items (one per line)..."
              />
              <div className="mt-2 text-sm text-gray-500">
                Tip: Type each list item on a new line
              </div>
            </div>
            <button
              onClick={() => removeBlock(block.id)}
              className="opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-red-100 rounded"
            >
              <X size={16} />
            </button>
          </div>
        );
      
      case 'image':
        return (
          <div className="relative group flex items-start gap-2">
            <div className="flex-1 border-2 border-dashed border-gray-300 rounded p-4 text-center">
              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) {
                    const reader = new FileReader();
                    reader.onload = (e) => {
                      updateBlockContent(block.id, e.target.result);
                    };
                    reader.readAsDataURL(file);
                  }
                }}
                className="hidden"
                id={`image-upload-${block.id}`}
              />
              {block.content ? (
                <div className="relative">
                  <img 
                    src={block.content} 
                    alt="Uploaded" 
                    className="max-w-full h-auto max-h-64 mx-auto rounded"
                  />
                  <button
                    onClick={() => updateBlockContent(block.id, "")}
                    className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1"
                  >
                    <X size={14} />
                  </button>
                </div>
              ) : (
                <label 
                  htmlFor={`image-upload-${block.id}`}
                  className="cursor-pointer block"
                >
                  <ImageIcon size={48} className="mx-auto mb-2 text-gray-400" />
                  <div className="text-gray-600">Click to upload image</div>
                  <div className="text-sm text-gray-400">or drag and drop</div>
                </label>
              )}
            </div>
            <button
              onClick={() => removeBlock(block.id)}
              className="opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-red-100 rounded"
            >
              <X size={16} />
            </button>
          </div>
        );
      
      default:
        return null;
    }
  };

  const getBlockPlaceholder = (type) => {
    switch (type) {
      case 'paragraph': return 'Write a paragraph...';
      case 'heading': return 'Enter subheading...';
      case 'list': return 'Enter list items (one per line)...';
      case 'image': return '';
      default: return '';
    }
  };

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

        {/* Content area with blocks */}
        <div className="border border-[#E5E7EB] rounded bg-white min-h-[480px] p-6">
          {/* Empty state */}
          {blocks.length === 0 && (
            <div className="flex items-center gap-2 mb-4">
              <p className="text-[#1B2816] text-[14px]">
                Start writing or paste text / To choose a block
              </p>
              <button
                type="button"
                className="border border-[#4B6E3C] text-[#4B6E3C] rounded-[6px] hover:bg-[#4B6E3C] hover:text-white p-1"
                title="Add block"
                onClick={() => setShowBlockMenu(true)}
              >
                <Plus size={18} />
              </button>
            </div>
          )}

          {/* Render blocks */}
          <div className="space-y-4">
            {blocks.map(block => (
              <div key={block.id} className="block-item">
                {renderBlock(block)}
              </div>
            ))}
          </div>

          {/* Add block button when there are blocks */}
          {blocks.length > 0 && (
            <div className="mt-4 flex justify-center">
              <button
                type="button"
                className="border border-[#4B6E3C] text-[#4B6E3C] rounded-[6px] hover:bg-[#4B6E3C] hover:text-white p-2"
                title="Add another block"
                onClick={() => setShowBlockMenu(true)}
              >
                <Plus size={18} />
              </button>
            </div>
          )}

          {/* Block menu popup */}
          {showBlockMenu && (
            <div
              ref={blockMenuRef}
              className="absolute left-1/2 -translate-x-1/2 mt-6 w-[276px] bg-[#F7F7F7] shadow-md rounded-[12px] border border-[#BBCCBB] p-[16px] z-10"
            >
              <div className="flex flex-col justify-between gap-[16px]">
                <div className="flex items-center justify-between gap-4">
                  <button
                    type="button"
                    className="flex flex-col items-center justify-center w-full h-full rounded-[8px] hover:bg-white text-[#1B2816] p-[16px]"
                    onClick={() => insertBlock('paragraph')}
                  >
                    <Pilcrow color="#4b6e3c" size={18} className="mb-1" />
                    <span className="text-[16px] text-[#4B6E3C] font-normal">Paragraph</span>
                  </button>

                  <button
                    type="button"
                    className="flex flex-col items-center justify-center w-full h-full rounded-[8px] hover:bg-white text-[#1B2816] p-[16px]"
                    onClick={() => insertBlock('image')}
                  >
                    <ImageIcon color="#4b6e3c" size={18} className="mb-1" />
                    <span className="text-[16px] text-[#4B6E3C] font-normal">Images</span>
                  </button>
                </div>

                <div className="flex items-center justify-between gap-4">
                  <button
                    type="button"
                    className="flex flex-col items-center justify-center w-full h-full rounded-[8px] hover:bg-white text-[#1B2816] p-[16px]"
                    onClick={() => insertBlock('list')}
                  >
                    <List size={18} className="mb-1" />
                    <span className="text-[16px] text-[#4B6E3C] font-normal">List</span>
                  </button>

                  <button
                    type="button"
                    className="flex flex-col items-center justify-center w-full h-full rounded-[8px] hover:bg-white text-[#1B2816] p-[16px]"
                    onClick={() => insertBlock('heading')}
                  >
                    <Bookmark color="#4b6e3c" size={18} className="mb-1" />
                    <span className="text-[16px] text-[#4B6E3C] font-normal">Sub Heading</span>
                  </button>
                </div>
              </div>
            </div>
          )}
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