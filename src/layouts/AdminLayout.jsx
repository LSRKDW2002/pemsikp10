import React from "react";
import Sider from "../components/Sider";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../Components/Button";
import Table from "../Components/Table";

function AdminLayout({ children }) {
  const handleButtonClick = () => {
    alert("Tombol diklik!");
  };

  return (
    <div className="flex flex-row min-h-screen">
      <Sider />
      <div className="flex flex-col w-full">
        <Header />    
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </div>
  );
}

export default AdminLayout;
