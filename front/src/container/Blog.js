import React, { useState, useEffect } from "react";
import { Articles } from "../data/Articles";
import { Card, Carousel } from 'antd'
import "./Blog.css";
import logo from '../logo.svg'

const Blog = () => {

  const articlesSortByTitle =
    [...Articles.sort((a, b) => a.release > b.release ? 1 : -1)]

  const [initial, setInitial] = useState([...articlesSortByTitle])
  const setPersonal = [...initial.filter(data => data.type === 'personal')]
  const setPrivate = [...initial.filter(data => data.type === 'private')]
  const [sortActive, setActive] = useState(false)
  const toggleSortHandler = () => setActive(a => !a)

  useEffect(() => {
    if (sortActive) {
      setInitial(
        [...Articles].sort((a, b) => {
          if (a.title.toUpperCase() < b.title.toUpperCase()) return -1;
          if (a.title.toUpperCase() > b.title.toUpperCase()) return 1;
        })
      )
    } else {
      setInitial(Articles)
    }
  }, [sortActive])


  return (
    <div className="Content">
      <h1 className="blogGeneral"> Articles</h1>
      <Carousel arrows dots={false} prevArrow={<div />} nextArrow={<div />}>
        <div className='styleDefault'>
          <h3 className='styleTopTitle'>1</h3>
          <br />
          <div className='styleTopCarousel'>
            <div className='styleTopContentText'>So, you’ve been a web developer for a while, or maybe you’re jus a fast learner. Either way, hats off to you! Some of the beginner blogs outlined above may be a bit too junior for you               which is where Scotch.io comes in handy. This blog is full of               tutorials on everything from JavaScript to PHP. They also offer               some interesting courses that require minimal commitment and ca help take your coding expertise to the next level.</div>
            <img className='styleTopContentPicture' src={logo} alt='Logo' />
          </div>
        </div>
        <div className='styleDefault'>
          <h3 className='styleTopTitle'>2</h3>
          <br />
          <div className='styleTopCarousel'>
            <div className='styleTopContentText'>So, you’ve been a web developer for a while, or maybe you’re jus a fast learner. Either way, hats off to you! Some of the beginner blogs outlined above may be a bit too junior for you               which is where Scotch.io comes in handy. This blog is full of               tutorials on everything from JavaScript to PHP. They also offer               some interesting courses that require minimal commitment and ca help take your coding expertise to the next level.</div>
            <img className='styleTopContentPicture' src={logo} alt='Logo' />
          </div>
        </div>
      </Carousel>
      <br />
      <div className='styleButton'>
        <div className='buttonFilter'>
          <button onClick={() => setInitial(initial)}>All</button>
          <button onClick={() => setInitial(setPersonal)}>personal</button>
          <button onClick={() => setInitial(setPrivate)}>private</button>
        </div>
        <div className='buttonSort'>
          <button onClick={() => toggleSortHandler()}>Title</button>
        </div>
      </div>
      <br />
      <div className='blogArticles'>
        {initial.map(data => {
          return (
            <>
              <Card title={data.title} bordered className='blogCardContent' extra={data.release}>
                <div>{data.content}</div>
                <br />
                <div style={{ position: 'absolute', bottom: 0, width: '90%' }}>
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
