import React, { useEffect, useState } from "react";
import "./ModifyRoutes.css";

interface Route {
  id: number;
  source: string;
  destination: string;
  bus_number: string;
  stops: string;
  departure_time: string;
  arrival_time: string;
}

const ModifyRoutes = () => {
  const [routes, setRoutes] = useState<Route[]>([]);

  useEffect(() => {
    fetch("http://localhost/busroutes/get_routes.php")
      .then((res) => res.json())
      .then((data) => setRoutes(data));
  }, []);

  const updateRoute = (route: Route) => {
    fetch("http://localhost/busroutes/update_route.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(route),
    }).then(() => alert("Route updated!"));
  };

  const deleteRoute = (id: number) => {
    fetch("http://localhost/busroutes/delete_route.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    }).then(() => {
      alert("Route deleted!");
      setRoutes(routes.filter((route) => route.id !== id));
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    id: number,
    field: keyof Route
  ) => {
    const updated = routes.map((route) =>
      route.id === id ? { ...route, [field]: e.target.value } : route
    );
    setRoutes(updated);
  };

  return (
    <div className="modify-container">
      <h2>Modify Bus Routes</h2>
      <div className="route-table">
        <table>
          <thead>
            <tr>
              <th>Bus No</th>
              <th>Source</th>
              <th>Destination</th>
              <th>Stops</th>
              <th>Departure</th>
              <th>Arrival</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {routes.map((route) => (
              <tr key={route.id}>
                <td>
                  <input
                    value={route.bus_number}
                    onChange={(e) => handleChange(e, route.id, "bus_number")}
                  />
                </td>
                <td>
                  <input
                    value={route.source}
                    onChange={(e) => handleChange(e, route.id, "source")}
                  />
                </td>
                <td>
                  <input
                    value={route.destination}
                    onChange={(e) => handleChange(e, route.id, "destination")}
                  />
                </td>
                <td>
                  <textarea
                    value={route.stops}
                    onChange={(e) => handleChange(e, route.id, "stops")}
                  />
                </td>
                <td>
                  <input
                    type="time"
                    value={route.departure_time}
                    onChange={(e) =>
                      handleChange(e, route.id, "departure_time")
                    }
                  />
                </td>
                <td>
                  <input
                    type="time"
                    value={route.arrival_time}
                    onChange={(e) => handleChange(e, route.id, "arrival_time")}
                  />
                </td>
                <td>
                  <button onClick={() => updateRoute(route)}>Update</button>
                </td>
                <td>
                  <button onClick={() => deleteRoute(route.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ModifyRoutes;
