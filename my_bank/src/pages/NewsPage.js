// NewsPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import BackButton from '../components/BackButton';

const NewsPage = () => {
  // Mock news data
  const news = [
    { id: 1, title: 'News 1', content: 'Content of News 1' },
    { id: 2, title: 'News 2', content: 'Content of News 2' },
    { id: 3, title: 'News 3', content: 'Content of News 3' },
    // ... more news articles
  ];

  return (
    <div className="page">
      <h2>News</h2>
      {news.map((article) => (
        <Link key={article.id} to={`/news/${article.id}`} className="news-article">
          {article.title}
        </Link>
      ))}
      <Link to="/" className="back-button">
        Back
      </Link>
    </div>
  );
};

export default NewsPage;
