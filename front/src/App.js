import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import FooterTest from "./components/Footer";

import Blog from "./container/Blog";
import Portfolio from "./container/Portfolio";
import "./App.css";

const App = () => {
  return (
    <>
      <Header />
      <div className="Container">
        <Routes>
          <Route index element={<Blog />} />
          <Route path="portfolio" element={<Portfolio />} />
        </Routes>
        {/* <div className="Content">Test</div> */}
      </div>
      <FooterTest />
    </>
  );
};

export default App;
