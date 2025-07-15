import React from "react";
import { Button } from "@/components/ui/button";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-[90vh] flex items-center justify-center pt-28 sm:pt-32 md:pt-20 py-8 bg-background"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Section - Text Content */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 whitespace-normal">
              Hi, I'm <span className="text-primary">Nallapu Karthik</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-2">
              AI & Data Analytics Enthusiast
            </h2>
            <p className="text-muted-foreground text-md italic mb-4">
              "Building intelligent systems that solve real problems."
            </p>
            <p className="text-muted-foreground mb-4 text-lg">
              Passionate about AI, machine learning, and data-driven solutions.
              Experienced in developing intelligent agents, deploying ML models,
              and delivering insights through analytics.
            </p>
            <ul className="text-muted-foreground mb-6 text-base list-disc pl-5 space-y-1 text-left">
              <li>Working on AI agents & LLM-integrated applications</li>
              <li>Experienced in data preprocessing and ML pipelines</li>
              <li>Hands-on with visualization & dashboard tools</li>
              <li>Research-focused with a published paper in IJIRT</li>
              <li>Freelancing in AI/ML projects across domains</li>
            </ul>

            {/* Button + Icons in a Row */}
            <div className="flex flex-wrap items-center gap-4 justify-center md:justify-start w-full md:w-auto mb-4">
              <Button
                size="lg"
                className="rounded-full"
                onClick={() => scrollToSection("projects")}
              >
                View My Work
              </Button>

              {/* Social Icons */}
              <div className="flex gap-3 text-xl text-primary">
                <a
                  href="https://www.linkedin.com/in/karthiknallapu/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin size={28} />
                </a>
                <a
                  href="https://github.com/KarthikNallapu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub size={28} />
                </a>
                <a href="mailto:karthiknallapu450@gmail.com">
                  <FaEnvelope size={28} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Section - Profile Image */}
          <div className="flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/30">
              <img
                src="/PRO.jpeg" // Make sure this image is placed in the public/ folder
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
