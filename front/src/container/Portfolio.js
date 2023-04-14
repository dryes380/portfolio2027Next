import React, { useState } from "react";
import { Card, Divider, Modal, Tooltip } from 'antd'
import { PortFolioData } from '../data/PortfolioData'

import { GithubOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import './Portfolio.css'

const Portfolio = () => {
  const { Meta } = Card
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [contentTitle, setContentTitle] = useState("");
  const [contentStack, setContentStack] = useState('')
  const [contentDate, setContentDate] = useState('')
  const [contentPicture, setContentPicture] = useState('')

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="Content">
      <h1 className='portfolioGeneral'>Portfolio</h1>
      <Divider />
      <div className='portfolioProjects'>
        {PortFolioData.map((data => {
          return (
            <Card
              className='portfolioCards'
              cover={
                <img
                  className='portfolioPictures'
                  alt="example"
                  src={data.picture}
                  onClick={() => window.open(data.linkRedirect, 'redirect')}
                />
              }
              actions={[
                <Tooltip title='Link to source code'><GithubOutlined key='source' onClick={() => window.open(data.codeSource, 'source')} /></Tooltip>,
                <Tooltip title='Details project'><QuestionCircleOutlined key='details' onClick={() => { setIsModalOpen(true); setContentTitle(data.title); setContentStack(data.stack); setContentDate(data.date); setContentPicture(data.picture) }} /></Tooltip>
              ]}
            >
              <Meta
                title={data.title}
                description={data.description}
              />
              <Modal footer={null} title={contentTitle} open={isModalOpen} centered onCancel={handleCancel}>
                <div style={{ display: "flex", gap: 160 }}>
                  <div style={{ textAlign: "left" }}>
                    <div>Stack:{contentStack}</div>
                    <div>Date Création:{contentDate}</div>
                  </div>
                  <div style={{ float: 'right' }}>
                    <img style={{ width: 100, height: 70 }} src={contentPicture} />
                  </div>
                </div>
              </Modal>
            </Card>
          )
        }))}
      </div>
    </div>
  );
};

export default Portfolio;
