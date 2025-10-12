import { Component } from 'react';
import './About.css';
import image from "./Profile Pic.jpg"

class About extends Component {
  skills_and_technologies = ["C", "C++", "Python", "Java", "TypeScript", "JavaScript", "Unreal Engine", "Unity", "Node.js"]
  render() {
    return (
      <div className="about-section">
        <h3 className="about-title">About Me</h3>

        <div className="about-content">
          <div className="photo-card">
            <img src={image} className="image" />
          </div>

          <div className="info-block">
            <p>Hello, I am Joseph Gonzales. I'm a senior at New Jersey Institute of Technology majoring in Computer Science.
              I am a programmer, a software developer, and an artist.
            </p>
            <p> I have experience in various programming languages and concepts.
              I'm hardworking, organized, creative, and a team player.
            </p>

            <div className="skills-technologies-block">
              <h4 className="skills-technologies-header">Skills & Technologies</h4>
              <div className="skills-technologies-row">
                {this.skills_and_technologies.map(skill_or_technology =>
                  <span className="skills-technologies">{skill_or_technology}</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;