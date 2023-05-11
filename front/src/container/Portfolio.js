import React, { useState, useEffect } from "react";
import { Card, Divider, Modal, Tooltip } from "antd";
import { GithubOutlined, QuestionCircleOutlined } from "@ant-design/icons";

import { PortFolioData } from "../data/PortfolioData";
import "./Portfolio.css";

const Portfolio = () => {
  const { Meta } = Card;
  const [favorites, setFavorites] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [contentTitle, setContentTitle] = useState("");
  const [contentStack, setContentStack] = useState("");
  const [contentDate, setContentDate] = useState("");
  const [contentPicture, setContentPicture] = useState("");

  useEffect(() => {
    setFavorites(PortFolioData);
  }, []);

  const handleFavorites = (id) => {
    const newFavorites = favorites.map((item) => {
      return item.id === id ? { ...item, favorite: !item.favorite } : item;
    });

    setFavorites(newFavorites);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="Content">
      <h1 className="portfolioGeneral">Portfolio</h1>
      <Divider />
      <div className="portfolioProjects">
        {favorites.map((data) => {
          return (
            <Card
              className="portfolioCards"
              cover={
                <img
                  className="portfolioPictures"
                  alt="example"
                  src={data.picture}
                  onClick={() => window.open(data.linkRedirect, "redirect")}
                />
              }
              actions={[
                <Tooltip title="Link to source code">
                  <GithubOutlined
                    key="source"
                    onClick={() => window.open(data.codeSource, "source")}
                  />
                </Tooltip>,
                <Tooltip title="Details project">
                  <QuestionCircleOutlined
                    key="details"
                    onClick={() => {
                      setIsModalOpen(true);
                      setContentTitle(data.title);
                      setContentStack(data.stack);
                      setContentDate(data.date);
                      setContentPicture(data.picture);
                    }}
                  />
                </Tooltip>,
                <button
                  onClick={() => {
                    console.log("test", data.id);
                    handleFavorites(data.id);
                  }}
                >
                  {data.favorite === true ? "Remove" : "Add"}
                </button>,
              ]}
            >
              <Meta title={data.title} description={data.description} />
              <Modal
                footer={null}
                title={contentTitle}
                open={isModalOpen}
                centered
                onCancel={handleCancel}
              >
                <div className="portfolioModal">
                  <div className="modalDetails">
                    <div>Stack:{contentStack}</div>
                    <div>Date Création:{contentDate}</div>
                  </div>
                  <img className="modalPicture" alt="" src={contentPicture} />
                </div>
              </Modal>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
