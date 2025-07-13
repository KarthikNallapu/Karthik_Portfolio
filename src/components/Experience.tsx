import React from "react";

const Experience = () => {
  const experiences = [
    {
      position: "Freelancer",
      company: "Self-employed",
      period: "2024 - Present",
      description:
        "Worked on multiple real-world projects involving AI, Machine Learning, and Data Analytics. Applied theoretical knowledge to practical problems and delivered efficient solutions across domains like career guidance, finance, and prediction systems.",
    },
    {
      position: "Research Paper Author",
      company: "IJIRT – Blockchain Web3 Platform",
      period: "2025",
      description:
        "Published a research paper titled 'Decentralized Web3 Blockchain Crowdfunding Platform' highlighting secure, smart contract-based fundraising systems. The work emphasizes transparency, efficiency, and token-based investment models.",
    },
    {
      position: "Data Analytics & Visualization Intern",
      company: "Accenture (Forage)",
      period: "Sept 2024",
      description:
        "Completed a virtual internship simulating a real-world client project. Focused on data cleaning, analysis, and visualization using Excel and Power BI. Delivered actionable insights to enhance digital marketing strategies for Social Buzz.",
    },
  ];

  return (
    <section id="experience" className="bg-secondary/30 py-20">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
          Work Experience
        </h2>
        <div className="w-20 h-1.5 bg-primary mx-auto mb-12 rounded-full"></div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 h-full w-px bg-border"></div>

          {/* Experience items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative ${
                  index % 2 === 0
                    ? "md:pr-12 md:text-right md:ml-auto md:mr-0"
                    : "md:pl-12 md:ml-0 md:mr-auto"
                } md:w-1/2 pl-10 md:pl-0`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 w-3 h-3 rounded-full bg-primary"></div>

                {/* Content */}
                <div className="bg-background p-6 rounded-xl border border-border hover:shadow-md transition-shadow">
                  <h3
                    className={`text-xl font-semibold text-primary ${
                      index === 0 ? "text-center" : ""
                    }`}
                  >
                    {exp.position}
                  </h3>

                  <div className="flex items-center gap-2 mb-3 mt-1">
                    <span className="font-medium">{exp.company}</span>
                    <span className="text-muted-foreground">|</span>
                    <span className="text-sm text-muted-foreground">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-muted-foreground">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
