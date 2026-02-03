import { useState, useEffect } from "react";
import CourseFilters from "../components/CourseFilters";
import CourseCard from "../components/CourseCard";
import { useCourses } from "../context/CoursesContext";
import { useFetchCourses } from "../hooks/useFetchCourses";

const Dashboard = () => {
  const [filters, setFilters] = useState({
    search: "",
    grade: "All",
    subject: "All",
  });
  const { courses, setCourses } = useCourses();
  const { fetchCourses, loading, error } = useFetchCourses();

  const filteredCourses = courses.filter((course) => {
    const matchesSearch = course.title
      .toLowerCase()
      .includes(filters.search.toLowerCase());
    const matchesGrade =
      filters.grade === "All" || course.grade === filters.grade;
    const matchesSubject =
      filters.subject === "All" || course.subject === filters.subject;
    return matchesSearch && matchesGrade && matchesSubject;
  });

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
    <div className="space-y-6">
      <h1 className="text-3xl sm:text-4xl font-bold text-white">
        Welcome to LaunchSTEM Learn!
      </h1>
      <CourseFilters filters={filters} setFilters={setFilters} />
      <div className="grid gap-4 sm:gap-6">
        {filteredCourses.map((course) => (
          <CourseCard key={course._id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
