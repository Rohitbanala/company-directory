import { useContext } from "react";
import { FilterContext } from "../App";
import { cities, industries } from "../Utils/data";

export default function FilterSelectors() {
  const { selectedIndustry, selectedCity, setFilters } =
    useContext(FilterContext);
  return (
    <div className="flex flex-col md:flex-row gap-6">
      <div className="flex-1">
        <label className="block font-semibold mb-2">Industry</label>
        <select
          className="w-full p-3 border rounded-lg"
          value={selectedIndustry}
          onChange={(e) => setFilters({ industry: e.target.value })}
        >
          <option value="">All Industries</option>
          {industries.map((industry) => (
            <option key={industry} value={industry}>
              {industry}
            </option>
          ))}
        </select>
      </div>
      <div className="flex-1">
        <label className="block font-semibold mb-2">Location</label>
        <select
          className="w-full p-3 border rounded-lg"
          value={selectedCity}
          onChange={(e) => setFilters({ city: e.target.value })}
        >
          <option value="">All Locations</option>
          {cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
