import React, { Component } from "react";
import ReactVisibilitySensor from "react-visibility-sensor";
import "./style.css";
import Project from "../config/project";
class Portfoilio extends Component {
  state = {
    imageLoaded: false,
  };

  render() {
    return (
      <section id="portfolio">
        <div className="Works" id="work">
          <div className="curver">
            <div className="curve"></div>
          </div>
          <div className="subHead">
            <h3>MY WORK</h3>
            <div className="underline"></div>
          </div>
          <div className="workList">
            {Project.map((work) => (
              <a href={work.link} target="_blank">
                <div className="WorkCard">
                  <ReactVisibilitySensor
                    onChange={(isVisible) => {
                      if (isVisible) {
                        this.setState({ imageLoaded: true });
                      }
                    }}
                  >
                    <div className="image">
                      <img src={work.image} />
                    </div>
                  </ReactVisibilitySensor>
                  <div className="content">
                    <h4 className="title">{work.title}</h4>
                    <h5 className="subtitle"> {work.subHead} </h5>
                    <p className="description">{work.description}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    );
  }
}
export default Portfoilio;
