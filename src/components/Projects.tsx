
import React from "react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform with user authentication, product management, and payment processing.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      live: "#",
      code: "#"
    },
    {
      title: "Task Management App",
      description: "A Kanban-style task management application with drag-and-drop functionality and team collaboration features.",
      technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
      live: "#",
      code: "#"
    },
    {
      title: "Real Estate Listing Site",
      description: "A property listing website with advanced search filters, interactive maps, and user account management.",
      technologies: ["Next.js", "PostgreSQL", "GraphQL"],
      live: "#",
      code: "#"
    }
  ];

  return (
    <section id="projects" className="bg-background py-20">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">My Projects</h2>
        <div className="w-20 h-1.5 bg-primary mx-auto mb-4 rounded-full"></div>
        <p className="text-center text-muted-foreground max-w-lg mx-auto mb-12">
          Here are some of my recent projects. Each one is crafted with attention to detail and modern technologies.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-secondary/20 rounded-xl overflow-hidden border border-border hover:shadow-lg transition-shadow group">
              <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <span className="text-4xl font-bold text-white/30">{project.title.substring(0, 2)}</span>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="px-2 py-1 bg-background text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="flex-1">
                    Live Demo
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    Code
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
