import { Component } from 'react';
import './Portfolio.css';
import visual_scripting_image from "./Visual Scripting.jpg";
import infinite_bounce_image from "./Infinite Bounce.png"

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          project_image: visual_scripting_image,
          title: "Unreal Engine Game Development",
          description: "Programmed a video game project using Visual Scripting with Blueprints in Unreal Engine",
          technologies: ["Unreal Engine", "Blueprint Visual Scripting"],
        },
        {
          project_image: infinite_bounce_image,
          title: "Infinite Bounce game",
          description: "Created a small ball-bouncing game with C# in Unity",
          technologies: ["Unity", "C#"],
        },
      ]
    };
  }

  render() {
    return (
      <div className="portfolio-section">
        <h3 className="portfolio-title">My Portfolio</h3>
        <div className="portfolio-content">


          {this.state.projects.map((project, index) =>
            <div className="project-card">

              <div className="project-image-section">
                {project.project_image.length > 0 ?
                  <img className="project-image" src={project.project_image}/>
                  : <div className="no-project-image"> Project Image </div>
                }
              </div>

              <div className="project-info">
                <h4 className="item-title">{project.title}</h4>
                <p className="item-subtitle">{project.description}</p>
                <div className="item-details">
                  {project.technologies.map(technology =>
                    <span className="item-technology">{technology}</span>
                  )}
                </div>
                <div className="buttons">
                  <a href="#" className="button live-demo"> Live Demo </a>
                  <a href="#" className="button view-code"> View Code </a>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    );
  }
}

export default Portfolio;