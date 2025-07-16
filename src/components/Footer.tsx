import React from "react";
import { ArrowUp } from "lucide-react"; // optional: or use any icon library

const Footer = () => {
  return (
    <footer className="relative bg-background py-10 border-t border-border text-center">
      <div className="max-w-6xl mx-auto px-4 md:px-8 space-y-2">
        <h3 className="text-xl font-bold text-primary">Thanks for visiting!</h3>
        <p className="text-muted-foreground text-sm">
          Designed & Developed by{" "}
          <span className="text-white font-medium">Nallapu Karthik</span>
        </p>
        <p className="text-xs text-muted-foreground italic">
          “Keep building. Keep evolving.”
        </p>
      </div>

      {/* Back to Top Button */}
      <a
        href="#home"
        className="absolute right-6 bottom-6 bg-primary text-primary-foreground p-2 rounded-full shadow hover:bg-primary/80 transition-all"
        aria-label="Back to top"
        title="Back to top"
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};

export default Footer;
