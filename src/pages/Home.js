import React from "react";
import "./Home.css";

function Home({ headLine, links }) {
  return (
    <div className="home">
      <div className="main-contents">
        <div className="headLine">{headLine}</div>
        <ul className="links">
          {links.map((link, index) => (
            <li key={index}>
              <a href={`#${link}`} className="link">
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Home;
