import React, { useState, useEffect } from "react";

const WeatherApp = () => {
  return (
    <div className="min-h-screen bg-blue-100 flex items-center justify-center p-6">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full flex flex-col text-center">
        <h1 className="text-2xl font-bold mb-4 text-gray-800">Weather App</h1>

        {/* City Input */}
        <div className="mb-4">
          <label htmlFor="city" className="block text-lg mb-2">
            Enter City
          </label>
          <input
            type="text"
            id="city"
            placeholder="e.g., Ahmedabad"
            className="text-center max-w-60 p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>

        <p className="text-gray-600">Loading...</p>

        <p className="text-red-500">Not available</p>

        <div>
          <p className="text-xl font-semibold text-gray-700">
            Ahmedabad, India
          </p>
          <p className="text-2xl font-bold text-gray-800">27°C</p>
          <img
            className="mx-auto"
            src={"http://cdn.weatherapi.com/weather/64x64/day/113.png"}
            alt="weather image"
          />
          <p className="text-lg text-gray-600">Sunny</p>
          <div className="mt-4">
            <p className="text-sm text-gray-600">Humidity: 0.7%</p>
            <p className="text-sm text-gray-600">Wind Speed: 10 m/h</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
