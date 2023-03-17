import React from "react";
import "./Header.css";

import { useTranslation } from "react-i18next";

const Header = () => {
  const { i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className="headerContainer">
      <div className="headerContent">
        <div>BLOG</div>
        <div>Portfolio</div>
        <div className="headerTranslation">
          <button onClick={() => changeLanguage("fr")}>FR</button>
          <button onClick={() => changeLanguage("en")}>EN</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
