// src/components/BackButton.js
import React from 'react';
import { Link } from 'react-router-dom';

const BackButton = () => {
  return (
    <Link to="/" className="back-button">
      Back
    </Link>
  );
};

export default BackButton;
