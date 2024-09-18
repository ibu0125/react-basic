import React, { useState } from "react";
import "./Header.css";
import { Link as ScrollLink } from "react-scroll";
// import Form from "./Form";

function Header({ title, menuItems, onLinkClick, setActive }) {
  const [isActive, setIsActive] = useState(false);
  // const [isActive, setIsActive] = useState(true);
  const toggleClass = () => {
    const newState = !isActive;
    setIsActive(newState);
    setActive(newState);
  };
  const handleLinkClick = (newImageUrl, linkName) => {
    if (linkName === "Contact") {
      setTimeout(() => {
        if (linkName === "Contact") {
          setIsActive(true); // 背景を暗くする
        } else {
          setIsActive(false); // 他のリンクでは背景を元に戻す
        }
      }, 0);
    }
  };
  return (
    <div>
      <header
        className={isActive ? "active-header" : "header"}
        style={{ position: "fixed" }}
      >
        <div className="logo">{title}</div>

        <nav>
          <ul className="nav-links">
            {menuItems.map((item, index) => (
              <li key={index}>
                {index !== menuItems.length - 1 ? (
                  <ScrollLink
                    to={item.title}
                    smooth={true}
                    duration={500}
                    // href={`#${item}`}
                    className="nav-link"
                    onClick={(e) => {
                      // e.preventDefault();
                      onLinkClick(item.image, item.name);
                    }}
                  >
                    {item.name}
                  </ScrollLink>
                ) : (
                  <div
                    className="nav-link nav-link-last"
                    onClick={(e) => {
                      // e.preventDefault();
                      onLinkClick(item.image, item.name);
                      handleLinkClick(item.image, item.name);
                    }}
                  >
                    {item.name}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <div
        className={isActive ? "active-button" : "button"}
        id="back-button"
        onClick={toggleClass}
      >
        <i></i>
        <i></i>
        <i></i>
      </div>
    </div>
  );
}

export default Header;
