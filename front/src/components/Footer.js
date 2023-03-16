import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footerContainer">
      <div
        style={{ display: "flex", gap: "34%", marginTop: 20, marginLeft: 10 }}
      >
        <div>Date et Heure</div>
        <div>Droits d'auteurs Vincent Kouoï 2023</div>
        <div>Réseaux sociaux</div>
      </div>
    </footer>
  );
};

export default Footer;
