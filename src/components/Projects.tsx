import React from "react";
import { Button } from "@/components/ui/button";

// Import project images and PDF
import AICareerImg from "@/components/AI.png";
import HPPImg from "@/components/HPP.jpeg";
import BCCFImg from "@/components/BCCF.png";
import IJIRTPaper from "@/components/IJIRT179387_PAPER.pdf";

const Projects = () => {
  const projects = [
    {
      title: "Blockchain Crowdfunding Platform",
      description:
        "A decentralized web application enabling secure and transparent fundraising through Ethereum smart contracts and MetaMask integration. It facilitates direct and traceable investments without intermediaries, ensuring trust, immutability, and efficiency. Published in IJIRT, the project highlights Web3 architecture and token-based funding models for real-world financial applications.",
      technologies: ["JavaScript", "Ethereum", "MetaMask", "Smart Contracts"],
      linkText: "View Research Paper",
      linkUrl: IJIRTPaper,
      image: BCCFImg,
    },
    {
      title: "House Price Prediction Web App",
      description:
        "This project is a machine learning-based web application developed using Streamlit to predict house prices through regression algorithms and extensive data preprocessing. It features an intuitive and interactive user interface where individuals can input variables such as location, property size, number of rooms, and other attributes to receive real-time price predictions. The system simulates market behavior and provides a valuable tool for understanding pricing trends in real estate.",
      technologies: ["Python", "Streamlit", "Sklearn", "Pandas", "NumPy"],
      linkText: "View on GitHub",
      linkUrl: "https://github.com/KarthikNallapu/Housing_Project",
      image: HPPImg,
    },
    {
      title: "AI Career Counselor Website",
      description:
        "An interactive, AI-driven career guidance platform offering personalized roadmaps, curated resources, and chatbot-based assistance. The website includes secure user authentication, dynamic content rendering, and a mobile-responsive UI to ensure accessibility across devices. Currently under active development, the platform leverages machine learning techniques to analyze user input and deliver tailored career suggestions and insights, helping individuals make informed professional decisions.",
      technologies: ["HTML", "CSS", "JavaScript", "Machine Learning"],
      linkText: "View on GitHub",
      linkUrl: "https://github.com/KarthikNallapu/Career-Counselor-Website",
      image: AICareerImg,
    },
  ];

  return (
    <section id="projects" className="bg-background py-20">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
          My Projects
        </h2>
        <div className="w-20 h-1.5 bg-primary mx-auto mb-4 rounded-full"></div>
        <p className="text-center text-muted-foreground max-w-lg mx-auto mb-12">
          Here are some of my real-world and academic projects. Each one
          reflects my passion for building intelligent and practical solutions.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-secondary/20 rounded-xl overflow-hidden border border-border hover:shadow-lg transition-shadow group"
            >
              {/* Project Image */}
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-48 w-full object-cover"
                />
              ) : (
                <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <span className="text-4xl font-bold text-white/30">
                    {project.title.substring(0, 2)}
                  </span>
                </div>
              )}

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p
                  className="text-muted-foreground mb-4 text-sm"
                  style={{ whiteSpace: "pre-line" }}
                >
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-background text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-center">
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href={project.linkUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.linkText}
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
