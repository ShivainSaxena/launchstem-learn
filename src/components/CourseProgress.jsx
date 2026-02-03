// src/components/CourseProgress.jsx
import React from "react";
import { Link, useParams } from "react-router-dom";

function CourseProgress({ course, currentItemId }) {
  const { courseId } = useParams();

  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-[#2f9edd]/20">
      <h3 className="text-lg font-bold text-white mb-4">Course Progress</h3>
      <div className="space-y-2">
        {course.contentlist.map((item, index) => (
          <Link
            key={item.id}
            to={`/course/${courseId}/item/${item.id}`}
            className={`block p-2 rounded-lg transition-colors ${
              currentItemId === item.id
                ? "bg-[#2f9edd] text-white"
                : "hover:bg-white/10 text-gray-300"
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="flex items-center">
                <span className="mr-2">{index + 1}.</span>
                <span className="truncate">{item.title}</span>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CourseProgress;
