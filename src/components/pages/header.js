import React from "react";
import "./Header.css";

function Header({ title, menuItems, onLinkClick }) {
  return (
    <header className="header" style={{ position: "fixed" }}>
      <div className="logo">{title}</div>
      <nav>
        <ul className="nav-links">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a
                href={`#${item}`}
                className="nav-link"
                onClick={(e) => {
                  e.preventDefault();
                  onLinkClick(item.image, item.name);
                }}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
