import React from "react";

const Footer = () => {
  return (
    <footer className="bg-background py-10 border-t border-border text-center">
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
    </footer>
  );
};

export default Footer;
