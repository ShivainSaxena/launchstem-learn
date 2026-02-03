// src/components/CourseFilters.jsx
import React, { useState, useEffect } from "react";

function CourseFilters({ filters, setFilters }) {
  const [searchInput, setSearchInput] = useState("");
  const grades = ["All", "K-2", "3-5", "6-8", "9-12"];
  const subjects = ["All", "Science", "Math", "Technology"];

  // Update the parent's filters when searchInput changes
  useEffect(() => {
    setFilters({ ...filters, search: searchInput });
  }, [searchInput]);

  return (
    <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
      <div className="relative">
        <input
          type="text"
          placeholder="Search courses..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="w-full p-3 sm:p-4 bg-white/10 rounded-lg border border-[#2f9edd]/20 text-white placeholder-white/50 focus:outline-none focus:border-[#2f9edd]"
        />
      </div>
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="w-full sm:w-auto space-y-2">
          <label className="block text-white text-sm">Grade Level</label>
          <select
            value={filters.grade}
            onChange={(e) => setFilters({ ...filters, grade: e.target.value })}
            className="w-full sm:w-auto p-2 rounded bg-white/10 border border-[#2f9edd]/20 text-white focus:outline-none focus:border-[#2f9edd]"
          >
            {grades.map((grade) => (
              <option key={grade} value={grade} className="bg-[#013c58]">
                {grade}
              </option>
            ))}
          </select>
        </div>
        <div className="w-full sm:w-auto space-y-2">
          <label className="block text-white text-sm">Subject</label>
          <select
            value={filters.subject}
            onChange={(e) =>
              setFilters({ ...filters, subject: e.target.value })
            }
            className="w-full sm:w-auto p-2 rounded bg-white/10 border border-[#2f9edd]/20 text-white focus:outline-none focus:border-[#2f9edd]"
          >
            {subjects.map((subject) => (
              <option key={subject} value={subject} className="bg-[#013c58]">
                {subject}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export default CourseFilters;
