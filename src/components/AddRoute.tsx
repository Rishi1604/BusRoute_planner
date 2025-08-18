import React, { useState } from "react";
import axios from "axios";
import "./AddRoute.css";

const AddRoute: React.FC = () => {
  const [formData, setFormData] = useState({
    bus_number: "",
    source: "",
    destination: "",
    departure_time: "",
    arrival_time: "",
    stops: "",
    fare: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post(
        "http://localhost/your-backend-folder/add_route.php",
        formData
      );
      alert("Route added successfully!");
      setFormData({
        bus_number: "",
        source: "",
        destination: "",
        departure_time: "",
        arrival_time: "",
        stops: "",
        fare: "",
      });
    } catch (error) {
      alert("Failed to add route.");
    }
  };

  return (
    <div className="add-route-page">
      <div className="glass-card">
        <h1 className="title">Add Bus Route</h1>
        <form onSubmit={handleSubmit} className="add-form">
          <input
            type="text"
            name="bus_number"
            value={formData.bus_number}
            onChange={handleChange}
            placeholder="Bus Number"
            required
          />
          <input
            type="text"
            name="source"
            value={formData.source}
            onChange={handleChange}
            placeholder="Source"
            required
          />
          <input
            type="text"
            name="destination"
            value={formData.destination}
            onChange={handleChange}
            placeholder="Destination"
            required
          />
          <input
            type="time"
            name="departure_time"
            value={formData.departure_time}
            onChange={handleChange}
            placeholder="Departure Time"
            required
          />
          <input
            type="time"
            name="arrival_time"
            value={formData.arrival_time}
            onChange={handleChange}
            placeholder="Arrival Time"
            required
          />
          <textarea
            name="stops"
            value={formData.stops}
            onChange={handleChange}
            placeholder="Stops (comma separated)"
            rows={3}
            required
          ></textarea>
          <input
            type="number"
            name="fare"
            value={formData.fare}
            onChange={handleChange}
            placeholder="Fare"
            required
          />
          <button type="submit" className="submit-btn">
            Add Route
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddRoute;
