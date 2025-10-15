// src/pages/BlogDetail.jsx
import { useNavigate, useParams } from "react-router-dom";
import { ChevronLeft, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

// For now, use lightweight mock content. In a real app, fetch by :id.
const MOCK_BLOGS = Array.from({ length: 9 }).map((_, i) => ({
  id: String(i + 1),
  title: "International Youth Day",
  author: "Centre For Earth Works (CFEW)",
  date: "Aug 12th 2025",
  readTime: "7 min",
  cover: "/previous-initiatives/green-school.png",
}));

export default function BlogDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const blog = MOCK_BLOGS.find((b) => b.id === id) ?? MOCK_BLOGS[0];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div
        className="w-full bg-[#4B6E3C] flex flex-col items-center justify-center py-[120px] px-[40px] text-white gap-[24px]"
        style={{ backgroundColor: '#4B6E3C' }}
      >
          <button
            onClick={() => navigate(-1)}
            className="text-[18px] flex items-center opacity-90 self-start hover:opacity-100"
          >
            <ChevronLeft size={18}/> Back
          </button>
        <div className="w-full h-full flex items-center justify-center gap-[80px]">
          <div>
            <h1 className="text-[20px] md:text-[40px] font-bold">{blog.title}</h1>
            <div className="text-[18px] font-normal flex flex-col gap-3">
              <span>{blog.author}</span>
              <span>{blog.readTime}</span>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  aria-label="Share on Facebook"
                  className="w-9 h-9 rounded-full border border-white/60 flex items-center justify-center hover:bg-white/10"
                >
                  <Facebook size={18} />
                </button>
                <button
                  type="button"
                  aria-label="Share on Twitter"
                  className="w-9 h-9 rounded-full border border-white/60 flex items-center justify-center hover:bg-white/10"
                >
                  <Twitter size={18} />
                </button>
                <button
                  type="button"
                  aria-label="Share on Instagram"
                  className="w-9 h-9 rounded-full border border-white/60 flex items-center justify-center hover:bg-white/10"
                >
                  <Instagram size={18} />
                </button>
                <button
                  type="button"
                  aria-label="Share on LinkedIn"
                  className="w-9 h-9 rounded-full border border-white/60 flex items-center justify-center hover:bg-white/10"
                >
                  <Linkedin size={18} />
                </button>
              </div>
            </div>
          </div>
          <img
            src={blog.cover}
            alt={blog.title}
            className="w-[540px] h-[411px] object-cover rounded"
          />
        </div>
      </div>

      {/* Content */}
      <main className="max-w-5xl mx-auto px-[40px] py-[120px]">
        <h2 className="text-[#1B2816] text-[40px] md:text-[40px] font-bold mb-3">{blog.title}</h2>
        <div className="text-[#1B2816] text-[18px] font-normal mb-6 opacity-80">
          <span>{blog.author}</span>
          <span>{blog.date}</span>
          <span>{blog.readTime} read</span>
        </div>

        <p className="text-[#1B2816] font-semibold text-[18px] leading-7 mb-6">
          "Local Youth Activists for the SDGs and Beyond"
        </p>
        <p className="text-[#1B2816] font-normal text-[18px] leading-7 mb-6">
          In celebration of International Youth Day, we highlight the remarkable efforts of
          young leaders championing the Sustainable Development Goals across their
          communities. From climate action initiatives and clean energy advocacy to
          education reform and circular economy pilots, youth groups are driving
          transformational impact.
        </p>
        <img
          src={blog.cover}
          alt="article visual"
          className="w-full object-cover rounded mb-6"
        />
        <p className="text-[#1B2816] font-normal text-[18px] leading-7 mb-6">
          At CFEW, we work with stakeholders from across sectors to co-create scalable
          solutions aligned with the SDGs. Through our mentorship programs, community
          clean-ups, ecological restoration, and climate education, we help amplify youth
          voices and accelerate collective action. Together, we can foster resilient,
          equitable, and thriving communities.
        </p>
        <img
          src={blog.cover}
          alt="youth champions"
          className="w-full object-cover rounded mb-10"
        />
      </main>
    </div>
  );
}
