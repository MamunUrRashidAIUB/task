"use client";
import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    let validationErrors = {};

    if (!name.trim()) {
      validationErrors.name = "Name is required";
    }
    if (!role) {
      validationErrors.role = "Role is required";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert("Form submitted successfully!");
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h1 className="text-center text-4xl text-white mb-6">Form Task</h1>

      <form onSubmit={handleSubmit} className="text-black">
        <div className="flex flex-wrap gap-4">
          {/* Name Input */}
          <div className="flex flex-col">
            <input
              type="text"
              value={name}
              placeholder="Enter your name"
              className="border border-gray-500 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          {/* Role Select */}
          <div className="flex flex-col">
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="border border-gray-500 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Role</option>
              <option value="Role 1">Role 1</option>
              <option value="Role 2">Role 2</option>
              <option value="Role 3">Role 3</option>
            </select>
            {errors.role && (
              <p className="text-red-500 text-sm mt-1">{errors.role}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </form>

      {/* Display Form State */}
      <div className="mt-6 border-t pt-4">
        <h3 className="text-lg font-semibold">Form State:</h3>
        <h3 className="text-gray-700">Name: {name || "N/A"}</h3>
        <h3 className="text-gray-700">Role: {role || "N/A"}</h3>
      </div>
    </div>
  );
}
