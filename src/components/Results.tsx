// components/Results.tsx
import React from "react";
import RoutePDF from "./RoutePDF";
import "./Results.css";

interface RouteData {
  bus_number: string;
  departure_time: string;
  arrival_time: string;
  stops: string;
  fare: string;
}

interface Props {
  routes: RouteData[];
  source: string;
  destination: string;
}

const Results: React.FC<Props> = ({ routes, source, destination }) => {
  return (
    <div className="results-wrapper">
      <div className="results-container">
        <h2 className="results-title">Available Bus Routes</h2>
        <table className="results-table">
          <thead>
            <tr>
              <th>Bus Number</th>
              <th>Departure</th>
              <th>Arrival</th>
              <th>Stops</th>
              <th>Fare</th>
            </tr>
          </thead>
          <tbody>
            {routes.map((route, index) => (
              <tr key={index}>
                <td>{route.bus_number}</td>
                <td>{route.departure_time}</td>
                <td>{route.arrival_time}</td>
                <td>{route.stops}</td>
                <td>₹{route.fare}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="results-pdf">
          <RoutePDF routes={routes} source={source} destination={destination} />
        </div>
      </div>
    </div>
  );
};

export default Results;
