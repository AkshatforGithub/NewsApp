import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Lottie from "react-lottie";
import scrollAnim from "../assets/anim.json"
import './News.css'
import PropTypes from 'prop-types'


export class News extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: 8 ,
    category:'general'
  }

  static propTypes = {
    country:PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string

  }




  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    this.setState({ loading: true})
    let url =
    `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=839c8e4abd9941429d81463a91417455&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles });
    this.setState({ loading: false})
  }

 handleNextClick = async()=>{
    console.log("print")
    if(this.state.page + 1>Math.ceil(this.state.totalResults/20)){

    }
    else{
      
      let url =
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=839c8e4abd9941429d81463a91417455&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
      this.setState({ loading: true})
      let data = await fetch(url);
      let parsedData = await data.json();
      
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
        loading: false
      })
    }
  }

 handlePreviousClick = async()=>{
    console.log("hello")
    let url =
  `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=839c8e4abd9941429d81463a91417455&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
  this.setState({ loading: true})
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false
    })
  }


  render() {
    return (
      <div
        className=""
        style={{ backgroundColor: "rgba(255,234,227,0.3)" }}
      >
        <div className="container py-4">
          <h1 className="text-center fs-1">Top-HeadLineS</h1>
          <div className="my-4">
            <div className="row">
              {!this.state.loading ? (this.state.articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <NewsItem
                      title={element.title ? element.title.slice(0, 75) : ""}
                      description={
                        element.description
                          ? element.description.slice(0, 200)
                          : "Click To Read The Full News"
                      }
                      imageUrl={element.urlToImage}
                      url={element.url}
                      author={element.author}
                      date={element.publishedAt}
                    />
                  </div>
                );
              })):(<div style={{display: 'flex', width: '100%', justifyContent: 'center', height: '50vh', alignItems: 'center'}}><div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div></div>)}
            </div>
            <div className=" d-flex justify-content-between mt-4">
              <button disabled={this.state.page<=1}
                type="button"
                class="btn btn-info"
                onClick={this.handlePreviousClick}
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
                  disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)}
                type="button"
                class="btn btn-info"
                onClick={this.handleNextClick}
                style={{
                  backgroundColor: "#fb607f",
                  color: "black",
                  borderColor: "pink",
                  display: "flex",
                  alignItems: "center",
                  // disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/{this.props.pageSize})}
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
