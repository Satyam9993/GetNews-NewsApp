import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

    constructor(){
        super();
        console.log("Hello");
        this.state = {
            article : [],
            loading : false, 
            page:1
        }
    }

    async componentDidMount(){
        // console.log("cdn");
        let url = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=84234aa687874695bcc6e120995a740a&page=1&pagesize=15";
        let data = await fetch(url);
        let parsedata = await data.json();
        // console.log(parsedata);
        this.setState({article: parsedata.articles, totalResults: parsedata.totalResults});
    }
    handlenextClick= async() => {
        // console.log("cdn");
        if(this.state.page+1 > Math.ceil(this.state.totalResults/15))
        {
            
        }
        else{
            let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=84234aa687874695bcc6e120995a740a&page=${this.state.page+1}&pagesize=15`;
            let data = await fetch(url);
            let parsedata = await data.json();
            this.setState({article: parsedata.articles});
            this.setState({
                page: this.state.page+1
            })
        }
    }

    handlepreviousClick= async ()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=84234aa687874695bcc6e120995a740a&page=${this.state.page-1}&pagesize=15`;
        let data = await fetch(url);
        let parsedata = await data.json();
        this.setState({article: parsedata.articles});
        this.setState({
            page: this.state.page-1
        })
    }
    // comment
    render() {
        return (
            <div>
                <div className="container my-5">
                <h2>Top Headlines - GetNews Stay Updated</h2>
                <div className="row my-3">
                {this.state.article.map((element)=>{
                    return <div className="col-md-4 my-2" key={element.url}>
                    <NewsItem title={element.title} description={element.description == null ?"": element.description.slice(0, 100)+".."} imageurl={element.urlToImage==null ? "https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmV3c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60": element.urlToImage}  newsUrl={element.url}/>
                    </div>
                })} 
                </div>
                <div className="container d-flex justify-content-center">
                <button disabled={this.state.page <= 1 ? true : false} type="button" class="btn btn-dark mx-1" onClick={this.handlepreviousClick}>&larr; previous </button>
                <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/15)? true:false} type="button" class="btn btn-dark mx-1" onClick={this.handlenextClick}>next &rarr;</button>       
                </div> 
                </div>
            </div>
        )   
    }
}

export default News
