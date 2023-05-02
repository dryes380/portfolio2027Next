import React from "react";
import "./Header.css";

import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className="headerContainer">
      <div className="headerContent">
        <Link to="/">BLOG</Link>
        <Link to="portfolio">Portfolio</Link>
        <div className="headerTranslation">
          <button onClick={() => changeLanguage("fr")}>EN</button>
          <button onClick={() => changeLanguage("en")}>FR</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
