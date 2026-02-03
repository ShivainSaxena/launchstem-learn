// src/components/CourseList.jsx
import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useCourses } from "../context/CoursesContext";
import { useFetchCourses } from "../hooks/useFetchCourses";

function CourseList() {
  const { courseId } = useParams();
  const { courses, setCourses } = useCourses();
  const course = courses.find((c) => c._id === courseId);
  const { fetchCourses, loading, error } = useFetchCourses();

  useEffect(() => {
    const loadCourses = async () => {
      try {
        const data = await fetchCourses();
        setCourses(data);
      } catch (err) {
        console.error("Error fetching courses:", err);
      }
    };
    loadCourses();
  }, [fetchCourses, setCourses]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-gray-200 border-t-blue-600"></div>
        <span className="ml-3 text-gray-600 text-lg">Loading...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <span className="text-red-600">Error: {error}</span>
      </div>
    );
  }

  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-[#2f9edd]/20">
      <h2 className="text-2xl font-bold text-white mb-4">{course.title}</h2>
      <div className="space-y-4">
        {course.contentlist.map((item, index) => (
          <Link
            key={item.id}
            to={`/course/${course._id}/item/${item.id}`}
            className="block p-4 rounded-lg bg-[#013c58]/50 hover:bg-[#2f9edd]/20 transition-colors border border-[#2f9edd]/10"
          >
            <div className="flex items-center justify-between">
              <div>
                <span className="text-white font-medium">
                  {index + 1}. {item.title}
                </span>
                <span className="ml-3 text-sm text-[#2f9edd]">
                  {item.type === "quiz" ? "📝 Quiz" : "📚 Lesson"}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CourseList;
