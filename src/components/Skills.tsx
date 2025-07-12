
import React from "react";

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend",
      skills: ["React", "Vue.js", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS"]
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express", "Django", "Flask", "GraphQL", "REST API"]
    },
    {
      category: "Database",
      skills: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Redis", "Prisma"]
    },
    {
      category: "Tools",
      skills: ["Git", "Docker", "AWS", "Vercel", "Netlify", "Figma", "Jest"]
    }
  ];

  return (
    <section id="skills" className="bg-secondary/30 py-20">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">My Skills</h2>
        <div className="w-20 h-1.5 bg-primary mx-auto mb-12 rounded-full"></div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-background p-6 rounded-xl border border-border hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-4 text-primary">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex} 
                    className="px-3 py-1 bg-secondary/50 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
