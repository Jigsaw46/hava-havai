import React from 'react';

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-100 p-4 mt-1">
      <div className="mb-6">
        <h2 className="text-xl font-semibold">Services</h2>
        <ul>
          <li className="mt-4">
            <a href="/MainContent" className="text-gray-700 hover:text-black">
              <i className="fas fa-home mr-2"></i> Home
            </a>
          </li>
          <li className="mt-4">
            <a href="/MainContent" className="text-gray-700 hover:text-black">
              <i className="fas fa-tachometer-alt mr-2"></i> Dashboard
            </a>
          </li>
          <li className="mt-4">
            <a href="/MainContent" className="text-gray-700 hover:text-black">
              <i className="fas fa-plane-departure mr-2"></i> Airports
            </a>
          </li>
          <li className="mt-4">
            <a href="/MainContent" className="text-gray-700 hover:text-black">
              <i className="fas fa-video mr-2"></i> Videos
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h2 className="text-xl font-semibold">Others</h2>
        <ul>
          <li className="mt-4">
            <a href="/MainContent" className="text-gray-700 hover:text-black">
              <i className="fas fa-list-ul mr-2"></i> List 1
            </a>
          </li>
          <li className="mt-4">
            <a href="/MainContent" className="text-gray-700 hover:text-black">
              <i className="fas fa-list-ul mr-2"></i> List 2
            </a>
          </li>
          <li className="mt-4">
            <a href="/MainContent" className="text-gray-700 hover:text-black">
              <i className="fas fa-list-ul mr-2"></i> List 3
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;

