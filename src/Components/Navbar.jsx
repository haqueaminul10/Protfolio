import React, { useState } from "react";
import { NavLink } from "react-router-dom";
//IMPORT LINKS
import { links } from "../data";
//IMPORT STYLE
import "../styles/navbar.css";
function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="nav">
      <div className={`${showMenu ? "nav__menu show_menu" : "nav__menu"}`}>
        <ul className="nav__list">
          {links.map(({ name, icon, path }, index) => {
            return (
              <li key={index} className="nav__items">
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    isActive ? "nav__link active-nav" : "nav__link"
                  }
                >
                  <span className="nav__icon"> {icon}</span>
                  <h3 className="nav__name">{name}</h3>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
      <div
        className={`${showMenu ? "nav__toogle animate-toggle" : "nav__toogle"}`}
        onClick={() => setShowMenu(!showMenu)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}

export default Navbar;
