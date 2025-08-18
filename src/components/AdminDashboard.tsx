// src/pages/AdminDashboard.tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "./AdminDashboard.css";

const AdminDashboard: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="admin-dashboard">
      <div className="dashboard-content">
        <h2 className="dashboard-title">Admin Dashboard</h2>
        <div className="dashboard-buttons">
          <button onClick={() => navigate("/add-route")}>
            ➕ Add New Route
          </button>
          <button onClick={() => navigate("/modify-route")}>
            🛠️ Modify Route
          </button>
          <button onClick={() => navigate("/")}>🔙 Logout</button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
