import React, { useState } from "react";

const RatingComponent = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4 text-gray-800">Rate Us</h1>

        {/* Row of Stars */}
        <div className="flex space-x-2">
          <Star filled={false} />
          <Star filled={false} />
          <Star filled={false} />
        </div>

        {/* Selected Rating */}
        <p className="text-lg mt-4 text-gray-600">Click a star to rate!"</p>
      </div>
    </div>
  );
};

const Star = ({ filled }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`h-8 w-8 cursor-pointer ${
        filled ? "text-yellow-400" : "text-gray-300"
      } hover:text-yellow-500 transition-colors`}
      fill={filled ? "currentColor" : "none"}
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={filled ? 0 : 2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l2.065 6.31h6.631c.97 0 1.371 1.24.588 1.81l-5.37 3.902 2.065 6.309c.3.922-.755 1.688-1.538 1.118L12 17.75l-5.37 3.903c-.783.57-1.837-.196-1.538-1.118l2.065-6.31-5.37-3.902c-.783-.57-.382-1.81.588-1.81h6.631l2.065-6.31z"
      />
    </svg>
  );
};

export default RatingComponent;
