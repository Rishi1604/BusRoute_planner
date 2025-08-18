import React from "react";
import { Routes, Route } from "react-router-dom";
import Welcome from "./components/Welcome";
import Signup from "./components/signup";
import Login from "./components/Login";
import AddRoute from "./components/AddRoute";
import ModifyRoute from "./components/ModifyRoutes";
import AdminDashboard from "./components/AdminDashboard";
import UserDashboard from "./components/UserDashboard"; // adjust path if different

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/user-dashboard" element={<UserDashboard />} />
      <Route path="/add-route" element={<AddRoute />} />
      <Route path="/modify-route" element={<ModifyRoute />} />
      <Route path="/admin-dashboard" element={<AdminDashboard />} />
    </Routes>
  );
};

export default App;
