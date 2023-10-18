import React from "react";
import "../styles/about.css";
import Information from "../Components/Information";
import CV from "../assets/CV.pdf";
import { FaDownload } from "react-icons/fa";
import Starts from "../Components/Starts";

import Skills from "../Components/Skills";

import { resume } from "../data";
import ResumeItems from "../Components/ResumeItems";

function About() {
  return (
    <main className="container">
      <section className="about__section">
        <h1 className="about__title">
          About <span>Me</span>
        </h1>
        <div className="about__container">
          <div className="about__info">
            <h2 className="section__subtitle">Personal Information</h2>
            <ul className="info__list">
              <Information />
            </ul>
            <a href={CV} download="" className="download__button">
              Download CV
              <span className="button_icon">
                <FaDownload />
              </span>
            </a>
          </div>
          <div className="starts">
            <Starts />
          </div>
        </div>
      </section>

      <div className="separator"></div>

      <section className="about__skills">
        <h2 className="about__title">My Skills</h2>
        <div className="skills_container">
          <Skills />
        </div>
      </section>

      <div className="separator"></div>

      <section>
        <h1 className="about__title">
          Exprences & <span>Education</span>
        </h1>

        <div className="resume__container">
          <div className="resume__data">
            {resume.map((val) => {
              if (val.category == "experince") {
                return <ResumeItems key={val.id} {...val} />;
              }
            })}
          </div>

          <div className="resume__data">
            {resume.map((val) => {
              if (val.category == "education") {
                return <ResumeItems key={val.id} {...val} />;
              }
            })}
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
