import { useContext } from "react";
import { FilterContext } from "../App";

export default function Sorting() {
  const { sortBy, direction, setFilters } = useContext(FilterContext);

  return (
    <div className="flex flex-col md:flex-row gap-6 mt-4">
      <div className="flex-1">
        <label className="block font-semibold mb-2">Sort By</label>
        <select
          className="w-full p-3 border rounded-lg"
          value={sortBy}
          onChange={(e) => setFilters({ sortField: e.target.value })}
        >
          <option value="founded">Founded Year</option>
          <option value="employees">Employees</option>
        </select>
      </div>
      <div className="flex-1">
        <label className="block font-semibold mb-2">Direction</label>
        <select
          className="w-full p-3 border rounded-lg"
          value={direction}
          onChange={(e) => setFilters({ sortDir: e.target.value })}
        >
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>
    </div>
  );
}
