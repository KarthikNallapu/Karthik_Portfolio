import React from "react";

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend",
      skills: ["HTML", "CSS"],
    },
    {
      category: "Backend",
      skills: ["Python", "Flask"],
    },
    {
      category: "Database",
      skills: ["SQL"],
    },
    {
      category: "AI & Machine Learning",
      skills: [
        "Supervised & Unsupervised Learning",
        "Model Evaluation",
        "LLaMA",
        "WordNet",
        "OpenAI API",
        "Groq API",
      ],
    },
    {
      category: "Data Analysis & Visualization",
      skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Power BI"],
    },
    {
      category: "Tools & Platforms",
      skills: [
        "Google Colab",
        "VS Code",
        "Git",
        "GitHub",
        "Postman",
        "Microsoft Office Suite",
        "Salesforce",
      ],
    },
    {
      category: "Additional Skills",
      skills: [
        "Data Analytics",
        "Digital Marketing",
        "Prompt Engineering",
        "Cloud/API Integration",
        "API Authentications",
      ],
    },
    {
      category: "Soft Skills",
      skills: [
        "Problem-Solving",
        "Collaboration",
        "Communication",
        "Attention to Detail",
        "Independent Work",
      ],
    },
  ];

  return (
    <section id="skills" className="bg-secondary/30 py-20">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
          My Skills
        </h2>
        <div className="w-20 h-1.5 bg-primary mx-auto mb-12 rounded-full"></div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-background p-6 rounded-xl border border-border hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-4 text-primary">
                {category.category}
              </h3>
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
