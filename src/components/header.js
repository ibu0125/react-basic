import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">My Website</div>
      <nav>
        <ul className="nav-links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">about</a>
          </li>
          <li>
            <a href="#contact">contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
