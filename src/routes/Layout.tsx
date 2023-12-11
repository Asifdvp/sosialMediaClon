import React from "react";
import Navbar from "../components/navBar/Navbar";
import LeftBar from "../components/leftBar/LeftBar";
import RightBar from "../components/rightBar/RightBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="theme-dark">
      <Navbar />
      <div style={{ display: "flex" }}>
        <LeftBar />
        <div style={{ flex: 6 }}></div>
        <Outlet />
        <RightBar />
      </div>
    </div>
  );
};

export default Layout;
