import React from "react";
import { Outlet } from "react-router-dom";
import Sider from "../components/Sider";
import Header from "../components/Header";

function AdminLayout() {
  return (
    <div className="flex h-screen">
      <Sider />
      <div className="flex flex-col flex-1">
        <Header />
        <main className="p-6 bg-gray-100 flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AdminLayout;
