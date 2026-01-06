import React from "react";

const cardStyle = {
  background: "#ffffff",
  borderRadius: "12px",
  padding: "16px",
  marginBottom: "16px",
  boxShadow: "0 1px 2px rgba(0,0,0,0.04)",
};

const Dashboard = () => {
  return (
    <div>
      <h3 style={{ fontSize: "20px", fontWeight: "600", marginBottom: "16px" }}>
        대시보드
      </h3>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: "16px" }}>
        <div style={cardStyle}>
          <div style={{ fontSize: "12px", color: "#6b7280" }}>오늘 주문 수</div>
          <div style={{ fontSize: "24px", fontWeight: "700" }}>24</div>
        </div>
        <div style={cardStyle}>
          <div style={{ fontSize: "12px", color: "#6b7280" }}>AI 추천 클릭 수</div>
          <div style={{ fontSize: "24px", fontWeight: "700" }}>57</div>
        </div>
        <div style={cardStyle}>
          <div style={{ fontSize: "12px", color: "#6b7280" }}>신규 가입자</div>
          <div style={{ fontSize: "24px", fontWeight: "700" }}>8</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
