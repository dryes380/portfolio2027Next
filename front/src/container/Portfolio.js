import React, { useState, useEffect } from "react";
import { Tabs } from "antd";

import { PortFolioData } from "../data/PortfolioData";
import Projects from "./Projects";
import FavoriteList from "./FavoriteList";
import "./Portfolio.css";

const Portfolio = () => {
  const [favorites, setFavorites] = useState([]);
  useEffect(() => {
    setFavorites(PortFolioData);
  }, []);

  const handleFavorites = (id) => {
    const newFavorites = favorites.map((item) => {
      return item.id === id ? { ...item, favorite: !item.favorite } : item;
    });

    setFavorites(newFavorites);
  };
  const items = [
    {
      key: "1",
      label: `List Project`,
      children: (
        <Projects favorites={favorites} handleFavorites={handleFavorites} />
      ),
    },
    {
      key: "2",
      label: `Favorite Project`,
      children: (
        <FavoriteList favorites={favorites} handleFavorites={handleFavorites} />
      ),
    },
  ];

  return (
    <div className="Content">
      <h1 className="portfolioGeneral">Portfolio</h1>
      <Tabs defaultActiveKey="1" items={items} />
    </div>
  );
};

export default Portfolio;
