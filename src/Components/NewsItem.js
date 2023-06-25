import React, { Component } from "react";
import News from "./News";
import "./NewsItem.css";
import "./Button.css";
export default class NewsItem extends Component {

  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=d12ca6cce1f248a591012a9e0df1db45&page=1&pageSize=21";
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articles: parseData.articles,
      totalresults: parseData.totalResults
    }
    );
  }
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  handlePClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=d12ca6cce1f248a591012a9e0df1db45&page=${this.state.page - 1}&pageSize=21`
    let data = await fetch(url)
    let parseData = await data.json()
    this.setState({
      articles: parseData.articles,
      page: this.state.page - 1
    }
    )
  };
  handleNClick = async () => {
    if (this.state.page + 1 > Math.ceil(this.state.totalresults / 21)) {

    }
    else {
      let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=d12ca6cce1f248a591012a9e0df1db45&page=${this.state.page + 1}&pageSize=21`
      let data = await fetch(url)
      let parseData = await data.json()
      this.setState({
        articles: parseData.articles,
        page: this.state.page + 1
      }
      )
    }
  };
  render() {
    return (
      <>
        <div className="newsItem">
          <h1>
            News Daily-Top Headlines
            <br />
            <span> Scroll Down</span>
          </h1>

          <div className="newsArticles">
            {this.state.articles.map((element) => {
              return (
                <div className="articles" key={element.url}>
                  <News

                    url={element.url}
                    title={element.title ? element.title : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 45)
                        : ""
                    }
                    urlToImage={element.urlToImage}
                  ></News>
                </div>
              );
            })}
          </div>
          <div className="bttn">
            <div className="buttons">
              <button onClick={this.handlePClick}> <span>&larr;</span>PREVIOUS</button>
            </div>

            <div className="buttons">
              <button onClick={this.handleNClick}> NEXT 	&rarr;</button>
            </div>

          </div>
        </div>
      </>
    );
  }
}
