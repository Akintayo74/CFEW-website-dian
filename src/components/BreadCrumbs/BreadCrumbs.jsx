import React from 'react';

function BreadCrumbs({ tabs, activeTab, onTabChange }) {
  const getButtonClasses = (tabId) => {
    const baseClasses = "px-4 py-2 md:px-6 md:py-3 font-semibold text-[10px] md:text-base transition-all duration-200 rounded-full ";
    
    if (activeTab === tabId) {
      return baseClasses + "bg-cfew-primary-500 text-white";
    } else {
      return baseClasses + "text-green-800 hover:bg-cfew-primary-400 hover:text-white hover:cursor-pointer";
    }
  };

  return (
    <nav className="flex shadow-md rounded-full overflow-hidden w-fit">
    
      {tabs.map((tab) => (
        <div key={tab.id} className="bg-cfew-primary-500-15% p-1 md:p-2.5 flex-shrink-0">
          {/* <button
            onClick={() => onTabChange(tab.id)}
            className={getButtonClasses(tab.id) }
          >
            {tab.name}
          </button> */}
          <button
            onClick={() => onTabChange(tab.id)}
            className={getButtonClasses(tab.id)}
          >
            <span className="md:hidden">{tab.id === 'press-release' ? 'PRESS' : tab.name}</span>
            <span className="hidden md:inline">{tab.name}</span>
          </button>
        </div>
      ))}
    </nav>
  );
}

export default BreadCrumbs;