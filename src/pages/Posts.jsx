// src/pages/Posts.jsx
import { useEffect, useRef, useState } from "react";
import { Plus, Pilcrow, Image as ImageIcon, List, Bookmark, X, Upload, Trash2 } from "lucide-react";
import postService from "../services/postService";

export default function Posts() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");
  const [author, setAuthor] = useState("");
  const [showBlockMenu, setShowBlockMenu] = useState(false);
  const [blocks, setBlocks] = useState([]);
  const [featuredImage, setFeaturedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ success: false, message: '' });
  const [showStatus, setShowStatus] = useState(false);
  const blockMenuRef = useRef(null);
  const editorRef = useRef(null);
  const fileInputRef = useRef(null);

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

  // Handle featured image upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFeaturedImage(file);
      // Create a preview URL for the image
      const previewUrl = URL.createObjectURL(file);
      setImagePreview(previewUrl);
    }
  };

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const removeImage = (e) => {
    e.stopPropagation();
    setFeaturedImage(null);
    setImagePreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ success: false, message: '' });
    setShowStatus(true);

    try {
      // Prepare text blocks from the editor
      const textBlocks = blocks
        .filter(block => block.type === 'paragraph' || block.type === 'heading')
        .map((block, index) => ({
          content: block.content,
          position: index
        }));

      const formData = {
        type: "blog",
        title,
        author,
        featuredImage: imagePreview || "https://example.com/images/blog-featured.jpg",
        tags: tags.split(',').map(tag => tag.trim()).filter(tag => tag !== ''),
        textBlocks
      };

      const response = await postService.createPost(formData);

      setSubmitStatus({
        success: true,
        message: 'Blog post created successfully!',
        data: response.data
      });
      
      // Auto-hide success message after 3 seconds
      setTimeout(() => {
        setShowStatus(false);
      }, 3000);

      // Reset form on successful submission
      setTitle('');
      setAuthor('');
      setTags('');
      setBlocks([]);
      setFeaturedImage(null);
      setImagePreview(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    } catch (error) {
      console.error('Error publishing blog post:', error);
      setSubmitStatus({
        success: false,
        message: error.response?.data?.message || 'Failed to publish blog post. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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

  // Auto-resize textarea based on content
  const autoResize = (element) => {
    element.style.height = 'auto';
    element.style.height = element.scrollHeight + 'px';
  };

  // Handle textarea input with auto-resize
  const handleTextareaInput = (e, blockId) => {
    autoResize(e.target);
    updateBlockContent(blockId, e.target.value);
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
              id={block.id}
              value={block.content}
              onChange={(e) => handleTextareaInput(e, block.id)}
              onInput={(e) => autoResize(e.target)}
              placeholder="Write a paragraph..."
              className="w-full outline-none bg-transparent resize-none min-h-[100px] max-h-[500px] p-2 border border-transparent hover:border-gray-200 rounded overflow-y-auto"
              style={{ minHeight: '100px', maxHeight: '500px', overflowY: 'auto' }}
            />
            <button
              onClick={() => removeBlock(block.id)}
              className="opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-red-100 rounded absolute right-2 top-2"
            >
              <X size={16} />
            </button>
          </div>
        );
      
      case 'heading':
        return (
          <div className="relative group flex items-start gap-2">
            <textarea
              id={block.id}
              value={block.content}
              onChange={(e) => handleTextareaInput(e, block.id)}
              onInput={(e) => autoResize(e.target)}
              placeholder="Enter subheading..."
              className="w-full outline-none bg-transparent resize-none min-h-[60px] max-h-[200px] p-2 text-xl font-bold border border-transparent hover:border-gray-200 rounded overflow-y-auto"
              style={{ minHeight: '60px', maxHeight: '200px', overflowY: 'auto' }}
            />
            <button
              onClick={() => removeBlock(block.id)}
              className="opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-red-100 rounded absolute right-2 top-2"
            >
              <X size={16} />
            </button>
          </div>
        );
      
      case 'list':
        return (
          <div className="relative group flex items-start gap-2 w-full">
            <div className="flex-1 border border-transparent hover:border-gray-200 rounded p-2 w-full">
              <textarea
                id={block.id}
                value={block.content}
                onChange={(e) => handleTextareaInput(e, block.id)}
                onInput={(e) => autoResize(e.target)}
                className="w-full outline-none bg-transparent resize-none min-h-[80px] max-h-[500px] overflow-y-auto"
                style={{ minHeight: '80px', maxHeight: '500px' }}
                placeholder="Enter list items (one per line)..."
              />
              <div className="mt-2 text-sm text-gray-500">
                Tip: Type each list item on a new line
              </div>
            </div>
            <button
              onClick={() => removeBlock(block.id)}
              className="opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-red-100 rounded absolute right-2 top-2"
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
            <button 
              type="button"
              onClick={handleSubmit}
              disabled={isSubmitting}
              className={`px-4 py-2 rounded bg-[#4B6E3C] text-white hover:bg-[#39552E] ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? 'Submitting...' : 'Create & Save'}
            </button>
          </div>
        </div>

        {/* Status message */}
        {showStatus && submitStatus.message && (
          <div className={`mb-6 p-4 rounded ${submitStatus.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
            {submitStatus.message}
          </div>
        )}

        {/* Title */}
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Add title"
          className="w-full text-[40px] font-bold text-[#1B2816] placeholder-[#1B2816] bg-transparent outline-none border-0 mb-6"
          required
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
          <label className="block text-[14px] text-[#1B2816] font-normal mb-2">Tags</label>
          <input
            type="text"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            placeholder="Enter tags"
            className="w-full bg-[#4B6E3C1A] border border-[#C8D6C8] rounded px-3 py-2 outline-none"
          />
          <p className="text-xs text-gray-500 mt-1">Separate tags with commas</p>
        </div>
        <div className="mb-4">
          <label className="block text-[14px] text-[#1B2816] font-normal mb-2">Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Enter name"
            className="w-full bg-[#4B6E3C1A] border border-[#C8D6C8] rounded px-3 py-2 outline-none"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-[14px] text-[#1B2816] font-normal mb-2">Featured Image</label>
          <div className="relative">
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleImageChange}
              accept="image/*"
              className="hidden"
            />
            <div 
              onClick={handleImageClick}
              className={`border-2 border-dashed ${imagePreview ? 'border-transparent p-0' : 'border-[#4B6E3C] p-8'} rounded-lg bg-[#4B6E3C1A] cursor-pointer overflow-hidden`}
            >
              {imagePreview ? (
                <div className="relative group">
                  <img 
                    src={imagePreview} 
                    alt="Preview" 
                    className="w-full h-40 object-cover rounded"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-200 flex items-center justify-center">
                    <button 
                      type="button"
                      onClick={removeImage}
                      className="opacity-0 group-hover:opacity-100 bg-white text-red-600 rounded-full p-2 hover:bg-red-50 transition-opacity"
                      title="Remove image"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center text-center">
                  <p className="text-sm text-[#4B6E3C] font-medium">Upload featured image</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}