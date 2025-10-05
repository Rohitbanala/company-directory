import { useContext, useState } from "react";
import { FilterContext } from "../App";
import FilterSelectors from "./FilterSelectors";
import Sorting from "./Sorting";

export default function SearchFilters() {
  const { searchName, setFilters } = useContext(FilterContext);
  return (
    <div className="bg-gray-50 p-6 rounded-xl shadow-sm mb-10">
      <h2 className="text-lg font-semibold mb-3">Search Companies</h2>
      <input
        type="text"
        placeholder="Search by company name..."
        className="w-full p-3 border rounded-lg mb-6"
        value={searchName}
        onChange={(e) => setFilters({ name: e.target.value })}
      />
      <FilterSelectors />
      <Sorting />
    </div>
  );
}
