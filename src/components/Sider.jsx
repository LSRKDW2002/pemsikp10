import React from "react";
import { Link } from "react-router-dom";

function Sider() {
  return (
    <aside className="w-64 bg-blue-800 text-white h-full">
      <div className="p-4 text-xl font-bold border-b border-blue-700">
        Admin Panel
      </div>
      <nav className="p-4">
        <Link to="/admin/dashboard" className="block py-2 px-4 rounded hover:bg-blue-600">
          Dashboard
        </Link>
        <Link to="/admin/mahasiswa" className="block py-2 px-4 rounded hover:bg-blue-600">
          Mahasiswa
        </Link>
        <Link to="/admin/users" className="block py-2 px-4 rounded hover:bg-blue-600">
          Users
        </Link>
        <Link to="/admin/settings" className="block py-2 px-4 rounded hover:bg-blue-600">
          Settings
        </Link>
      </nav>
    </aside>
  );
}

export default Sider;
