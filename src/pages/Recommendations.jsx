import React, { useState } from "react";
import apiClient from "../services/client";

const cardStyle = {
  background: "#ffffff",
  borderRadius: "12px",
  padding: "16px",
  marginTop: "16px",
  boxShadow: "0 1px 2px rgba(0,0,0,0.04)",
};

const Recommendations = () => {
  const [userId, setUserId] = useState("");
  const [items, setItems] = useState([]);

  const handleFetch = async () => {
    if (!userId) return;
    const res = await apiClient.get(`/recommendations/${userId}`);
    setItems(res.data);
  };

  return (
    <div>
      <h3 style={{ fontSize: "20px", fontWeight: "600" }}>AI 추천 관리</h3>
      <p style={{ fontSize: "13px", color: "#6b7280" }}>
        특정 구매자 ID를 기준으로 FastAPI + Python 모델이 추천한 상품 목록을 조회합니다.
      </p>

      <div style={{ marginTop: "12px", display: "flex", gap: "8px" }}>
        <input
          placeholder="구매자 ID 입력 (예: 1)"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          style={{
            padding: "8px 10px",
            borderRadius: "8px",
            border: "1px solid #d1d5db",
            fontSize: "13px",
            minWidth: "160px",
          }}
        />
        <button
          onClick={handleFetch}
          style={{
            padding: "8px 14px",
            borderRadius: "8px",
            border: "none",
            background: "#2563eb",
            color: "#ffffff",
            fontSize: "13px",
            cursor: "pointer",
          }}
        >
          추천 조회
        </button>
      </div>

      {items.length > 0 && (
        <div style={cardStyle}>
          <h4 style={{ fontSize: "16px", fontWeight: "600", marginBottom: "8px" }}>
            추천 상품
          </h4>
          <ul style={{ fontSize: "13px" }}>
            {items.map((item) => (
              <li key={item.id}>
                [{item.category}] {item.name} - {item.price}원
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Recommendations;
