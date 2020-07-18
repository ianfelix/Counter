import React, { useState } from 'react';
import { FaPlus, FaMinus, FaRedo, FaReact } from 'react-icons/fa';
import './style.css';

function App() {
  const [click, setClick] = useState(0);

  const handleClickUp = () => {
    setClick(click + 1);
  };
  const handleClickDown = () => {
    setClick(click - 1);
  };

  const handleClickReset = () => {
    setClick(0);
  };

  return (
    <div className="App">
      <div className="container">
        <FaReact className="react" />
        <h1>Contador</h1>
        <span className="count">{click}</span>
        <button className="up" onClick={handleClickUp}>
          <FaPlus />
        </button>
        <button className="down" onClick={handleClickDown}>
          <FaMinus />
        </button>
        <button className="reset" onClick={handleClickReset}>
          <FaRedo />
        </button>
      </div>
    </div>
  );
}

export default App;
