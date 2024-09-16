import { useState } from "react";

function ToDoApp() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4 text-gray-800">To-Do List</h1>

        {/* Input and Add Button */}
        <div className="flex mb-4">
          <input
            type="text"
            placeholder="Enter new todo"
            className="w-full p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring focus:ring-indigo-200 mr-2"
          />
          <button className="bg-indigo-500 text-white px-4 py-2 rounded-r-lg hover:bg-indigo-600 transition-colors">
            Add
          </button>
        </div>

        {/* Task List */}

        <ul className="list-disc list-inside">
          <li className="flex justify-between items-center bg-gray-100 p-2 rounded mb-2">
            <span>Todo 1</span>
            <button className="text-red-500 hover:text-red-700 transition-colors">
              Remove
            </button>
          </li>
          <li className="flex justify-between items-center bg-gray-100 p-2 rounded mb-2">
            <span>Todo 2</span>
            <button className="text-red-500 hover:text-red-700 transition-colors">
              Remove
            </button>
          </li>
          <li className="flex justify-between items-center bg-gray-100 p-2 rounded mb-2">
            <span>Todo 3</span>
            <button className="text-red-500 hover:text-red-700 transition-colors">
              Remove
            </button>
          </li>
        </ul>

        <p className="text-gray-500">No tasks added yet!</p>
      </div>
    </div>
  );
}

export default ToDoApp;
