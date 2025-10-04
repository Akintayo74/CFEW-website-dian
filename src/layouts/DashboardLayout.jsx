// src/layouts/DashboardLayout.jsx
import Sidebar from "../components/SideBar";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <div className="flex flex-col h-screen">
      {/* Header on top spanning full width */}
      <Header />

      {/* Content row: Sidebar + Main */}
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 bg-white overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
