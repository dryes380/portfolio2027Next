import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import FooterTest from "./components/Footer";

import Blog from "./container/Blog";
import Portfolio from "./container/Portfolio";
import "./App.css";

import LoadingPage from "./helpers/LoadingPage";

const App = () => {
  return (
    <>
      <Header />
      <LoadingPage />
      <div className="Container">
        <Routes>
          <Route index element={<Blog />} />
          <Route path="portfolio" element={<Portfolio />} />
        </Routes>
      </div>
      <FooterTest />
    </>
  );
};

export default App;
