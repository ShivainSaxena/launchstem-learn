// src/components/LessonContent.jsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import MarkdownRenderer from "./MarkdownRenderer";

function LessonContent({ lesson, nextItem, prevItem, courseId }) {
  const navigate = useNavigate();

  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-[#2f9edd]/20">
      <h2 className="text-2xl font-bold text-white mb-6">{lesson.title}</h2>
      <hr className="border-[#2f9edd]/20 mb-6" />
      <div className="mb-6">
        <MarkdownRenderer content={lesson.content} />
      </div>
      <div className="flex justify-between items-center mt-8">
        <div className="flex space-x-4">
          {prevItem && (
            <Link
              to={`/course/${courseId}/item/${prevItem.id}`}
              className="px-4 py-2 rounded-lg bg-[#013c58] hover:bg-[#013c58]/80 text-white transition-colors border border-[#2f9edd]/20"
            >
              ← Previous
            </Link>
          )}
          <Link
            to={`/course/${courseId}`}
            className="px-4 py-2 rounded-lg bg-[#013c58] hover:bg-[#013c58]/80 text-white transition-colors border border-[#2f9edd]/20"
          >
            Back to Course
          </Link>
        </div>
        <div className="flex space-x-4">
          {nextItem && (
            <Link
              to={`/course/${courseId}/item/${nextItem.id}`}
              className="px-4 py-2 rounded-lg bg-[#2f9edd] hover:bg-[#2f9edd]/80 text-white transition-colors"
            >
              Next →
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default LessonContent;
