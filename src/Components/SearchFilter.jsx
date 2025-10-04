import React from "react";
import { useEffect, useState } from "react";

export default function SearchFilters() {
  let [industries, setIndustries] = useState({});
  let [locations, setLocations] = useState({});
  useEffect(() => {
    fetch("http://localhost:3001/industries")
      .then((res) => res.json())
      .then((data) => setIndustries(data))
      .catch((err) => console.error(err));
  }, []);
  useEffect(() => {
    fetch("http://localhost:3001/locations")
      .then((res) => res.json())
      .then((data) => setLocations(data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className="bg-gray-50 p-6 rounded-xl shadow-sm mb-10">
      <h2 className="text-lg font-semibold mb-3">Search Companies</h2>
      <input
        type="text"
        placeholder="Search by company name..."
        className="w-full p-3 border rounded-lg mb-6"
      />

      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1">
          <label className="block font-semibold mb-2">Industry</label>
          <select className="w-full p-3 border rounded-lg">
            <option value="">All Industries</option>
            {Array.isArray(industries) &&
              industries.map((industry) => (
                <option key={industry.id} value={industry.id}>
                  {industry.name}
                </option>
              ))}
          </select>
        </div>
        <div className="flex-1">
          <label className="block font-semibold mb-2">Location</label>
          <select className="w-full p-3 border rounded-lg">
            <option value="">All Locations</option>
            {Array.isArray(locations) &&
              locations.map((location) => (
                <option key={location.id} value={location.id}>
                  {location.name}
                </option>
              ))}
          </select>
        </div>
      </div>
    </div>
  );
}
