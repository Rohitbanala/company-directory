import React from "react";

export default function Header() {
  return (
    <div className="flex items-center gap-3 mb-8">
      <div className="bg-purple-500 text-white p-3 rounded-xl">
        <span className="text-2xl">🏢</span>
      </div>
      <div>
        <h1 className="text-2xl font-bold text-purple-600">
          Companies Directory
        </h1>
        <p className="text-gray-500">
          Discover and explore innovative companies worldwide
        </p>
      </div>
    </div>
  );
}
