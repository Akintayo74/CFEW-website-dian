// src/pages/Dashboard.jsx
import StatCard from "../components/StatsCard";
import { FileText, ScrollText, Newspaper, NotebookText } from "lucide-react";

export default function Dashboard() {
  const stats = [
    { title: "BLOG", value: 13, icon: <ScrollText size={64} /> },
    { title: "PRESS RELEASE", value: 5, icon: <Newspaper size={64} /> },
    { title: "PUBLICATIONS", value: 1, icon: <NotebookText  size={64} /> },
  ];

  return (
    <div className="p-6">
      <h2 className="text-[#1B2816] text-[32px] font-bold mb-8">Good Morning Admin</h2>
      <div className="grid grid-cols-3 gap-6">
        {stats.map((s, idx) => (
          <StatCard key={idx} title={s.title} value={s.value} icon={s.icon} />
        ))}
      </div>
    </div>
  );
}
