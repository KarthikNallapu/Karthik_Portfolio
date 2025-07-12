
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-background py-8 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#home" className="text-xl font-bold text-gradient">Dev<span className="text-white">Portfolio</span></a>
          </div>
          
          <div className="text-sm text-muted-foreground">
            &copy; {currentYear} John Doe. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
