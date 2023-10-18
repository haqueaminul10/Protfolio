import React from "react";
import { skills } from "../data";

//CIRCULAR PROGRESSBAR
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function Skills() {
  return (
    <>
      {skills.map(({ title, parcentage }, index) => {
        return (
          <div className="progress__box" key={index}>
            <div className="progress__circle">
              <CircularProgressbar
                strokeWidth={7.5}
                text={`${parcentage}`}
                value={parcentage}
              />
            </div>
            <div className="skill__title">{title}</div>
          </div>
        );
      })}
    </>
  );
}

export default Skills;
