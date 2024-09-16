import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer({ title, menuItems = [], onLinkClick }) {
  return (
    <footer className="footer">
      {/* <div className="logo">{title}</div> */}
      <div className="footer-rayout">
        <div className="footer-rayout1">
          <nav>
            <ul className="footer-nav-links">
              {menuItems.length > 0 ? (
                menuItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      to={item.link}
                      className="footer-nav-link"
                      onClick={(e) => {
                        onLinkClick(item.image, item.name);
                      }}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))
              ) : (
                <li>メニュー項目がありません</li>
              )}
            </ul>
          </nav>
        </div>
        <div className="footer-rayout2"></div>
        <div className="footer-rayout3">
          <div className="quick-links">
            <a href="#top">トップに戻る</a> |
            <Link to="/projects">プロジェクト一覧</Link>
          </div>
          <div className="footer-contact-wrapper">
            <div className="contact-info">
              <p>
                Email:{" "}
                <a href="mailto:youremail@example.com">youremail@example.com</a>
              </p>
            </div>
            <div className="social-media-links">
              <a
                href="https://github.com/username"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/icons/github.svg" alt="GitHub" />
              </a>
              <a
                href="https://linkedin.com/in/username"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/icons/linkedin.svg" alt="LinkedIn" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="copy-right-wrapper">
        <p className="copy-right">&copy; 2024 higano</p>
      </div>
    </footer>
  );
}

export default Footer;
