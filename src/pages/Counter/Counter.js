import React, { useState } from 'react';
import BackToHomeButton from "../../BackToHomeButton";
import './Counter.scss';

const Counter = () => {
    const [count, setCount] = useState(0);
    
    const onClickPlus = () => {
        setCount(count + 1);
    };
    
    const onClickMinus = () => {
        setCount(count - 1);
    };
    
    return (
        <div className="collection-container">
            <div className="header">
                <h1>Страница Collection</h1>
                <BackToHomeButton />
            </div>
            <div className="App">
                <div className="counter">
                    <h2>Счетчик:</h2>
                    <h1>{count}</h1>
                    <button onClick={onClickMinus} className="minus">- Минус</button>
                    <button onClick={onClickPlus} className="plus">Плюс +</button>
                </div>
            </div>
        </div>
    );
}

export default Counter;
