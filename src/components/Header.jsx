import React from "react";

const headerStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "12px 24px",
  background: "#ffffff",
  borderBottom: "1px solid #e5e7eb",
};

const Header = () => {
  return (
    <header style={headerStyle}>
      <div>
        <h2 style={{ fontSize: "18px", fontWeight: "600" }}>쇼핑몰 관리자 화면</h2>
        <p style={{ fontSize: "12px", color: "#6b7280" }}>
          구매 이력을 기반으로 AI가 자동 추천하는 시스템 데모
        </p>
      </div>
      <div style={{ fontSize: "13px", color: "#6b7280" }}>Admin</div>
    </header>
  );
};

export default Header;
