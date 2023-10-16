import React from "react";
import Profile from "../assets/anonto.jpg";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
import "../styles/home.css";

function Home() {
  return (
    <>
      <section className="home__section">
        <img src={Profile} alt="anonto" className="home__img" />
        <div className="home__contain">
          <div className="home__data">
            <h1 className="home__title">
              <span>I'm Md. Aminul Haque.</span>Web Developer
            </h1>
            <p className="home__description">
              I'm a Bangladeshi based web developer focus on craftinf clean &
              user-friendly expriences.I am passionate about building excellent
              software that improves the lives of those around me
            </p>
            <Link to="/about" className="home__button">
              More About Me
              <span className="button_icon">
                <AiOutlineArrowRight />
              </span>
            </Link>
          </div>
        </div>
        <div className="color_block"></div>
      </section>
    </>
  );
}

export default Home;
