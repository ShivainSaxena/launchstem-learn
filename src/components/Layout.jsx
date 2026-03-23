// src/components/Layout.jsx
import React from "react";
import { Link, useLocation } from "react-router-dom";

const YouTubeIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

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
            {/* Logo + YouTube grouped on the left */}
            <div className="flex items-center gap-3 sm:gap-4">
              <Link to="/" className="flex items-center space-x-2">
                <span className="text-xl sm:text-2xl font-bold text-white">
                  🚀 LaunchSTEM Learn
                </span>
              </Link>

              {/* YouTube pill button */}
              <a
                href="https://www.youtube.com/@LaunchSTEM"
                target="_blank"
                rel="noopener noreferrer"
                className="youtube-btn group flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  color: "rgba(255,255,255,0.75)",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.15)";
                  e.currentTarget.style.border =
                    "1px solid rgba(255,255,255,0.4)";
                  e.currentTarget.style.color = "#fff";
                  e.currentTarget.style.transform = "scale(1.05)";
                  e.currentTarget.style.boxShadow =
                    "0 0 14px rgba(255,255,255,0.12)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.08)";
                  e.currentTarget.style.border =
                    "1px solid rgba(255,255,255,0.15)";
                  e.currentTarget.style.color = "rgba(255,255,255,0.75)";
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {/* Icon — red at rest, white on hover */}
                <span
                  style={{
                    color: "#ff0000",
                    display: "flex",
                    alignItems: "center",
                    transition: "color 0.2s",
                  }}
                >
                  <YouTubeIcon />
                </span>
                <span className="hidden sm:inline">YouTube</span>
              </a>
            </div>

            {/* Right side nav */}
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
