// src/pages/Categories.jsx
import { useState } from "react";
import { SquarePen, Trash2 } from "lucide-react";

const tabs = ["Blog", "Press Release", "Publications", "Upcoming Events"];

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
            className={`pb-3 -mb-px text-[16px] font-normal transition-colors ${
              activeTab === t
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
            <article key={item.id} className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <img
                src={item.image}
                alt={item.title}
                className="w-full md:w-[543.5px] h-full md:h-[284px] object-cover rounded"
              />
              <div className="pr-4">
                <h3 className="text-[#1B2816] text-[20px] md:text-[24px] font-bold leading-snug mb-3">
                  {item.title}
                </h3>
                <div className="flex items-center gap-6 text-[#1B2816] text-sm mb-4">
                  <span className="uppercase tracking-wide">{item.source}</span>
                  <span>{item.date}</span>
                </div>
                <p className="text-[#1B2816] text-[14px] md:text-[15px] max-w-[52ch] mb-5">
                  {item.excerpt}
                </p>
                <button className="px-5 py-2 rounded-full border border-[#4B6E3C] text-[#4B6E3C] hover:bg-[#4B6E3C] hover:text-white transition">
                  VIEW
                </button>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {mockPosts.map((post) => (
            <article
              key={post.id}
              className="w-[263.75px] h-[428px] bg-[#4B6E3C1A] rounded-[8px] overflow-hidden  shadow-sm"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-[200px] object-cover"
              />

              <div className="flex flex-col p-[24px]">
                <p className="text-[16px] font-normal text-[#1B2816] mb-2">{post.date}</p>
                <h3 className="text-[20px] font-bold text-[#1B2816] leading-snug">
                  {post.title}
                </h3>

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
                  >
                    <Trash2 size={24} className="text-red-600" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
