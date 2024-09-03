import React from "react";
import "./Header.css";

function Header({ title, menuItems }) {
  return (
    <header className="header">
      <div className="logo">{title}</div>
      <nav>
        <ul className="nav-links">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a href={`#${item}`} className="nav-link">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
