import React from "react";
import { personalInfo } from "../data";
function Information() {
  return (
    <>
      {personalInfo.map(({ title, description }, index) => {
        return (
          <li className="info__items" key={index}>
            <span className="info__title">{title}</span>
            <span className="info__description">{description}</span>
          </li>
        );
      })}
    </>
  );
}

export default Information;
