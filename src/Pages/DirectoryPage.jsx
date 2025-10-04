import React from "react";

import Header from "../Components/Header";
import SearchFilters from "../Components/SearchFilter";
import CompanyCard from "../Components/CompanyCard";
import { useEffect, useState } from "react";

export default function CompaniesDirectory() {
  let [companies, setCompanies] = useState([]);
  let totalCompanies = companies.length;
  useEffect(() => {
    fetch("http://localhost:3001/companies")
      .then((res) => res.json())
      .then((data) => setCompanies(data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className="p-8">
      <Header />
      <SearchFilters />
      <p className="mb-6 text-gray-600">
        Showing <b>100</b> of {totalCompanies} companies
      </p>
      <div className="grid md:grid-cols-3 gap-6">
        {companies?.map((company) => (
          <CompanyCard
            key={company.id}
            name={company.name}
            tag={company.industry}
            description={company.description}
            location={`${company.location}`}
            size={company.employees}
            founded={company.founded}
            website={company.website}
          />
        ))}
      </div>
    </div>
  );
}
