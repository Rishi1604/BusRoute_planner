import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("http://localhost/busroutes/login.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password, role }),
    });

    const data = await res.json();
    setLoading(false);

    if (data.status === "success") {
      setMessage("Login successful!");
      if (role === "admin") {
        window.location.href = "/admin-dashboard";
      } else {
        window.location.href = "/user-dashboard";
      }
    } else {
      setMessage(data.message);
    }
  };

  return (
    <div className="login-background">
      <div className="login-glass">
        <h2 className="title">Welcome Back</h2>
        <p className="subtitle">Log in to continue</p>
        <form onSubmit={handleLogin} className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="form-control stylish-input"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="form-control stylish-input"
          />
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="form-control stylish-select"
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
          <button type="submit" className="btn-glass">
            {loading ? <span className="spinner"></span> : "Log In"}
          </button>
          {message && <div className="message mt-3">{message}</div>}
        </form>
      </div>
    </div>
  );
};

export default Login;
