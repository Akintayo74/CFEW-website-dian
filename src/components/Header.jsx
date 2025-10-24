// src/components/Header.jsx
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, Plus } from "lucide-react";

export default function Header() {
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef(null);
    const navigate = useNavigate();

    // Close dropdown on outside click
    useEffect(() => {
        function handleClickOutside(e) {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const items = [
        { label: "Blog", type: "blog" },
        { label: "Press Release", type: "press-release" },
        { label: "Publication", type: "publication" },
        { label: "Upcoming Event", type: "event" },
    ];

    const handleSelect = (item) => {
        setOpen(false);
        if (item.type === "blog") {
            navigate("/admin/dashboard/posts");
            return;
        }
        if (item.type === "press-release") {
            navigate("/admin/dashboard/posts/press-release");
            return;
        }
        if (item.type === "publication") {
            navigate("/admin/dashboard/posts/publication");
            return;
        }
        if (item.type === "event") {
            navigate("/admin/dashboard/posts/upcoming-event");
            return;
        }
        // Placeholder: adjust these routes when those pages exist
        navigate(`/admin/dashboard/${item.type}/new`);
    };

    return (
        <header className="w-full h-[84px] flex items-center justify-between bg-[#F7F7F7] shadow px-[24px] py-[24px] border-b border-[#BBCCBB] z-15">
            <div className="flex items-center gap-4">
                <div className="bg-white rounded-[40px] p-[4px] shadow-md ">
                    <img
                        src="/CFEW_LOGO_NEW.png"
                        alt="CFEW"
                        className="w-[55.82px] h-[56px]"
                    />
                </div>
                <h1 className="text-[#4B6E3C] text-[24px] font-bold">CFEW</h1>
            </div>

            {/* Search */}
            <div className="flex items-center bg-[#4B6E3C1A] p-[12px] rounded-[8px] w-1/3">
                <Search size={18} className="text-gray-500 mr-2" />
                <input
                    type="text"
                    placeholder="Search"
                    className="bg-transparent outline-none w-full text-sm"
                />
            </div>

            {/* Right Side */}
            <div className="flex items-center space-x-6" ref={dropdownRef}>
                <div className="relative">
                    <button
                        onClick={() => setOpen((v) => !v)}
                        className="cursor-pointer flex items-center bg-[#4B6E3C] text-white px-[24px] py-[12px] rounded-[8px] hover:bg-green-800"
                    >
                        <Plus size={18} className="mr-1" /> Add New
                    </button>

                    {open && (
                        <div className="absolute right-0 mt-2 w-56 bg-white shadow-lg rounded-[12px] border border-[#E5EDE5] z-50 overflow-hidden">
                            {items.map((item, idx) => (
                                <button
                                    key={item.type}
                                    onClick={() => handleSelect(item)}
                                    className={`w-full text-left px-4 py-3 text-[14px] text-[#1B2816] hover:bg-[#4B6E3C1A] ${
                                        idx !== items.length - 1 ? "border-b border-[#F0F5F0]" : ""
                                    }`}
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                <div className="flex items-center space-x-2">
                    <div className="text-right">
                        <p className="text-sm font-medium">Fletch Skinner</p>
                        <p className="text-xs text-gray-500">Administrator</p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gray-300"></div>
                </div>
            </div>
        </header>
    );
}
