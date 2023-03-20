import React from "react";
import { Articles } from "../data/Articles";

import "./Blog.css";

const Blog = () => {
  return (
    <div className="Content">
      <h1 className="blogGeneral"> Articles</h1>
      {Articles.map((data) => {
        return (
          <div className="blogArticles">
            <div className="blogArticlesElements">
              <div className="blogHeaders">
                <div>{data.release}</div>
                <div>{data.title}</div>
                <div>{data.author}</div>
              </div>
              <div className="blogContainers">
                <div className="blogPhoto">photo</div>
                <div className="blogContent">{data.content}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Blog;
