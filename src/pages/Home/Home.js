import React from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';

const Home = () => {
  return (
    <div className="home">
      <h1>Выберите проект</h1>
      <div className="button-container">
        <Link to="/collection" className="button">Collection</Link>
        <Link to="/counter" className="button">Counter</Link>
        <Link to="/currency-converter" className="button">Currency Converter</Link>
        <Link to="/guest-list" className="button">Guest List</Link>
        <Link to="/modal" className="button">Modal</Link>
        <Link to="/quiz" className="button">Quiz</Link>
      </div>
    </div>
  );
}

export default Home;
