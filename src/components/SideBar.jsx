// src/components/Sidebar.jsx
import { NavLink } from "react-router-dom";
import { Folder, File, Settings, LogOut, LayoutDashboard, Pin } from "lucide-react";

export default function Sidebar() {
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
            <NavLink
              key={item.name}
              to={item.path}
              end
              className={({ isActive }) =>
                `flex items-center gap-4 px-6 py-3 mb-4 rounded-[8px] text-[16px] text-[#F7F7F7] font-normal hover:bg-[#4B6E3C] hover:text-white ${
                  isActive ? "bg-[#4B6E3C] text-[#F7F7F7] " : "text-green-800"
                }`
              }
            >
              {item.icon}
              {item.name}
              {/* <span className="text-[16px] text-[#4B6E3C] font-normal ml-3 hover:text-white"></span> */}
            </NavLink>
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
