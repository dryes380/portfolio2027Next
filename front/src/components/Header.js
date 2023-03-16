import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="head">
      <div
        style={{ display: "flex", gap: "45%", paddingTop: 20, paddingLeft: 10 }}
      >
        <div>BLOG</div>
        <div>Portfolio</div>
        <div>FR/EN</div>
      </div>
    </header>
  );
};

export default Header;
