import React, { useState } from "react";
import { SocialIcon } from "react-social-icons";
import { useTranslation } from "react-i18next";

import "./Footer.css";

const Footer = () => {
  const [seconds, setSeconds] = useState(new Date().getSeconds());

  const GetTime = () => {
    setSeconds(new Date().getSeconds());
    console.count(seconds);
  };

  setTimeout(() => {
    GetTime();
  }, 1000);
  const { t, i18n } = useTranslation();

  const str =
    i18n.language === "fr"
      ? new Date().toLocaleString("fr-FR", { timeZone: "UTC" })
      : new Date().toLocaleString("en-US", { timeZone: "UTC" });
  return (
    <footer className="footerContainer">
      <div className="footerContent">
        <div className="footerTime">{str}</div>
        <div className="footerRights">{t("author")}</div>
        <div className="footerSocialIcons">
          <a href="https://www.linkedin.com/in/vincent-kouoi-5079b1b1/">
            <SocialIcon
              style={{ right: 6, width: 40, height: 40 }}
              network="linkedin"
            />
          </a>
          <a href="https://github.com/xp380">
            <SocialIcon network="github" style={{ width: 40, height: 40 }} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
