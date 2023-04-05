import React, { useState, useEffect } from 'react'
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import FooterTest from "./components/Footer";

import Blog from "./container/Blog";
import Portfolio from "./container/Portfolio";
import "./App.css";

import LoadingPage from "./helpers/LoadingPage";

const App = () => {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])
  return (
    <>
      <Header />

      <div className="Container">
        {loading ? <LoadingPage /> :
          <Routes>
            <Route index element={<Blog />} />
            <Route path="portfolio" element={<Portfolio />} />
          </Routes>
        }
      </div>
      <FooterTest />
    </>
  );
};

export default App;
