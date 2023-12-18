import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../../styles/ProjectPage/ProjectAbout.scss";

const ProjectAbout = () => {
  const typeloc = [
    {
      title: "TYPE",
      name: "Residential"
    },
    {
      title: "LOCATION",
      name: "Mvoumagomi"
    }
  ]

  const summary = [
    {
      name: "SQUARE",
      value: "400"
    },
    {
      name: "ARCHITECT",
      value: "CABRIC ENGINEERING"
    },
    {
      name: "INTERIOR",
      value: "SARAH JOHNSON"
    },
  ]

  return (
    <section className="about__project">
      <div className="container ap__container">
        <div className="ap__wrapper">
          <div className="ap__overflow1">
            <p>
              Urban Oasis: A harmonious blend of Architetcure and Nature. The
              Urban Oasis is an Architectural Marvel that seemlessly integrates
              the built in environment with the natural world.
            </p>
          </div>

          <div className="ap__main">
            <div className="ap__overflow">
              <span>ABOUT PROJECT</span>
            </div>
            <div className="ap__main-right">
              <div className="ap__overflow">
                <p>
                  Situated in the heart of the heart of the city, the Urban Oasis
                  is a sanctuary admist the hustle and bustle. The Project Futures a unique.
                  Urban Oasis: A harmonious blend of Architetcure and Nature.
                  The Urban Oasis is an Architectural Marvel that seemlessly
                  integrates the built in environment with the natural world.
                </p>
              </div>
              <div className="ap__ty-loc">
                {
                  typeloc.map((data, i) => (
                    <div className="ty-loc" key={`ty-loc${i}`}>
                      <span>{data.title}</span><span>{data.name}</span>
                    </div>
                  ))
                }
              </div>
              <div className="about__summary">
                {
                  summary.map((data, i) => (
                    <div className="a__summary" key={`sum-${i}`}>
                      <span>{data.name}</span><span>{data.value}</span>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectAbout;
