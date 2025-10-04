import React from "react";

export default function CompanyCard({
  name,
  tag,
  description,
  location,
  size,
  founded,
  website,
}) {
  return (
    <div className="p-6 rounded-xl shadow border bg-white">
      <div className="flex justify-between items-start">
        <h3 className="text-xl font-bold">{name}</h3>
        <span className="px-3 py-1 text-sm rounded-full bg-purple-100 text-purple-600">
          {tag}
        </span>
      </div>
      <p className="text-gray-600 mt-2">{description}</p>

      <div className="mt-4 space-y-2 text-gray-500 text-sm">
        <p>📍 {location}</p>
        <p>👥 {size}</p>
        <p>📅 Founded {founded}</p>
      </div>

      <button
        onClick={() => window.open(website, "_blank", "noopener,noreferrer")}
        className="mt-4 w-full p-3 rounded-lg border flex items-center justify-center gap-2 text-purple-600 font-semibold transition-colors duration-200 hover:bg-purple-50 hover:border-purple-400 hover:text-purple-700 hover:cursor-pointer"
      >
        📄 Visit Website
      </button>
    </div>
  );
}
