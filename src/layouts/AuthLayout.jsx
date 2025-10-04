// src/layouts/AuthLayout.jsx
import { Outlet } from "react-router-dom";

export default function AuthLayout() {
    return (
        <div className="min-h-screen p-[24px] bg-[#FFFFFF] flex items-center justify-center">
            <div className="flex w-full min-h-full bg-transparent shadow-lg rounded-md overflow-hidden">

                {/* Left Side (form changes with route) */}
                <div className="w-[50%] h-[900px] text-[#4B6E3C] p-[40px] flex items-center justify-center ">
                    <Outlet /> {/* This will render the child route (Login, Forgot Password, etc.) */}
                </div>

                {/* Right side (branding) */}
                <div className="w-1/2 bg-[#EBF1E5] flex flex-col items-center justify-center p-6 gap-[24px]">
                    <div className="bg-white rounded-full p-4 shadow-md mb-4">
                        <img
                            src="/CFEW_LOGO_NEW.png" // your logo from public folder
                            alt="CFEW"
                            className="w-[120px] h-[120px]"
                        />
                    </div>
                    <h1 className="text-[40px] font-bold text-green-900 text-center">
                        CENTRE FOR EARTHWORKS <br /> (CFEW)
                    </h1>
                </div>
            </div>
        </div>
    );
}
