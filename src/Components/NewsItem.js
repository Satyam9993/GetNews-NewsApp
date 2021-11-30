import React, { Component } from 'react'

export class NewsItem extends Component {

    render() {
        let {title, description, imageurl, newsUrl} = this.props;
        return (
            <div>
                <div className="container">
                    <div className="card" style={{width:"18rem"}}>
                        <img src={imageurl} className="card-img-top" alt="error"/>
                        <div class ="card-body">
                        <h5 class ="card-title">{title}</h5>
                        <p class ="card-text">{description}</p>
                        <a rel="norefferal" href={newsUrl} target="_blank" class ="btn btn-sm btn-dark">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }s
}

export default NewsItem
