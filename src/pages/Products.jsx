import React, { useEffect, useState } from "react";
import apiClient from "../services/client";

const tableStyle = {
  width: "100%",
  borderCollapse: "collapse",
  background: "#ffffff",
  borderRadius: "12px",
  overflow: "hidden",
  boxShadow: "0 1px 2px rgba(0,0,0,0.04)",
};

const thtd = {
  padding: "10px 12px",
  borderBottom: "1px solid #e5e7eb",
  fontSize: "13px",
};

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    apiClient.get("/products").then((res) => setProducts(res.data));
  }, []);

  return (
    <div>
      <h3 style={{ fontSize: "20px", fontWeight: "600", marginBottom: "16px" }}>상품 관리</h3>
      <table style={tableStyle}>
        <thead style={{ background: "#f9fafb" }}>
          <tr>
            <th style={thtd}>ID</th>
            <th style={thtd}>상품명</th>
            <th style={thtd}>카테고리</th>
            <th style={thtd}>가격</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id}>
              <td style={thtd}>{p.id}</td>
              <td style={thtd}>{p.name}</td>
              <td style={thtd}>{p.category}</td>
              <td style={thtd}>{p.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
