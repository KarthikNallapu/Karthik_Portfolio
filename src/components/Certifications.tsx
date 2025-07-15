import React, { useState } from "react";

// Import certificate images
import PythonCert from "@/components/Python For Data Science_page-0001.jpg";
import DigitalMarketingCert from "@/components/DigitalMarketing_Google.jpg";
import AccentureCert from "@/components/Forage Accenture NA VDA_page-0001 (1).jpg";

const Certifications = () => {
  const certifications = [
    {
      title: "Python for Data Science (NPTEL)",
      description:
        "Completed an NPTEL-certified course covering Python fundamentals, data wrangling, NumPy, and basic visualization for data science applications.",
      image: PythonCert,
    },
    {
      title: "Fundamentals of Digital Marketing (Google)",
      description:
        "Certified by Google in essential digital marketing concepts such as SEO, content strategy, and analytics with real-world assignments.",
      image: DigitalMarketingCert,
    },
    {
      title: "Data Analytics & Visualization (Accenture Forage)",
      description:
        "Simulated real-world client tasks like data cleaning, dashboard creation, and actionable insight generation using Excel and Power BI.",
      image: AccentureCert,
    },
  ];

  const [modalImage, setModalImage] = useState<string | null>(null);

  return (
    <>
      {/* Top ultra-thin separator line */}
      <div className="w-full h-px bg-border" />

      <section id="certifications" className="bg-background py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
            Certifications
          </h2>
          <div className="w-20 h-1.5 bg-primary mx-auto mb-12 rounded-full" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-secondary/20 p-6 rounded-xl border border-border hover:shadow-md transition-shadow text-center"
              >
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-40 object-cover rounded mb-4 cursor-pointer transition-transform duration-200 hover:scale-105"
                  onClick={() => setModalImage(cert.image)}
                />
                <h3 className="text-lg font-semibold text-primary mb-2">
                  {cert.title}
                </h3>
                <p className="text-muted-foreground text-sm text-justify">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom ultra-thin separator line */}
      <div className="w-full h-px bg-border" />

      {/* Modal Overlay */}
      {modalImage && (
        <div
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center"
          onClick={() => setModalImage(null)}
        >
          <img
            src={modalImage}
            alt="Certificate Full View"
            className="max-w-full max-h-[90vh] rounded-lg shadow-xl border-2 border-primary"
          />
        </div>
      )}
    </>
  );
};

export default Certifications;
