import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <nav className="bg-background/95 backdrop-blur-sm fixed w-full z-20 border-b border-border">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="text-xl font-bold text-gradient">
            Karthik's <span className="text-white">Portfolio</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {[
              "home",
              "about",
              "skills",
              "projects",
              "experience",
              "certifications",
              "contact",
            ].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className="text-foreground hover:text-primary transition-colors capitalize"
              >
                {section}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-foreground focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="md:hidden mt-2 bg-background border border-border rounded-lg shadow-lg p-4 space-y-4">
            {[
              "home",
              "about",
              "skills",
              "projects",
              "experience",
              "certifications",
              "contact",
            ].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                onClick={() => setMenuOpen(false)}
                className="block text-foreground hover:text-primary transition-colors capitalize"
              >
                {section}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
