import React from "react";

const About = () => {
  return (
    <section id="about" className="bg-background/95 py-16">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
          About Me
        </h2>
        <div className="w-20 h-1.5 bg-primary mx-auto mb-8 rounded-full"></div>

        <div className="flex justify-center">
          <div className="max-w-3xl text-center">
            <p className="text-muted-foreground mb-4">
              Hello! I'm Karthik, an AI and data analytics enthusiast from
              Telangana, India, with a passion for solving real-world problems
              through intelligent systems. I specialize in building AI-powered
              applications, deploying machine learning models, and transforming
              data into meaningful insights.
            </p>
            <p className="text-muted-foreground mb-4">
              My journey began during my undergraduate studies at Hyderabad
              Institute of Technology and Management, where I explored Python,
              machine learning, and web development. From developing an
              AI-powered Career Counselor platform to publishing a research
              paper on a Blockchain-based Crowdfunding System, I’ve applied my
              skills across diverse domains.
            </p>
            <p className="text-muted-foreground mb-6">
              With hands-on experience in freelancing, data analysis, LLM-based
              agent development, and internships like the Accenture Virtual
              Experience, I’ve grown both technically and professionally. I
              enjoy working on projects that combine intelligence and impact —
              and I’m currently seeking opportunities to contribute to AI-driven
              innovations and continue pushing my boundaries as a developer.
            </p>

            <div className="flex gap-4 justify-center">
              <a
                href="#contact"
                className="px-6 py-2 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors"
              >
                Contact Me
              </a>
              <a
                href="/Karthik_Resume.pdf"
                download
                className="px-6 py-2 border border-border rounded-full hover:bg-secondary transition-colors"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
