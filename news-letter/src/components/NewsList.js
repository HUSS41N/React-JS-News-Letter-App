import React from "react";
import NewsItem from "./NewsItem";
import "./NewsItem.css";
import "./NewsList.css";
const NewsList = ({ news }) => {
    const allNewsList = news.map((newslist, index) => {
        let news_content = news[index];
        return (
            <NewsItem
                title={news_content.title}
                content={news_content.content}
                url={news_content.url}
                key={index}
                desc={news_content.description}
                author={news_content.author}
                urlToImage={news_content.urlToImage}
            />
        );
    });
    return <div>{allNewsList}</div>;
};
export default NewsList;
