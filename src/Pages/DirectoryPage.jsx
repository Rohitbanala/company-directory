import Header from "../Components/Header";
import SearchFilters from "../Components/SearchFilter";
import CompanyCard from "../Components/CompanyCard";
import CompanyCardSkeleton from "../Components/CompanyCardSkeleton";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { FilterContext } from "../App";
import { useFetchCompanies } from "../hooks/useFetchCompanies";
import Pagination from "../Components/pagination";

export default function CompaniesDirectory() {
  const [page, setPage] = useState(0);
  const companySkeletons = [1, 2, 3, 4, 5, 6];
  const { data, filterCompanies, loading, error } = useFetchCompanies(
    "http://localhost:8080/api/allcompanies",
    page,
    6
  );
  const handlePrev = () => {
    if (page > 0) setPage((prev) => prev - 1);
  };
  const handleNext = () => {
    if (page < data.totalPages - 1) setPage((prev) => prev + 1);
  };
  return (
    <div className="p-8">
      <Header />
      <SearchFilters />
      <p className="mb-6 text-gray-600">
        Showing <b>{data?.totalElements || 0}</b> companies
      </p>
      <div className="grid md:grid-cols-3 gap-6">
        {loading &&
          companySkeletons.map((index) => <CompanyCardSkeleton key={index} />)}
        {error ? (
          <div className="flex justify-center items-center h-40">
            <p className="text-red-600 text-lg font-semibold content-center">
              {error.response?.data ||
                "There are no companies found in location."}
            </p>
          </div>
        ) : (
          filterCompanies &&
          filterCompanies.map((company) => (
            <CompanyCard
              key={company.id}
              name={company.name}
              tag={company.industry}
              description={company.description}
              location={company.location}
              size={company.employees}
              founded={company.founded}
              website={company.website}
            />
          ))
        )}
      </div>
      <Pagination
        page={page}
        totalPages={data?.totalPages}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </div>
  );
}
