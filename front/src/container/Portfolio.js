import React, { useState } from "react";
import { Card, Divider, Modal } from 'antd'
import { PortFolioData } from '../data/PortfolioData'
import { GithubOutlined } from '@ant-design/icons';

const Portfolio = () => {
  const { Meta } = Card
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="Content">
      <h1 style={{ textAlign: "center" }}>Portfolio</h1>
      <Divider />
      <div className='blogArticles'>
        {PortFolioData.map((data => {
          return (
            <Card
              style={{
                width: 300,
                height: 340
              }}
              cover={
                <img
                  alt="example"
                  src={data.picture}
                />
              }
              actions={[
                <GithubOutlined key='source' onClick={showModal} />,
              ]}
            >
              <Meta
                title={data.title}
                description={data.description}
              />
              <Modal title={data.stack} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
              </Modal>
            </Card>
          )
        }))}
      </div>
    </div>
  );
};

export default Portfolio;
