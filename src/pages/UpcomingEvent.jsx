// src/pages/UpcomingEvent.jsx
import { useState } from "react";

export default function UpcomingEvent() {
  const [date, setDate] = useState("");
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [time, setTime] = useState("");

  return (
    <div className="w-full h-full flex">
      {/* Main column */}
      <div className="flex-1 p-6 pr-4">
        {/* Page heading and actions */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-[#1B2816] text-[32px] font-bold">Post upcoming event</h1>
          </div>
          <div className="flex items-center gap-3">
            <button className="px-4 py-2 rounded border border-[#C8D6C8] text-[#1B2816] bg-[#F3F6F3] hover:bg-white">Save Draft</button>
            <button className="px-4 py-2 rounded border border-[#C8D6C8] text-[#1B2816] hover:bg-[#F3F6F3]">Preview</button>
            <button className="px-4 py-2 rounded bg-[#4B6E3C] text-white hover:bg-[#39552E]">Publish</button>
          </div>
        </div>

        {/* Form fields - single column */}
        <div className="max-w-[720px]">
          {/* Date */}
          <label className="block text-sm text-gray-600 mb-2">Date</label>
          <input
            type="text"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            placeholder="Enter date"
            className="w-full bg-[#4B6E3C1A] border border-[#C8D6C8] rounded px-4 py-3 outline-none mb-6"
          />

          {/* Event Title */}
          <label className="block text-sm text-gray-600 mb-2">Event Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter event title"
            className="w-full bg-[#4B6E3C1A] border border-[#C8D6C8] rounded px-4 py-3 outline-none mb-6"
          />

          {/* Location */}
          <label className="block text-sm text-gray-600 mb-2">Location</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter location"
            className="w-full bg-[#4B6E3C1A] border border-[#C8D6C8] rounded px-4 py-3 outline-none mb-6"
          />

          {/* Time */}
          <label className="block text-sm text-gray-600 mb-2">Time</label>
          <input
            type="text"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            placeholder="Enter time"
            className="w-full bg-[#4B6E3C1A] border border-[#C8D6C8] rounded px-4 py-3 outline-none"
          />
        </div>
      </div>
    </div>
  );
}
