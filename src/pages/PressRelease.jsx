// src/pages/PressRelease.jsx
import { useState, useRef } from "react";
import postService from "../services/postService";

export default function PressRelease() {
  const [title, setTitle] = useState("");
  const [press, setPress] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [link, setLink] = useState("");
  const [featuredImage, setFeaturedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ success: false, message: '' });
  const [showStatus, setShowStatus] = useState(false);
  const fileInputRef = useRef(null);

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
    e.stopPropagation(); // Prevent triggering the file input
    setFeaturedImage(null);
    setImagePreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = ''; // Reset the file input
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ success: false, message: '' });
    setShowStatus(true);

    try {
      const formData = {
        type: "press-release",
        title,
        press,
        excerpt,
        link,
        featuredImage: "https://example.com/images/press-release-featured.jpg" // In a real app, you'd upload this to a storage service first
      };

      const response = await postService.createPost(formData);

      setSubmitStatus({
        success: true,
        message: 'Press release submitted successfully!',
        data: response.data
      });
      
      // Auto-hide success message after 3 seconds
      setTimeout(() => {
        setShowStatus(false);
      }, 3000);

      // Reset form on successful submission
      setTitle('');
      setPress('');
      setExcerpt('');
      setLink('');
      setFeaturedImage(null);
      setImagePreview(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    } catch (error) {
      console.error('Error submitting press release:', error);
      setSubmitStatus({
        success: false,
        message: error.response?.data?.message || 'Failed to submit press release. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full h-full flex">
      {/* Main column */}
      <div className="flex-1 p-6 pr-4">
        {/* Status message */}
        {showStatus && submitStatus.message && (
          <div className={`mb-6 p-4 rounded ${submitStatus.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
            {submitStatus.message}
          </div>
        )}

        {/* Page heading and actions */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-[#1B2816] text-[32px] font-bold">Post press release</h1>
          </div>
          <div className="flex items-center mr-45">
            <button 
              type="button"
              onClick={handleSubmit}
              disabled={isSubmitting}
              className={`cursor-pointer px-4 py-2 rounded bg-[#4B6E3C] text-white hover:bg-[#39552E] ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? 'Submitting...' : 'Create & Save'}
            </button>
          </div>
        </div>

        {/* Form fields - single column */}
        <form onSubmit={handleSubmit} className="max-w-[790px]">
          {/* Title */}
          <label className="block text-[14px] text-[#1B2816] mb-2">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter title"
            className="w-full bg-[#4B6E3C1A] border border-[#C8D6C8] rounded px-4 py-3 outline-none mb-6"
          />

          {/* Press name */}
          <label className="block text-[14px] text-[#1B2816] mb-2">Press</label>
          <input
            type="text"
            value={press}
            onChange={(e) => setPress(e.target.value)}
            placeholder="Enter press name"
            className="w-full bg-[#4B6E3C1A] border border-[#C8D6C8] rounded px-4 py-3 outline-none mb-6"
          />

          {/* Excerpt */}
          <label className="block text-[14px] text-[#1B2816] font-normal mb-2">Excerpt</label>
          <input
            type="text"
            value={excerpt}
            onChange={(e) => setExcerpt(e.target.value)}
            placeholder="Enter excerpt"
            className="w-full bg-[#4B6E3C1A] border border-[#C8D6C8] rounded px-4 py-3 outline-none mb-6"
          />

          {/* Featured image */}
          <label className="block text-[14px] text-[#1B2816] font-normal mb-2">Featured Image</label>
          <div className="relative mb-6">
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleImageChange}
              accept="image/*"
              className="hidden"
            />
            <button
              type="button"
              onClick={handleImageClick}
              className={`w-full h-[150px] flex flex-col items-center justify-center ${imagePreview ? 'p-0' : 'p-4'} bg-[#E9EFE9] border border-[#4B6E3C] rounded text-[#4B6E3C] hover:bg-[#e0e8e0] transition-colors overflow-hidden`}
            >
              {imagePreview ? (
                <div className="relative w-full h-full group">
                  <img 
                    src={imagePreview} 
                    alt="Preview" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 flex items-center justify-center transition-all duration-200">
                    <button 
                      type="button"
                      onClick={removeImage}
                      className="opacity-0 group-hover:opacity-100 bg-white text-red-600 rounded-full p-2 hover:bg-red-50 transition-opacity"
                      title="Remove image"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg> */}
                  <span className="text-sm">Upload featured image</span>
                </>
              )}
            </button>
          </div>

          {/* Link */}
          <label className="block text-[14px] text-[#1B2816] font-normal mb-2">Link</label>
          <input
            type="url"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            placeholder="Paste link"
            className="w-full bg-[#4B6E3C1A] border border-[#C8D6C8] rounded px-4 py-3 outline-none"
          />
        </form>
      </div>
    </div>
  );
}
