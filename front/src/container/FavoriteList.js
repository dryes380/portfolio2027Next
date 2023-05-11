import React, { useState } from "react";
import { Card, Modal, Tooltip } from "antd";
import {
  GithubOutlined,
  QuestionCircleOutlined,
  StarOutlined,
} from "@ant-design/icons";

import "./FavoriteList.css";

const FavoriteList = ({ favorites, handleFavorites }) => {
  const { Meta } = Card;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [contentTitle, setContentTitle] = useState("");
  const [contentStack, setContentStack] = useState("");
  const [contentDate, setContentDate] = useState("");
  const [contentPicture, setContentPicture] = useState("");

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="portfolioProjects">
      {favorites.map((data) =>
        data.favorite === true ? (
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
              <div
                onClick={() => {
                  handleFavorites(data.id);
                }}
              >
                {data.favorite === true ? (
                  <StarOutlined style={{ color: "yellow" }} />
                ) : (
                  <StarOutlined style={{ color: "black" }} />
                )}
              </div>,
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
        ) : null
      )}
    </div>
  );
};

export default FavoriteList;
