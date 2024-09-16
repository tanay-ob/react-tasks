import React, { useState } from "react";

const TemperatureConverter = () => {
  // State to store Celsius input
  const [celsius, setCelsius] = useState("");

  // Function to convert Celsius to Fahrenheit
  const convertToFahrenheit = (celsius) => {
    return (celsius * 9) / 5 + 32;
  };

  // Dynamic theme based on the temperature
  const getTheme = () => {
    const temp = parseFloat(celsius);
    if (!isNaN(temp)) {
      if (temp >= 30) {
        return "bg-red-100 border-red-400 text-red-800"; // Hot theme
      } else if (temp <= 10) {
        return "bg-blue-100 border-blue-400 text-blue-800"; // Cold theme
      }
    }
    return "bg-gray-100 border-gray-400 text-gray-800"; // Neutral theme
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div
        className={`p-6 rounded-lg shadow-lg border-2 max-w-md w-full ${getTheme()}`}
      >
        <h1 className="text-2xl font-bold mb-4">Temperature Converter</h1>

        {/* Celsius Input */}
        <div className="mb-4">
          <label htmlFor="celsius" className="block text-lg mb-2">
            Enter Temperature in Celsius:
          </label>
          <input
            type="number"
            id="celsius"
            placeholder="e.g. 25"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-indigo-200"
          />
        </div>

        {/* Fahrenheit Output */}
        <div className="mt-4">
          <p className="text-lg">
            <strong>0°C</strong> is <strong>32°F</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TemperatureConverter;
