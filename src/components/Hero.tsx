
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-[90vh] flex items-center justify-center py-8 bg-background">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Hi, I'm <span className="text-primary">John Doe</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">Full Stack Developer</h2>
            <p className="text-muted-foreground mb-8 text-lg">
              I build exceptional and accessible digital experiences for the web.
            </p>
            <div className="flex gap-4 justify-center w-full md:w-auto md:justify-start">
              <Button size="lg" className="rounded-full" onClick={() => scrollToSection('projects')}>View My Work</Button>
              <Button size="lg" variant="outline" className="rounded-full" onClick={() => scrollToSection('contact')}>Contact Me</Button>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/30">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30"></div>
              <div className="absolute inset-0 flex items-center justify-center text-3xl text-white/70">JD</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
