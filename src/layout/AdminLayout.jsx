import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const layoutStyle = {
  display: "flex",
  minHeight: "100vh",
  fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
};

const sidebarStyle = {
  width: "240px",
  background: "#111827",
  color: "#e5e7eb",
  padding: "16px",
};

const mainWrapperStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  background: "#f3f4f6",
};

const contentStyle = {
  padding: "24px",
  flex: 1,
};

const AdminLayout = () => {
  return (
    <div style={layoutStyle}>
      <aside style={sidebarStyle}>
        <Sidebar />
      </aside>
      <main style={mainWrapperStyle}>
        <Header />
        <section style={contentStyle}>
          <Outlet />
        </section>
      </main>
    </div>
  );
};

export default AdminLayout;
