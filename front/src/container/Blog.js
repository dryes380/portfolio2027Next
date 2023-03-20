import React from "react";
import { Articles } from "../data/Articles";

const Blog = () => {
  return (
    <div className="Content">
      <h1 style={{ textAlign: "center" }}> Articles</h1>
      {Articles.map((data) => {
        return (
          <div style={{ display: "flex", gap: 10 }}>
            <div
              style={{
                width: "100%",
                border: "2px solid black",
                height: 300,
                padding: 10,
                margin: 10,
              }}
            >
              <div style={{ display: "flex", gap: "40%" }}>
                <div>{data.release}</div>
                <div>{data.title}</div>
                <div>{data.author}</div>
              </div>
              <div
                style={{
                  display: "flex",
                  margin: 10,
                  position: "relative",
                  right: 5,
                }}
              >
                <div style={{ width: "20%", height: 200 }}>photo</div>
                <div style={{ width: "80%" }}>{data.content}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Blog;
