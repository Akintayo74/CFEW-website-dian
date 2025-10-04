// src/components/StatCard.jsx
export default function StatCard({ title, value, icon }) {
    return (
      <div className="bg-[#4B6E3C1A] rounded-[16px] p-[40px] flex items-center justify-between shadow-sm hover:shadow-md transition">
        <div className="flex flex-col">
          <h4 className="text-[#000000] text-[20px] font-bold">{title}</h4>
          <p className="text-[32px] font-bold text-[#4B6E3C] mt-2">{value}</p>
        </div>
        <div className="text-[#4B6E3C] text-4xl">{icon}</div>
      </div>
    );
  }
  