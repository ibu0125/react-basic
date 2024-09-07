import React from "react";
import "./Home.css";

function Home({ headLine, links, onLinkClick }) {
  return (
    <div className="home">
      <div className="main-contents">
        <div className="headLine">{headLine}</div>
        <ul className="links">
          {links.map((link, index) => (
            <li key={index}>
              <a
                href={`#${link}`}
                className="link"
                onClick={(e) => {
                  e.preventDefault();
                  onLinkClick(link.image, link.name);
                }}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Home;
