// src/pages/UpcomingEvent.jsx
import { useState, useRef } from "react";
import { Upload, Trash2 } from "lucide-react";
import postService from "../services/postService";

export default function UpcomingEvent() {
  const [date, setDate] = useState("");
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [time, setTime] = useState("");
  const [featuredImage, setFeaturedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ success: false, message: '' });
  const [showStatus, setShowStatus] = useState(false);
  const fileInputRef = useRef(null);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ success: false, message: '' });
    setShowStatus(true);

    try {
      const formData = {
        type: "event",
        title,
        date,
        location,
        time,
      };

      const response = await postService.createPost(formData);

      setSubmitStatus({
        success: true,
        message: 'Event created successfully!',
        data: response.data
      });
      
      // Auto-hide success message after 3 seconds
      setTimeout(() => {
        setShowStatus(false);
      }, 3000);

      // Reset form on successful submission
      setTitle('');
      setDate('');
      setLocation('');
      setTime('');
      setFeaturedImage(null);
      setImagePreview(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    } catch (error) {
      console.error('Error creating event:', error);
      setSubmitStatus({
        success: false,
        message: error.response?.data?.message || 'Failed to create event. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full h-full flex">
      {/* Main column */}
      <div className="flex-1 p-6 pr-4">
        {/* Page heading and actions */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-[#1B2816] text-[32px] font-bold">Post upcoming event</h1>
          </div>
          <div className="flex items-center">
            <button 
              type="button"
              onClick={handleSubmit}
              disabled={isSubmitting}
              className={`px-4 py-2 rounded bg-[#4B6E3C] text-white hover:bg-[#39552E] ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? 'Creating...' : 'Create & Save'}
            </button>
          </div>
        </div>

        {/* Status message */}
        {showStatus && submitStatus.message && (
          <div className={`mb-6 p-4 rounded ${submitStatus.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
            {submitStatus.message}
          </div>
        )}

        {/* Form fields - single column */}
        <form onSubmit={handleSubmit} className="max-w-[790px]">
          {/* Title */}
          <label className="block text-[14px] text-[#1B2816] font-normal mb-2">Event Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Earth Day Community Cleanup"
            className="w-full bg-[#4B6E3C1A] border border-[#C8D6C8] rounded px-4 py-3 outline-none mb-6"
            required
          />

          {/* Date */}
          <label className="block text-[14px] text-[#1B2816] font-normal mb-2">Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            placeholder="YYYY-MM-DD"
            className="w-full bg-[#4B6E3C1A] border border-[#C8D6C8] rounded px-4 py-3 outline-none mb-6"
            required
          />

          {/* Location */}
          <label className="block text-[14px] text-[#1B2816] font-normal mb-2">Location</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Central Park, New York"
            className="w-full bg-[#4B6E3C1A] border border-[#C8D6C8] rounded px-4 py-3 outline-none mb-6"
            required
          />

          {/* Time */}
          <label className="block text-[14px] text-[#1B2816] font-normal mb-2">Time</label>
          <input
            type="text"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            placeholder="09:00 AM - 12:00 PM"
            className="w-full bg-[#4B6E3C1A] border border-[#C8D6C8] rounded px-4 py-3 outline-none mb-6"
            required
          />

        </form>
      </div>
    </div>
  );
}
