import React from "react";
import { Articles } from "../data/Articles";
import { Card, Carousel } from 'antd'
import "./Blog.css";
import logo from '../logo.svg'

const Blog = () => {


  return (
    <div className="Content">
      <h1 className="blogGeneral"> Articles</h1>
      <Carousel arrows dots={false} prevArrow={<div />} nextArrow={<div />}>
        <div className='styleDefault'>
          <h3 style={{ textAlign: 'center' }}>1</h3>
          <br />
          <div style={{ display: "flex" }}>
            <div style={{ width: '50%', height: 145, paddingLeft: 20, margin: 10, position: "relative", bottom: '25px' }}>So, you’ve been a web developer for a while, or maybe you’re jus a fast learner. Either way, hats off to you! Some of the beginner blogs outlined above may be a bit too junior for you               which is where Scotch.io comes in handy. This blog is full of               tutorials on everything from JavaScript to PHP. They also offer               some interesting courses that require minimal commitment and ca help take your coding expertise to the next level.</div>
            <img style={{ width: '43%', height: 130, bottom: 25, position: "relative", margin: 10 }} src={logo} alt='Logo' />
          </div>
        </div>
        <div className='styleDefault'>
          <h3 style={{ textAlign: 'center' }}>2</h3>
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
