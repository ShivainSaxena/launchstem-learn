// src/App.jsx
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from "react-router-dom";
import Layout from "./components/Layout";
import LessonContent from "./components/LessonContent";
import QuizComponent from "./components/QuizComponent";
import CourseList from "./components/CourseList";
import CourseProgress from "./components/CourseProgress";
import Dashboard from "./pages/Dashboard";
import { useCourses } from "./context/CoursesContext";

function App() {
  const { courses } = useCourses();
  const ContentView = () => {
    const { courseId, itemId } = useParams();
    const course = courses.find((c) => c._id === courseId);
    const currentIndex = parseInt(itemId);
    const currentItem = course?.contentlist[currentIndex];
    const prevItem =
      currentIndex > 0 ? course?.contentlist[currentIndex - 1] : null;
    const nextItem =
      currentIndex < course?.contentlist.length - 1
        ? course?.contentlist[currentIndex + 1]
        : null;

    if (!currentItem) return null;

    return (
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-6">
        <div className="lg:col-span-3">
          {currentItem.type === "lesson" ? (
            <LessonContent
              lesson={currentItem}
              nextItem={nextItem}
              prevItem={prevItem}
              courseId={courseId}
            />
          ) : (
            <QuizComponent
              quiz={currentItem}
              nextItem={nextItem}
              prevItem={prevItem}
              courseId={courseId}
            />
          )}
        </div>
        <div className="lg:col-span-1">
          <CourseProgress course={course} currentItemId={currentIndex} />
        </div>
      </div>
    );
  };

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/course/:courseId" element={<CourseList />} />
          <Route
            path="/course/:courseId/item/:itemId"
            element={<ContentView />}
          />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
