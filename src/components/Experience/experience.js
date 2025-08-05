import React from 'react';
import './experience.css'; // Updated CSS import to match new file name

const Experience = () => {
  // ข้อมูลประสบการณ์การฝึกงานของคุณ
  // สามารถเพิ่มข้อมูล internship หลายๆ อันได้ใน Array นี้
  const internships = [
    {
      company: "EILA (Education and Innovative Learning Academy)",
      role: "Web and Mobile Developer Intern",
      duration: "17 April 2025 – 6 June 2025 (1 Month 20 Days)",
      description: [
        "Developed and integrated full-stack web applications for a booth reservation system using HTML, Tailwind CSS, JavaScript, and Node.js",
        "Managed PostgreSQL databases and created Software Requirements Specification (SRS) documents to guide project development.",
        "Gained practical experience with deployment platforms (Railway, Render) and database management tools (pgAdmin).",
        "Enhanced presentation and progress reporting skills through regular project updates."
      ],
      technologies: ["HTML", "Tailwind CSS", "JavaScript", "Node.js", "PostgreSQL", "Railway", "Render", "pgAdmin", ],
      links: []
    }
  ];

  return (
    <section className="experience-section"> {/* Updated class name */}
      <span className="experienceTitle">Experience</span> {/* Updated class name and title */}
      <div className="experience-container"> {/* Updated class name */}
        {internships.length > 0 ? (
          internships.map((internship, index) => (
            <div className="experience-card" key={index}> {/* Updated class name */}
              <h3 className="experience-company">{internship.company}</h3> {/* Updated class name */}
              <p className="experience-role">{internship.role}</p> {/* Updated class name */}
              <p className="experience-duration">{internship.duration}</p> {/* Updated class name */}
              <ul className="experience-description"> {/* Updated class name */}
                {internship.description.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
              <div className="experience-tech"> {/* Updated class name */}
                <h4>Technologies Used</h4>
                <p>{internship.technologies.join(', ')}</p>
              </div>
              <div className="experience-links"> {/* Updated class name */}
                {internship.links.map((link, idx) => (
                  <a key={idx} href={link.url} target="_blank" rel="noopener noreferrer" className="btn experience-link-btn"> {/* Updated class name */}
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          ))
        ) : (
          <p className="no-experience">ยังไม่มีประสบการณ์ที่แสดงในขณะนี้</p>
        )}
      </div>
    </section>
  );
};

export default Experience; // Export default as Experience
