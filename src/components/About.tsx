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
              Hello! I'm Karthik, a passionate developer and AI enthusiast from
              Telangana, India. I specialize in building smart, scalable, and
              interactive web applications with a focus on AI and data-driven
              solutions.
            </p>
            <p className="text-muted-foreground mb-4">
              My journey in technology began during my undergraduate years at
              Hyderabad Institute of Technology and Management. I dove deep into
              Python, machine learning, and web development while working on
              real-world projects like an AI-Powered Career Counselor Website
              and a Blockchain-Based Crowdfunding Platform.
            </p>
            <p className="text-muted-foreground mb-6">
              With hands-on experience in freelancing, internships, and
              publishing research, I’ve continuously pushed my learning
              boundaries. I'm currently seeking exciting opportunities where I
              can contribute to innovative tech solutions and continue growing
              as a developer.
            </p>

            <div className="flex gap-4 justify-center">
              <a
                href="#contact"
                className="px-6 py-2 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors"
              >
                Contact Me
              </a>
              <a
                href="https://drive.google.com/file/d/your-cv-link"
                className="px-6 py-2 border border-border rounded-full hover:bg-secondary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
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
