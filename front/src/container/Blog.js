import React, { useState, useEffect } from "react";
import "./Blog.css";

import { Card, Carousel, Divider } from 'antd'
import { Routes, Route, Link } from 'react-router-dom'

import logo from '../logo.svg'
import { Articles } from "../data/Articles";
import FilterPills from "../helpers/FilterPills";
import SortPills from "../helpers/SortPills";

const Blog = () => {

  const articlesSortByTitle = [...Articles.sort((a, b) => a.release > b.release ? 1 : -1)]

  const [initial, setInitial] = useState([...articlesSortByTitle])
  const setPersonal = [...initial?.filter(data => data.type === 'personal')]
  const setPrivate = [...initial?.filter(data => data.type === 'private')]

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

    <Routes>
      <Route exact path='/' element={
        <div className="Content">
          <h1 className="blogGeneral"> Articles</h1>
          <Divider />
          <Carousel arrows dots={false} prevArrow={<div />} nextArrow={<div />}>
            {articlesSortByTitle.slice(0, 3).map(data =>
              <div className='styleDefault'>
                <>
                  <h3 className='styleTopTitle'>{data.title}</h3>
                  <br />
                  <div className='styleTopCarousel'>
                    <div className='styleTopContentText'>{data.content}</div>
                    <img className='styleTopContentPicture' src={logo} alt='Logo' />
                  </div>
                </>
              </div>
            )}
          </Carousel>
          <br />
          <div className='styleButton'>
            <div className='buttonFilter'>
              <FilterPills setInitial={setInitial} setPersonal={setPersonal} setPrivate={setPrivate} articlesSortByTitle={articlesSortByTitle} />
            </div>
            <div className='buttonSort'>
              <SortPills toggleSortHandler={toggleSortHandler} />
            </div>
          </div>
          <br />
          <div className='blogArticles'>
            {initial.map(data => {
              return (
                <Card title={data.title} bordered extra={data.release}>
                  <div className='blogContent'>{data.content}</div>
                  <br />
                  <div className='blogCardContent'>
                    <p className='blogContentAuthor'>{data.author}</p>
                    <Link className='blogContentRedirect' target='_blank' to={data.title}>redirect</Link>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>}>
      </Route>
    </Routes>
  );
};
export default Blog;
