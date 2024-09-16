import React, { useState, useEffect } from "react";
import ProfileCard from "./ProfileCard";

// Parent Component: Manages state and fetches data
const UserProfiles = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">User Profiles</h1>

      <p className="text-lg text-gray-600">Loading...</p>
      <p className="text-red-500">Error fetching users</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProfileCard />
      </div>
    </div>
  );
};

export default UserProfiles;
