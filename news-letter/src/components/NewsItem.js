import React from "react"
import "./NewsItem.css"
const NewsItem = ({title,url,content,desc,author,urlToImage}) => {
    return (
        <div className="news-item">
            <div className="img-container">
            <img src={urlToImage} alt={title}/>
            </div>
            <div className="content-container">
            <a href={url} target="blank">
            <h1>{title}</h1>
            </a>
            <p className="desc">{desc}</p>
            {/* <a href={url} target="blank"><p>{content}</p> </a> */}
            <a href={url}><button>READ MORE</button></a>
            <p className="author">&#10148; {author}</p>
            </div>
        </div>
    )
}
export default NewsItem