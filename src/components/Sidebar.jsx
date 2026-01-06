import React from "react";
import { NavLink } from "react-router-dom";

const navItemStyle = {
  display: "block",
  padding: "8px 12px",
  borderRadius: "8px",
  marginBottom: "4px",
  textDecoration: "none",
  color: "#e5e7eb",
  fontSize: "14px",
};

const activeStyle = {
  background: "#1f2937",
  fontWeight: "600",
};

const Sidebar = () => {
  return (
    <div>
      <h1 style={{ fontSize: "18px", fontWeight: "700", marginBottom: "16px" }}>
        Mall Admin
      </h1>
      <nav>
        <NavLink
          to="/dashboard"
          style={({ isActive }) => (isActive ? { ...navItemStyle, ...activeStyle } : navItemStyle)}
        >
          대시보드
        </NavLink>
        <NavLink
          to="/products"
          style={({ isActive }) => (isActive ? { ...navItemStyle, ...activeStyle } : navItemStyle)}
        >
          상품 관리
        </NavLink>
        <NavLink
          to="/recommendations"
          style={({ isActive }) => (isActive ? { ...navItemStyle, ...activeStyle } : navItemStyle)}
        >
          AI 추천 관리
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
