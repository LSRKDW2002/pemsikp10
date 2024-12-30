import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Mahasiswa from "./pages/admin/Mahasiswa";
import AdminLayout from "./Layouts/AdminLayout";

function App() {
  return (
    <Router>
      <Routes>
        {/* Halaman Login */}
        <Route path="/login" element={<Login />} />
        
        {/* Halaman Register */}
        <Route path="/register" element={<Register />} />
        
        {/* Halaman Admin Mahasiswa */}
        <Route
          path="/admin/mahasiswa"
          element={
            <AdminLayout>
              <Mahasiswa />
            </AdminLayout>
          }
        />
        
        {/* Route Default ke Login */}
        <Route path="*" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
