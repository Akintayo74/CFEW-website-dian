// src/components/Header.jsx
import { Search, Plus } from "lucide-react";

export default function Header() {
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
            <div className="flex items-center space-x-6">
                <button className="flex items-center bg-[#4B6E3C] text-white px-[24px] py-[12px] rounded[8px] hover:bg-green-800">
                    <Plus size={18} className="mr-1" /> Add New
                </button>

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
