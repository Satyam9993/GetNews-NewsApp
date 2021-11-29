import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    render() {
        return (
            <div>
                <div className="container my-5">
                <h2>Top Headlines</h2>
                <div className="row my-5">
                    <div className="col-md-4">
                    <NewsItem title={"My title"} description={"My descriptions"} imageurl={"https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg"}/>
                    </div>
                    <div className="col-md-4">
                    <NewsItem title={"My title"} description={"My descriptions"}/>
                    </div>
                    <div className="col-md-4">
                    <NewsItem title={"My title"} description={"My descriptions"}/>
                    </div>
                </div>
                <div className="row my-5">
                    <div className="col-md-4">
                    <NewsItem title={"My title"} description={"My descriptions"}/>
                    </div>
                    <div className="col-md-4">
                    <NewsItem title={"My title"} description={"My descriptions"}/>
                    </div>
                    <div className="col-md-4">
                    <NewsItem title={"My title"} description={"My descriptions"}/>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default News
