import React, { Component } from "react";
import News from "./News";
import "./NewsItem.css";
import "./Button.css";

export default class NewsItem extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };
  }

  async componentDidMount() {
    await this.fetchData(this.state.page);
  }
  fetchData = async (page) => {
    try {
      this.setState({ loading: true });
  
      const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=d12ca6cce1f248a591012a9e0df1db45&page=${page}&pageSize=21`;
      const response = await fetch(url);
  
      if (response.ok) {
        const data = await response.json();
        this.setState({
          articles: data.articles,
          totalResults: data.totalResults,
          loading: false,
        });
      } else {
        throw new Error("Error fetching data from the API");
      }
    } catch (error) {
      console.error(error);
      this.setState({ loading: false });
    }
  };
  

  handlePClick = async () => {
    if (this.state.page > 1) {
      const newPage = this.state.page - 1;
      await this.fetchData(newPage);
      this.setState({ page: newPage });
    }
  };

  handleNClick = async () => {
    const totalPages = Math.ceil(this.state.totalResults / 21);
    if (this.state.page < totalPages) {
      const newPage = this.state.page + 1;
      await this.fetchData(newPage);
      this.setState({ page: newPage });
    }
  };

  render() {
    const { articles, loading } = this.state;

    return (
      <div className="newsItem">
        <h1>
          News Daily-Top Headlines
          <br />
          <span> Scroll Down</span>
        </h1>

        <div className="newsArticles">
          {loading ? (
            <p>Loading...</p>
          ) : articles.length > 0 ? (
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
          ) : (
            <p>No articles to display.</p>
          )}
        </div>

        <div className="bttn">
          <div className="buttons">
            <button onClick={this.handlePClick}>
              <span>&larr;</span>PREVIOUS
            </button>
          </div>

          <div className="buttons">
            <button onClick={this.handleNClick}>NEXT &rarr;</button>
          </div>
        </div>
      </div>
    );
  }
}
