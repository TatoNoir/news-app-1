import React from "react";
import newsData from "../data/newsdata.json";

import { BrowserRouter as Link } from "react-router-dom";

export default function Home(props) {
  const { articles } = newsData;
  return (
    <>
      <h2>Home</h2>
      <div className="newsContainer">
        {articles.map((todo, index) => (
          <div key={index} className="NewsItem">
            <h2 className="NewsTitle">{todo.title}</h2>
            <div>
              <img src={todo.urlToImage} alt={todo.title} srcSet="" />
            </div>
            <Link to={`/news/${index}`}>{todo.title}</Link>{" "}
          </div>
        ))}
      </div>
    </>
  );
}
