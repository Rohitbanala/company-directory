import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { FilterContext } from "../App";

export const useFetchCompanies = (url, page, size) => {
  const { selectedCity, selectedIndustry, searchName, sortBy, direction } =
    useContext(FilterContext);
  const [data, setData] = useState(null);
  const [filterCompanies, setFilteredCompanies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchCompanies = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(url, {
          params: {
            page,
            size,
            sortBy: sortBy || "founded",
            direction: direction || "asc",
            industry: selectedIndustry || "",
            location: selectedCity || "",
            name: searchName || "",
          },
        });
        setData(response.data);
        setFilteredCompanies(response.data.content);
      } catch (err) {
        setError(err);
        setFilteredCompanies([]);
      } finally {
        setLoading(false);
      }
    };
    fetchCompanies();
  }, [
    page,
    size,
    selectedCity,
    selectedIndustry,
    searchName,
    sortBy,
    direction,
  ]);

  return { data, filterCompanies, loading, error };
};
