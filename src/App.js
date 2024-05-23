import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Collection from './pages/Сollection/Сollection';
import Counter from './pages/Counter/Counter';
import CurrencyConverter from './pages/CurrencyConverter/CurrencyConverter';
import GuestList from './pages/GuestList/GuestList';
import Modal from './pages/Modal/Modal';
import Quiz from './pages/Quiz/Quiz';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/currency-converter" element={<CurrencyConverter />} />
        <Route path="/guest-list" element={<GuestList />} />
        <Route path="/modal" element={<Modal />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </Router>
  );
}



export default App;
