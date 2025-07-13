import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-background/95 backdrop-blur-sm fixed w-full z-10 border-b border-border">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="text-xl font-bold text-gradient">
            Karthik's <span className="text-white">Portfolio</span>
          </a>

          <div className="hidden md:flex space-x-8">
            <a
              href="#home"
              className="text-foreground hover:text-primary transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-foreground hover:text-primary transition-colors"
            >
              About
            </a>
            <a
              href="#skills"
              className="text-foreground hover:text-primary transition-colors"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="text-foreground hover:text-primary transition-colors"
            >
              Projects
            </a>
            <a
              href="#experience"
              className="text-foreground hover:text-primary transition-colors"
            >
              Experience
            </a>
            <a
              href="#contact"
              className="text-foreground hover:text-primary transition-colors"
            >
              Contact
            </a>
          </div>

          <div className="md:hidden">
            <button className="text-foreground">
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
                <line x1="4" x2="20" y1="12" y2="12"></line>
                <line x1="4" x2="20" y1="6" y2="6"></line>
                <line x1="4" x2="20" y1="18" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
