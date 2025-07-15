import React, { useEffect, useRef, useState } from "react";

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

  const timelineRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [visibleIndex, setVisibleIndex] = useState(-1);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setVisibleIndex(i);
          }
        });
      },
      { threshold: 0.2 }
    );

    timelineRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      timelineRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section id="experience" className="bg-secondary/30 py-20">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
          Work Experience
        </h2>
        <div className="w-20 h-1.5 bg-primary mx-auto mb-12 rounded-full" />

        <div className="relative">
          {/* Full Timeline Line */}
          <div className="absolute left-1.5 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-px bg-border" />

          {/* Experience Cards */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row md:items-start md:gap-8 ${
                  index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                }`}
                ref={(el) => (timelineRefs.current[index] = el)}
              >
                {/* Timeline Dot & Line Fill */}
                <div className="absolute left-1.5 md:left-1/2 transform md:-translate-x-1/2 top-2">
                  <div className="w-3 h-3 rounded-full bg-primary z-10" />
                  <div
                    className={`absolute top-3 left-1/2 transform -translate-x-1/2 w-px h-full transition-all duration-700 ${
                      visibleIndex >= index ? "bg-primary" : "bg-border"
                    }`}
                  />
                </div>

                {/* Experience Content */}
                <div
                  className={`bg-background p-6 rounded-xl border border-border hover:shadow-md transition-shadow md:w-1/2 ${
                    index % 2 === 0 ? "md:ml-auto" : "md:mr-auto"
                  }`}
                >
                  <h3
                    className={`text-xl font-semibold text-primary ${
                      index === 0 ? "text-center md:text-left" : "text-left"
                    }`}
                  >
                    {exp.position}
                  </h3>
                  <div className="flex items-center gap-2 mb-3 mt-1 text-muted-foreground text-sm">
                    <span className="font-medium text-foreground">
                      {exp.company}
                    </span>
                    <span>|</span>
                    <span>{exp.period}</span>
                  </div>
                  <p className="text-muted-foreground text-justify text-sm">
                    {exp.description}
                  </p>
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
