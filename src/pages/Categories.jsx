// src/pages/Categories.jsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SquarePen, Trash2, MapPin, Clock } from "lucide-react";

const tabs = ["Blog", "Press Release", "Publications", "Upcoming Events"];

const mockEvents = [
  {
    id: 1,
    day: "20",
    month: "Sept",
    title: "Environmental Sanitation",
    time: "8:00 am",
    location: "No.3 Old Nitel Building, Old Airport",
  },
  {
    id: 2,
    day: "20",
    month: "Sept",
    title: "Protect the Environment (Webinar)",
    time: "8:00 am",
    location: "No.3 Old Nitel Building, Old Airport",
  },
  {
    id: 3,
    day: "20",
    month: "Sept",
    title: "Environmental Sanitation",
    time: "8:00 am",
    location: "No.3 Old Nitel Building, Old Airport",
  },
];

const mockPublications = [
  {
    id: 1,
    title: "Community-led mangrove restoration boosts coastal resilience",
    source: "CFEW JOURNAL",
    date: "May 2nd 2024",
    excerpt:
      "A longitudinal study across North-Central communities shows mangrove restoration projects reduce storm surge impacts while improving local biodiversity indices.",
    image: "/previous-initiatives/climate-recovery.png",
  },
  {
    id: 2,
    title: "Clean cooking transitions: health and climate co-benefits",
    source: "ENERGY & HEALTH REVIEW",
    date: "July 18th 2024",
    excerpt:
      "Field measurements indicate substantial reductions in household PM2.5 concentrations where LPG and electric stoves replaced traditional biomass.",
    image: "/previous-initiatives/methane-reduction.png",
  },
  {
    id: 3,
    title: "Urban tree canopies mitigate heat island effects in Jos",
    source: "URBAN ECOLOGY NOTES",
    date: "October 1st 2024",
    excerpt:
      "Remote sensing analysis links increased canopy coverage to measurable surface temperature declines across pilot wards in Jos North.",
    image: "/previous-initiatives/climate-recovery.png",
  },
];

const mockPosts = Array.from({ length: 9 }).map((_, i) => ({
  id: i + 1,
  title: "The reemergence of the North Central Green life",
  date: "August 8th 2025",
  image: "/previous-initiatives/green-school.png",
}));

const mockPressReleases = [
  {
    id: 1,
    title:
      "GAIA calls for limited production of plastics, says it’s a threat to public health.",
    source: "DAILY TRUST",
    date: "August 18th 2023",
    excerpt:
      "The Global Alliance for Incinerator Alternatives (GAIA) has pushed for a limit in the production of plastic products because it has become a threat to public health and environmental pollution.",
    image: "/previous-initiatives/green-school.png",
  },
  {
    id: 2,
    title:
      "Coalition advocates robust global plastic treaty implementation.",
    source: "THE GAURDIAN",
    date: "December 24th 2023",
    excerpt:
      "The Global Alliance for Incinerator Alternatives (GAIA) has pushed for a limit in the production of plastic products because it has become a threat to public health and environmental pollution.",
    image: "/previous-initiatives/green-school.png",
  },
  {
    id: 3,
    title:
      "Ban single-use plastics to reduce pollution, GAIA tells govt.",
    source: "PUNCH",
    date: "December 2nd 2023",
    excerpt:
      "The Global Alliance for Incinerator Alternatives (GAIA) has pushed for a limit in the production of plastic products because it has become a threat to public health and environmental pollution.",
    image: "/previous-initiatives/green-school.png",
  },
];

export default function Categories() {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [editingEvent, setEditingEvent] = useState(null);
  const [editDate, setEditDate] = useState("");
  const [editTitle, setEditTitle] = useState("");
  const [editLocation, setEditLocation] = useState("");
  const [editTime, setEditTime] = useState("");
  const [deleteTarget, setDeleteTarget] = useState(null); // {type: 'event'|'blog', id}

  // populate form when an event is selected
  useEffect(() => {
    if (editingEvent) {
      // Build a simple date string placeholder (no real date source in mock)
      setEditDate(`${editingEvent.day}/${editingEvent.month}/2025`);
      setEditTitle(editingEvent.title || "");
      setEditLocation(editingEvent.location || "");
      setEditTime(editingEvent.time || "");
    }
  }, [editingEvent]);

  const handleUpdate = () => {
    // TODO: Persist update via API; for now just close
    setEditingEvent(null);
  };

  const confirmDelete = (target) => setDeleteTarget(target);
  const cancelDelete = () => setDeleteTarget(null);
  const handleDelete = () => {
    // TODO: Call API to delete by deleteTarget.type and deleteTarget.id
    setDeleteTarget(null);
  };

  return (
    <div className="p-6">
      {/* Page Title */}
      <h1 className="text-[#1B2816] text-[32px] font-bold mb-4">Categories</h1>

      {/* Tabs */}
      <div className="flex items-center gap-6 mb-6 border-b border-[#E5E7EB]">
        {tabs.map((t) => (
          <button
            key={t}
            onClick={() => setActiveTab(t)}
            className={`pb-3 -mb-px text-[16px] font-normal transition-colors ${activeTab === t
                ? "text-[#4B6E3C] border-b-2 border-[#4B6E3C]"
                : "text-[#8B909A] hover:text-[#4B6E3C]"
              }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Content */}
      {activeTab === "Press Release" ? (
        <div className="space-y-10">
          {mockPressReleases.map((item) => (
            <article key={item.id} className=" grid grid-cols-1 md:grid-cols-3 gap-9">
              <img
                src={item.image}
                alt={item.title}
                className="w-full md:w-[543.5px] h-full md:h-[284px] object-cover rounded"
              />
              <div className="w-full md:w-[700px] pr-4">
                <h3 className="text-[#1B2816] text-[20px] md:text-[24px] font-bold leading-snug mb-3">
                  {item.title}
                </h3>
                <div className="flex items-center gap-6 text-[#1B2816] text-[16px] font-normal mb-4">
                  <span className="uppercase tracking-wide">{item.source}</span>
                  <span>{item.date}</span>
                </div>
                <p className="text-[#1B2816] text-[14px] md:text-[16px] font-normal max-w-[52ch] mb-5">
                  {item.excerpt}
                </p>
                <button className="px-5 py-2 bg-[#4B6E3C26] rounded-full border border-[#4B6E3C] text-[#4B6E3C] hover:bg-[#4B6E3C] hover:text-white transition cursor-pointer">
                  VIEW
                </button>
              </div>
            </article>
          ))}
        </div>
      ) : activeTab === "Publications" ? (
        <div className="space-y-10">
          {mockPublications.map((item) => (
            <article key={item.id} className=" grid grid-cols-1 md:grid-cols-3 gap-9">
              <img
                src={item.image}
                alt={item.title}
                className="w-full md:w-[543.5px] h-full md:h-[284px] object-cover rounded"
              />
              <div className="w-full md:w-[700px] pr-4">
                <h3 className="text-[#1B2816] text-[20px] md:text-[24px] font-bold leading-snug mb-3">
                  {item.title}
                </h3>
                <div className="flex items-center gap-6 text-[#1B2816] text-[16px] font-normal mb-4">
                  <span className="uppercase tracking-wide">{item.source}</span>
                  <span>{item.date}</span>
                </div>
                <p className="text-[#1B2816] text-[14px] md:text-[16px] font-normal max-w-[52ch] mb-5">
                  {item.excerpt}
                </p>
                <button className="px-5 py-2 bg-[#4B6E3C26] rounded-full border border-[#4B6E3C] text-[#4B6E3C] hover:bg-[#4B6E3C] hover:text-white transition cursor-pointer">
                  VIEW
                </button>
              </div>
            </article>
          ))}
        </div>
      ) : activeTab === "Upcoming Events" ? (
        <div className="space-y-6">
          {mockEvents.map((ev, idx) => (
            <div key={ev.id} className="">
              {/* Row */}
              <div className="flex items-center justify-between gap-4 py-[20px] px-[24px]">
                {/* Date badge */}
                <div className="text-[#27391F] flex items-center gap-6">
                  <div className="w-[100px] h-[100px] rounded-full border-[2px] border-[#BBCCBB] bg-[#4B6E3C] text-white flex flex-col items-center justify-center shadow-inner gap-3">
                    <span className="text-[24px] font-bold leading-none">{ev.day}</span>
                    <span className="text-[16px] font-normal leading-none">{ev.month}</span>
                  </div>
                </div>

                <div className="w-full h-full flex items-center justify-between">
                  <h3 className="text-[20px] md:text-[24px] font-bold">{ev.title}</h3>
                  {/* Time + location */}
                  <div className="hidden md:flex items-center gap-8 text-[#1B2816]">
                    <div className="flex items-center gap-2">
                      <Clock size={18} className="text-[#4B6E3C]" />
                      <span className="text-[16px] font-normal">{ev.time}</span>
                    </div>
                    <div className="flex items-center gap-2 max-w-[360px] truncate">
                      <MapPin size={18} className="text-[#4B6E3C]" />
                      <span className="text-[16px] font-normal truncate">{ev.location}</span>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3">
                  <button title="Edit" className="p-2 rounded hover:bg-[#4B6E3C1A]" onClick={() => setEditingEvent(ev)}>
                    <SquarePen size={20} className="text-[#4B6E3C]" />
                  </button>
                  <button title="Delete" className="p-2 rounded hover:bg-red-50" onClick={() => confirmDelete({ type: 'event', id: ev.id })}>
                    <Trash2 size={20} className="text-red-600" />
                  </button>
                </div>
              </div>
              {/* Divider */}
              {idx < mockEvents.length - 1 && <hr className="border-t border-[#BBCCBB]" />}
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {mockPosts.map((post) => (
            <article
              key={post.id}
              className="w-[263.75px] h-[428px] bg-[#4B6E3C1A] rounded-[8px] overflow-hidden  shadow-sm"
            >
              <Link to={`/blog/${post.id}`}>
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-[200px] object-cover cursor-pointer"
                />
              </Link>

              <div className="flex flex-col p-[24px]">
                <Link to={`/blog/${post.id}`} className="group">
                  <p className="text-[16px] font-normal text-[#1B2816] mb-2 group-hover:underline">
                    {post.date}
                  </p>
                  <h3 className="text-[20px] font-bold text-[#1B2816] leading-snug group-hover:underline">
                    {post.title}
                  </h3>
                </Link>

                {/* Actions */}
                <div className="mt-4 flex items-center gap-4">
                  <button
                    type="button"
                    title="Edit"
                    className="p-2 rounded hover:bg-[#4B6E3C1A] text-[#1B2816]"
                  >
                    <SquarePen size={24} className="text-[#4B6E3C]" />
                  </button>
                  <button
                    type="button"
                    title="Delete"
                    className="p-2 rounded hover:bg-red-50"
                    onClick={() => confirmDelete({ type: 'blog', id: post.id })}
                  >
                    <Trash2 size={24} className="text-red-600" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
      {/* Edit Upcoming Event Modal */}
      {editingEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/50" onClick={() => setEditingEvent(null)} />
          <div className="relative bg-white w-full max-w-[600px] rounded-[12px] shadow-lg p-6">
            <h2 className="text-[#1B2816] text-[24px] font-bold mb-6">Edit upcoming event</h2>

            <div className="space-y-5">
              <div>
                <label className="block text-sm text-gray-600 mb-2">Date</label>
                <input
                  type="text"
                  value={editDate}
                  onChange={(e) => setEditDate(e.target.value)}
                  className="w-full bg-[#F0F5F0] border border-[#C8D6C8] rounded px-4 py-3 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-2">Event Title</label>
                <input
                  type="text"
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                  className="w-full bg-[#F0F5F0] border border-[#C8D6C8] rounded px-4 py-3 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-2">Location</label>
                <input
                  type="text"
                  value={editLocation}
                  onChange={(e) => setEditLocation(e.target.value)}
                  className="w-full bg-[#F0F5F0] border border-[#C8D6C8] rounded px-4 py-3 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-2">Time</label>
                <input
                  type="text"
                  value={editTime}
                  onChange={(e) => setEditTime(e.target.value)}
                  className="w-full bg-[#F0F5F0] border border-[#C8D6C8] rounded px-4 py-3 outline-none"
                />
              </div>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <button onClick={handleUpdate} className="px-5 py-2 rounded bg-[#4B6E3C] text-white hover:bg-[#39552E]">Update</button>
              <button onClick={() => setEditingEvent(null)} className="px-5 py-2 rounded border border-[#C8D6C8] hover:bg-[#F3F6F3]">Cancel</button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {deleteTarget && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/50" onClick={cancelDelete} />
          <div className="relative bg-white w-full max-w-[420px] rounded-[12px] shadow-lg p-6 text-center">
            <p className="text-[#1B2816] text-[16px] font-semibold mb-6">This file will be permanently deleted</p>
            <div className="flex items-center justify-center gap-4">
              <button onClick={handleDelete} className="px-5 py-2 rounded bg-[#4B6E3C] text-white hover:bg-[#39552E]">Delete</button>
              <button onClick={cancelDelete} className="px-5 py-2 rounded border border-[#C8D6C8] hover:bg-[#F3F6F3]">Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
