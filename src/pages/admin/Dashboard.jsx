import React from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  const menus = [
    { name: "Mahasiswa", description: "Kelola data mahasiswa", path: "/admin/mahasiswa" },
    { name: "Users", description: "Kelola data pengguna", path: "/admin/users" },
    { name: "Settings", description: "Pengaturan aplikasi", path: "/admin/settings" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {menus.map((menu, index) => (
        <Link
          key={index}
          to={menu.path}
          className="bg-white p-6 rounded-lg shadow hover:shadow-lg"
        >
          <h3 className="text-xl font-semibold">{menu.name}</h3>
          <p className="text-sm text-gray-600">{menu.description}</p>
        </Link>
      ))}
    </div>
  );
}

export default Dashboard;
