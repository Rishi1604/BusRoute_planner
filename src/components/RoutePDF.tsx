// components/RoutePDF.tsx
import React from "react";

interface RouteData {
  bus_no: string;
  source: string;
  destination: string;
  stops: string;
  time: string;
}

interface Props {
  routes: RouteData[];
  source: string;
  destination: string;
}

const RoutePDF: React.FC<Props> = ({ routes, source, destination }) => {
  const handleDownload = async () => {
    const response = await fetch("http://localhost/busroutes/generatepdf.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ routes, source, destination }),
    });

    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "bus_routes.pdf";
    a.click();
  };

  return (
    <button
      onClick={handleDownload}
      className="mt-4 px-6 py-2 bg-green-600 hover:bg-green-700 rounded-xl transition-all"
    >
      Download PDF
    </button>
  );
};

export default RoutePDF;
