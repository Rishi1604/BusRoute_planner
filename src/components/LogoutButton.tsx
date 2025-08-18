// components/LogoutButton.tsx
import React from "react";
import { useNavigate } from "react-router-dom";

const LogoutButton: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user"); // clear session
    navigate("/login");
  };

  return (
    <button
      onClick={handleLogout}
      className="mt-6 px-6 py-2 bg-red-600 hover:bg-red-700 rounded-xl shadow-md transition-all"
    >
      Logout
    </button>
  );
};

export default LogoutButton;
