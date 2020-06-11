import React, { useState } from 'react';

const Clickers = () => {
  const [count, setCount] = useState(0);

  const increase = () => setCount(count + 1);
  const decrease = () => {
    setTimeout(() => {
      setCount(count - 1);
    }, 250);
  };

  const twoIncrese = () => {
    setTimeout(() => {
      setCount(count + 2)
    }, 250)
  }

  return (
    <div>
      <button onClick={increase}>Up</button>
      <button onClick={twoIncrese}>TwoUp</button>
      <button onClick={decrease}>Down</button>
      <div data-testid="count">{count}</div>
    </div>
  );
};

export default Clickers;
