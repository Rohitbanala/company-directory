// CompanyCardSkeleton.jsx
import React from "react";

const CompanyCardSkeleton = () => {
  return (
    <div className="animate-pulse border rounded-lg p-4 m-2 w-full sm:w-full md:w-full lg:w-full bg-white shadow">
      <div className="h-6 bg-gray-300 rounded w-full mb-2"></div>
      <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
      <div className="h-3 bg-gray-200 rounded w-full mb-2"></div>
      <div className="h-3 bg-gray-200 rounded w-full mb-2"></div>
      <div className="h-3 bg-gray-200 rounded w-full mb-2"></div>
      <div className="h-3 bg-gray-200 rounded w-full mb-4"></div>
      <div className="h-10 bg-gray-300 rounded w-full"></div>
    </div>
  );
};

export default CompanyCardSkeleton;
