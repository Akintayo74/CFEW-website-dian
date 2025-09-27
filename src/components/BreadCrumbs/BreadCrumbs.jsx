import React from 'react';

function BreadCrumbs({ tabs, activeTab, onTabChange }) {
  const getButtonClasses = (tabId) => {
    const baseClasses = "px-6 py-3 font-medium transition-all duration-200 rounded-full ";
    
    if (activeTab === tabId) {
      return baseClasses + "bg-cfew-primary-500 text-white";
    } else {
      return baseClasses + "text-green-800 hover:bg-cfew-primary-500 hover:text-white hover:cursor-pointer";
    }
  };

  return (
    <nav className="flex shadow-md rounded-full overflow-hidden w-fit">
      {tabs.map((tab) => (
        <div key={tab.id} className="bg-cfew-primary-500-15% p-2.5">
          <button
            onClick={() => onTabChange(tab.id)}
            className={getButtonClasses(tab.id)}
          >
            {tab.name}
          </button>
        </div>
      ))}
    </nav>
  );
}

export default BreadCrumbs;