import React from "react";
import { Articles } from "../data/Articles";
import { Card, Carousel } from 'antd'
import "./Blog.css";

const Blog = () => {
  const styleDefaults = {
    height: 220,
    color: "white",
    backgroundColor: 'black'
  };

  return (
    <div className="Content">
      <h1 className="blogGeneral"> Articles</h1>
      <Carousel arrows prevArrow={<div />} nextArrow={<div />}>
        <div>
          <h3
            style={{
              backgroundColor: "red",
              ...styleDefaults
            }}
          >
            1
          </h3>
        </div>
        <div>
          <h3 style={{ backgroundColor: "teal", ...styleDefaults }}>2</h3>
        </div>
      </Carousel>
      <br />
      <div style={{ display: "flex" }}>
        {Articles.map(data => {
          return (
            <>
              <Card title={data.title} bordered style={{ width: '33%' }} extra={data.release}>
                {data.content}
                <br />
                <div>
                  <p style={{ float: "left" }}>{data.author}</p>
                  <p style={{ float: "right" }}>redirect</p>
                </div>
              </Card>
            </>
          )
        })}
      </div>
    </div>
  );
};
export default Blog;
