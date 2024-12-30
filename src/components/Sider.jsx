// Layouts/Sider.jsx
import React from 'react';

function Sider() {
  return (
    <aside className="bg-blue-900 text-white w-1/6">
      <h1 className="text-2xl font-bold pt-4 mb-4 p-2">Admin Panel</h1>
      <nav>
        <ul className="space-y-2 pl-6">
          <li>
            <a href="#" className="hover:underline">Dashboard</a>
          </li>
          <li>
            <a href="#" className="hover:underline">Users</a>
          </li>
          <li>
            <a href="#" className="hover:underline">Settings</a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sider;
