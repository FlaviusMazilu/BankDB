// src/components/NewsBox.js
import React from 'react';
import { Link } from 'react-router-dom';

const NewsBox = () => {
  const news = [
    { id: 1, title: 'News 1' },
    { id: 2, title: 'News 2' },
    { id: 3, title: 'News 3' },
  ];

  return (
    <div className="news-box">
      <h2>News</h2>
      {news.map((article) => (
        <Link key={article.id} to={`/news/${article.id}`} className="news-article">
          {article.title}
        </Link>
      ))}
    </div>
  );
};

export default NewsBox;
