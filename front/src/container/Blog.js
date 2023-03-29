import React from "react";
import { Articles } from "../data/Articles";
import { Card, Carousel } from 'antd'
import "./Blog.css";

const Blog = () => {


  return (
    <div className="Content">
      <h1 className="blogGeneral"> Articles</h1>
      <Carousel arrows prevArrow={<div />} nextArrow={<div />}>
        <div>
          <h3
            className='styleDefault'
          >
            1
          </h3>
        </div>
        <div>
          <h3 className='styleDefaults'>2</h3>
        </div>
      </Carousel>
      <br />
      <div className='blogArticles'>
        {Articles.map(data => {
          return (
            <>
              <Card title={data.title} bordered className='blogCardContent' extra={data.release}>
                {data.content}
                <br />
                <div>
                  <p className='blogContentAuthor'>{data.author}</p>
                  <p className='blogContentRedirect'>redirect</p>
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
