import React, {useState} from 'react'

const Button = () => {
  const[count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    setCount(count - 1)
  }

  return (
    <div className="button-section" data-testid="count">
      <button onClick={increment}>+</button>
      <span>{count}</span>
      <button onClick={decrement} >-</button>
    </div>
  );
}

export default Button

