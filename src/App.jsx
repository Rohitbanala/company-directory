import { createContext, useState } from "react";
import "./App.css";
import CompaniesDirectory from "./Pages/DirectoryPage";
export const FilterContext = createContext({
  selectedCity: "",
  selectedIndustry: "",
  searchName: "",
  setFilters: () => {},
  setPage: () => {},
});
function App() {
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState("");
  const [searchName, setSearchName] = useState("");
  const [sortBy, setSortBy] = useState("founded");
  const [direction, setDirection] = useState("asc");
  const setFilters = ({ city, industry, name, sortField, sortDir }) => {
    if (city !== undefined) setSelectedCity(city);
    if (industry !== undefined) setSelectedIndustry(industry);
    if (name !== undefined) setSearchName(name);
    if (sortField !== undefined) setSortBy(sortField);
    if (sortDir !== undefined) setDirection(sortDir);
  };
  return (
    <FilterContext.Provider
      value={{
        selectedCity,
        selectedIndustry,
        searchName,
        sortBy,
        direction,
        setFilters,
      }}
    >
      <CompaniesDirectory />
    </FilterContext.Provider>
  );
}
export default App;
