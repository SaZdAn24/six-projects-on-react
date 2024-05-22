// src/BackToHomeButton.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BackToHomeButton.css';

const BackToHomeButton = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/');
  };

  return (
    <button className="back-to-home-button" onClick={goToHome}>
      На главную
    </button>
  );
}

export default BackToHomeButton;
