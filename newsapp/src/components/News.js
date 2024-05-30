import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Lottie from "react-lottie";
import scrollAnim from "../assets/anim.json"

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=839c8e4abd9941429d81463a91417455";
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData)
    // console.log(data);
    this.setState({ articles: parsedData.articles });
  }

  render() {
    return (
      <div
        className="py-3"
        style={{ backgroundColor: "rgba(255,234,227,0.3)" }}
      >
        <div className="container my-4">
          <h1>NewsMommY- TopHeadlines</h1>
          <div className="my-4">
            <div className="row">
              {this.state.articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <NewsItem
                      title={element.title ? element.title.slice(0, 40) : ""}
                      description={
                        element.description
                          ? element.description.slice(0, 100)
                          : ""
                      }
                      imageUrl={element.urlToImage}
                      url={element.url}
                    />
                  </div>
                );
              })}
            </div>
            <div className=" d-flex justify-content-between mt-4">
              {/* <button type="button" class="btn btn-info " style={{ backgroundColor: '#fb607f', color: 'black',borderColor:'pink'}}> &#8604; Previous</button> */}
              {/* <button type="button" class="btn btn-info " style={{ backgroundColor: '#fb607f', color: 'black',borderColor:'pink'}}>Next &#8605;</button> */}
              <button
                type="button"
                class="btn btn-info "
                style={{
                  backgroundColor: "#fb607f",
                  color: "black",
                  borderColor: "pink",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Lottie
                  options={{ loop: true, animationData: scrollAnim }}
                  height={40}
                  style={{ transform: "rotateX(180deg) rotate(180deg)" }}
                />
                Previous
              </button>
              <button
                type="button"
                class="btn btn-info "
                style={{
                  backgroundColor: "#fb607f",
                  color: "black",
                  borderColor: "pink",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                Next
                <Lottie
                  options={{ loop: true, animationData: scrollAnim }}
                  height={40}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default News;
