// src/components/CourseCard.jsx
import React from "react";
import { Link } from "react-router-dom";

function CourseCard({ course }) {
  return (
    <Link
      to={`/course/${course._id}`}
      className="block transform hover:scale-105 transition-transform duration-300"
    >
      <div className="bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden border border-[#2f9edd]/20 hover:border-[#2f9edd]/50">
        <div className="p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-4 mb-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              {course.title}
            </h2>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 rounded-full text-xs bg-[#2f9edd]/20 text-[#2f9edd]">
                {course.grade}
              </span>
              <span className="px-2 py-1 rounded-full text-xs bg-[#2f9edd]/20 text-[#2f9edd]">
                {course.subject}
              </span>
            </div>
          </div>

          <div className="text-sm text-gray-400">
            {course.contentlist.length} Tasks
          </div>
        </div>
      </div>
    </Link>
  );
}

export default CourseCard;
