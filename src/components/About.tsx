
import React from "react";

const About = () => {
  return (
    <section id="about" className="bg-background/95 py-16">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">About Me</h2>
        <div className="w-20 h-1.5 bg-primary mx-auto mb-8 rounded-full"></div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <p className="text-muted-foreground mb-4 text-justify">
              Hello! I'm John, a passionate full-stack developer based in San Francisco, CA. I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between.
            </p>
            <p className="text-muted-foreground mb-4 text-justify">
              My journey into web development started back in 2015 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
            </p>
            <p className="text-muted-foreground mb-6 text-justify">
              Fast-forward to today, and I've had the privilege of working at an advertising agency, a start-up, and a large corporation. My main focus these days is building accessible, inclusive products and digital experiences.
            </p>
            
            <div className="flex gap-4 justify-center">
              <a href="#contact" className="px-6 py-2 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors">
                Contact Me
              </a>
              <a href="#" className="px-6 py-2 border border-border rounded-full hover:bg-secondary transition-colors">
                Download CV
              </a>
            </div>
          </div>
          
          <div className="bg-secondary/20 p-6 rounded-xl space-y-4 border border-border mx-auto w-full max-w-md">
            <div>
              <h3 className="text-xl font-semibold mb-2 text-center">Personal Information</h3>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Name:</span>
                  <span>John Doe</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Age:</span>
                  <span>30 Years</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Location:</span>
                  <span>San Francisco, CA</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Experience:</span>
                  <span>7+ Years</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Freelance:</span>
                  <span>Available</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
