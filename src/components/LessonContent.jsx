import { Link } from "react-router-dom";
import MarkdownRenderer from "./MarkdownRenderer";
import { useState } from "react";

function LessonContent({ lesson, nextItem, prevItem, courseId }) {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-[#2f9edd]/20">
      <h2 className="text-2xl font-bold text-white mb-6">{lesson.title}</h2>
      <hr className="border-[#2f9edd]/20 mb-6" />
      <div className="relative w-full rounded-xl overflow-hidden border border-[#2f9edd]/20 bg-[#013c58]/30 shadow-inner">
        {isLoading && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#0a192f]/80 z-10">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-[#2f9edd]/20 border-t-[#2f9edd]"></div>
            <p className="mt-4 text-[#2f9edd] font-medium animate-pulse">
              Loading Worksheet...
            </p>
          </div>
        )}

        <iframe
          src={`${lesson.pdfUrl}#view=FitH`} // Opens with Page Width fitting
          title={lesson.title}
          className="w-full h-[65vh] md:h-[75vh] lg:h-[80vh]"
          onLoad={() => setIsLoading(false)}
          style={{ border: "none" }}
        />
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
