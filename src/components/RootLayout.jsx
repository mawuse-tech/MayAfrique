import React from "react";
import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";
import Footer from "../pages/Footer";

const RootLayout = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <Outlet />

      <Footer />
    </div>
  );
};

export default RootLayout;