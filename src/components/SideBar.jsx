// src/components/Sidebar.jsx
import { useEffect, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Folder, File, Settings, LogOut, LayoutDashboard, Pin } from "lucide-react";

export default function Sidebar() {
  const navigate = useNavigate();
  const [postMenuOpen, setPostMenuOpen] = useState(false);
  const postMenuRef = useRef(null);

  useEffect(() => {
    function onDocClick(e) {
      if (postMenuRef.current && !postMenuRef.current.contains(e.target)) {
        setPostMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  const menuItems = [
    { name: "Home", icon: <LayoutDashboard  size={24} />, path: "/admin/dashboard" },
    { name: "Post", icon: <Pin size={24} />, path: "/admin/dashboard/posts" },
    { name: "Categories", icon: <Folder size={24} />, path: "/admin/dashboard/categories" },
    { name: "Drafts", icon: <File size={24} />, path: "/admin/dashboard/drafts" },
    { name: "Settings", icon: <Settings size={24} />, path: "/admin/dashboard/settings" },
  ];

  return (
    <aside className="w-[296px] h-full bg-[#F7F7F7] shadow-md flex flex-col justify-between border-r border-[#BBCCBB] p-[24px] z-10">
      <div>
        {/* Menu */}
        <nav>
          {menuItems.map((item) => (
            item.name !== "Post" ? (
              <NavLink
                key={item.name}
                to={item.path}
                end={item.path === "/admin/dashboard"}
                className={({ isActive }) =>
                  `flex items-center gap-4 px-6 py-3 mb-4 rounded-[8px] text-[16px] text-[#F7F7F7] font-normal hover:bg-[#4B6E3C] hover:text-white ${
                    isActive ? "bg-[#4B6E3C] text-[#F7F7F7] " : "text-green-800"
                  }`
                }
              >
                {item.icon}
                {item.name}
              </NavLink>
            ) : (
              <div key={item.name} className="relative" ref={postMenuRef}>
                <NavLink
                  to={item.path}
                  end={false}
                  onClick={(e) => { e.preventDefault(); setPostMenuOpen((v) => !v); }}
                  className={({ isActive }) =>
                    `flex items-center gap-4 px-6 py-3 mb-4 rounded-[8px] text-[16px] text-[#F7F7F7] font-normal hover:bg-[#4B6E3C] hover:text-white ${
                      isActive ? "bg-[#4B6E3C] text-[#F7F7F7] " : "text-green-800"
                    }`
                  }
                >
                  {item.icon}
                  {item.name}
                </NavLink>

                {postMenuOpen && (
                  <div className="absolute left-full top-0 ml-2 w-56 bg-white shadow-lg rounded-[12px] border border-[#E5EDE5] z-50 overflow-hidden">
                    {[ 
                      { label: "Blog", to: "/admin/dashboard/posts" },
                      { label: "Press Release", to: "/admin/dashboard/posts/press-release" },
                      { label: "Publication", to: "/admin/dashboard/posts/publication" },
                      { label: "Upcoming Event", to: "/admin/dashboard/posts/upcoming-event" },
                    ].map((opt, idx, arr) => (
                      <button
                        key={opt.to}
                        onClick={() => { setPostMenuOpen(false); navigate(opt.to); }}
                        className={`w-full text-left px-4 py-3 text-[14px] text-[#1B2816] hover:bg-[#F7FAF7] ${idx !== arr.length - 1 ? 'border-b border-[#F0F5F0]' : ''}`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )
          ))}
        </nav>
      </div>

      {/* Logout */}
      <div className="px-6 py-4">
        <button className="flex items-center text-sm text-gray-600 hover:text-green-700">
          <LogOut size={18} className="mr-2" /> Log Out
        </button>
      </div>
    </aside>
  );
}
