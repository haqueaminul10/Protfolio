import React from "react";
import { starts } from "../data";
import parse from "html-react-parser";

function Starts() {
  return (
    <>
      {starts.map(({ no_of, title }) => {
        return (
          <div className="starts__box">
            <h3 className="starts__no">{no_of}</h3>
            <p className="starts__title">{parse(title)}</p>
          </div>
        );
      })}
    </>
  );
}

export default Starts;
