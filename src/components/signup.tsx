// Signup.tsx
import React, { useState } from "react";
import "./Signup.css";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false); // For loading animation

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("http://localhost/busroutes/signup.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password, role }),
    });

    const data = await res.json();
    setLoading(false);

    if (data.status === "success") {
      setMessage("🎉 Signup successful!");
    } else {
      setMessage(data.message);
    }
  };

  return (
    <div className="signup-container d-flex justify-content-center align-items-center vh-100 text-white">
      <div className="signup-box p-5 rounded-4 shadow-lg glass-box">
        <h2 className="fw-bold mb-4 text-glow">Create an Account</h2>
        <form onSubmit={handleSignup}>
          <input
            type="text"
            placeholder="Your Name"
            className="form-control mb-3"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email Address"
            className="form-control mb-3"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="form-control mb-3"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <select
            className="form-control mb-3"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="user">🚍 User</option>
            <option value="admin">🛠️ Admin</option>
          </select>
          <button
            type="submit"
            className="btn btn-warning w-100"
            disabled={loading}
          >
            {loading ? "Creating..." : "Signup"}
          </button>
        </form>
        {message && <div className="mt-4 alert alert-info">{message}</div>}
      </div>
    </div>
  );
};

export default Signup;
