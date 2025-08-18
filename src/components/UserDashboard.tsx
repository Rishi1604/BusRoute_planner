// pages/UserDashboard.tsx
import React, { useState } from "react";
import SearchForm from "../components/SearchForm";
import Results from "../components/Results";
import LogoutButton from "../components/LogoutButton";
import "./UserDashboard.css";

const UserDashboard: React.FC = () => {
  const [routes, setRoutes] = useState([]);
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");

  const handleSearch = async (src: string, dest: string) => {
    setSource(src);
    setDestination(dest);

    const response = await fetch("http://localhost/busroutes/getroutes.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source: src, destination: dest }),
    });

    const data = await response.json();
    setRoutes(data);
  };

  return (
    <div className="user-dashboard">
      <div className="dashboard-content">
        <h1 className="dashboard-title">Welcome User 👋</h1>
        <SearchForm onSearch={handleSearch} />
        {routes.length > 0 && (
          <Results routes={routes} source={source} destination={destination} />
        )}
        <div className="dashboard-buttons">
          <LogoutButton />
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
