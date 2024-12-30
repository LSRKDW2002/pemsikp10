import React from "react";
import { createBrowserRouter } from "react-router-dom";
import AdminLayout from "../Layouts/AdminLayout";
import Mahasiswa from "../pages/admin/Mahasiswa";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

const RouteList = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/dashboard",
    element: (
      <AdminLayout>
        <Mahasiswa />
      </AdminLayout>
    ),
  },
  {
    path: "/",
    element: <Login />, // Halaman default login
  },
]);

export default RouteList;
