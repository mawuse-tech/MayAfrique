import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

import Navbar from "./Navbar";
import Footer from "../pages/Footer";

const RootLayout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return (
    <div className="min-h-screen overflow-x-clip bg-[#f5f1e9]">
      <Navbar />

      <Outlet />

      <Footer />
    </div>
  );
};

export default RootLayout;
