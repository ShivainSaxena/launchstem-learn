// src/components/Layout.jsx
import React from "react";
import { Link, useLocation } from "react-router-dom";

function Layout({ children }) {
  const location = useLocation();

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "var(--background)" }}
    >
      <nav className="bg-black/30 backdrop-blur-md border-b border-[#2f9edd]/20 fixed w-full top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-xl sm:text-2xl font-bold text-white">
                🚀 LaunchSTEM Learn
              </span>
            </Link>
            <div className="flex items-center space-x-4">
              {location.pathname !== "/" && (
                <Link
                  to="/"
                  className="text-[#2f9edd] hover:text-white px-2 sm:px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Back to Dashboard
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-16">
        {children}
      </main>
    </div>
  );
}

export default Layout;
