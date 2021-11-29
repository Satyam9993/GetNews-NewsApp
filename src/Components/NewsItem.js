import React, { Component } from 'react'

export class NewsItem extends Component {

    constructor(){
        super();
        console.log("Hello");
        this.state = {
            
        }
    }

    render() {
        let {title, description, imageurl, readmoreurl} = this.props;
        return (
            <div>
                <div className="container">
                    <div className="card" style={{width:"18rem"}}>
                        <img src={imageurl} className="card-img-top" alt="error"/>
                        <div class ="card-body">
                        <h5 class ="card-title">{title}</h5>
                        <p class ="card-text">{description}</p>
                        <a href={readmoreurl} class ="btn btn-sm btn-primary">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }s
}

export default NewsItem
