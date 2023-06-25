import React, { useState, useEffect } from "react";
import News from "./News";
import "./NewsItem.css";
import "./Button.css";

const NewsItem = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const fetchData = async (page) => {
    setLoading(true);
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=d12ca6cce1f248a591012a9e0df1db45&page=${page}&pageSize=21`;
    const response = await fetch(url);
    const data = await response.json();
    setArticles(data.articles);
    setTotalResults(data.totalResults);
    setLoading(false);
  };

  const handlePClick = async () => {
    if (page > 1) {
      const newPage = page - 1;
      await fetchData(newPage);
      setPage(newPage);
    }
  };

  const handleNClick = async () => {
    const totalPages = Math.ceil(totalResults / 21);
    if (page < totalPages) {
      const newPage = page + 1;
      await fetchData(newPage);
      setPage(newPage);
    }
  };

  useEffect(() => {
    fetchData(page);
  }, [page]);

  return (
    <>
      <div className="newsItem">
        <h1>
          News Daily-Top Headlines
          <br />
          <span> Scroll Down</span>
        </h1>

        <div className="newsArticles">
          {loading ? (
            <p>Loading...</p>
          ) : (
            articles.map((element) => (
              <div className="articles" key={element.url}>
                <News
                  url={element.url}
                  title={element.title ? element.title : ""}
                  description={
                    element.description ? element.description.slice(0, 45) : ""
                  }
                  urlToImage={element.urlToImage}
                />
              </div>
            ))
          )}
        </div>
        <div className="bttn">
          <div className="buttons">
            <button onClick={handlePClick}>
              <span>&larr;</span>PREVIOUS
            </button>
          </div>

          <div className="buttons">
            <button onClick={handleNClick}>NEXT &rarr;</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsItem;
