import React from 'react';
import './Resume.css';

function Resume() {
  const education = [
    {
      degree: "Bachelor's Degree in Computer Science",
      school: "New Jersey Institute of Technology",
      year: "2024-2026",
      gpa: "3.8/4.0"
    },
    {
      degree: "Associates Degree in Computer Science",
      school: "Bergen Community College",
      year: "2022-2023",
      gpa: "4.0/4.0"
    },
    {
      degree: "High School Diploma",
      school: "Hackensack High School",
      year: "2018-2022",
      gpa: "4.0/4.0"
    }
  ];

  const experience = [
    {
      title: "Game Development - Paid Internship",
      company: "Bergen Community College - STEM Student Scholars Program",
      period: "Summer 2023",
      responsibilities: [
        "Learned and used Unreal Engine to create a functioning interactive video game",
        "Collaborated in a team of STEM Student Scholars at Bergen Community College",
        "Programmed the functionality of a game using visual scripting",
        "Brainstormed ideas for level design, character design, and story",
        "Animated the 2D-drawn animations of the playable character",
      ]
    },
  ];

  const skills = {
    "Programming Languages": ["C", "C++", "Python", "Java", "TypeScript", "JavaScript"],
    "Frameworks & Libraries": ["React", "Node.js"],
    "Tools & Technologies": ["VS Code", "Unreal Engine", "Unity"]
  };

  return (
    <section id="resume" className="resume-section">
      <div className="resume-container">
        <h2 className="resume-title">Resume</h2>
        
        <div className="resume-content">
          {/* Education Section */}
          <div className="resume-block">
            <h3 className="section-title">Education</h3>
            <div className="timeline">
              {education.map((edu, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h4 className="item-title">{edu.degree}</h4>
                    <p className="item-subtitle">{edu.school}</p>
                    <div className="item-details">
                      <span className="item-period">{edu.year}</span>
                      <span className="item-gpa">GPA: {edu.gpa}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Section */}
          <div className="resume-block">
            <h3 className="section-title">Experience</h3>
            <div className="timeline">
              {experience.map((exp, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h4 className="item-title">{exp.title}</h4>
                    <p className="item-subtitle">{exp.company} ({exp.period})</p>
                    <ul className="responsibilities">
                      {exp.responsibilities.map((resp, respIndex) => (
                        <li key={respIndex}>{resp}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Section */}
          <div className="resume-block">
            <h3 className="section-title">Skills</h3>
            <div className="skills-categories">
              {Object.entries(skills).map(([category, skillList], index) => (
                <div key={index} className="skill-category">
                  <h4 className="category-title">{category}</h4>
                  <div className="skill-list">
                    {skillList.map((skill, skillIndex) => (
                      <span key={skillIndex} className="skill-item">{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;