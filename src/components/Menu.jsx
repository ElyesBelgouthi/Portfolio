import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Menu = (props) => {
  const closeMenu = () => {
    props.onClick(false);
  };

  return (
    <div className="menu">
      <div className="Hamburger" onClick={closeMenu}>
        <FontAwesomeIcon icon={faX} />
      </div>
      <ul>
        <li onClick={closeMenu}>
          <a>Home</a>
        </li>
        <li onClick={closeMenu}>
          <a>About</a>
        </li>
        <li onClick={closeMenu}>
          <a>Expertise</a>
        </li>
        <li onClick={closeMenu}>
          <a>Career</a>
        </li>
        <li onClick={closeMenu}>
          <a>Projects</a>
        </li>
        <li onClick={closeMenu}>
          <a>Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
