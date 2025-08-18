// components/SearchForm.tsx
import React, { useState } from "react";
import "./SearchForm.css";

interface SearchProps {
  onSearch: (source: string, destination: string) => void;
}

const SearchForm: React.FC<SearchProps> = ({ onSearch }) => {
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (source && destination) {
      onSearch(source, destination);
    }
  };

  return (
    <div className="search-form-wrapper">
      <form onSubmit={handleSubmit} className="search-form">
        <h2 className="form-title">Search Bus Routes</h2>
        <input
          type="text"
          placeholder="Source"
          value={source}
          onChange={(e) => setSource(e.target.value)}
          className="form-input"
          required
        />
        <input
          type="text"
          placeholder="Destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          className="form-input"
          required
        />
        <button type="submit" className="form-button">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
