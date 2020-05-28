import React from "react";
import { Provider } from "react-redux";
// import Posts from "./components/Posts";
// import PostForm from "./components/PostForm";
// import store from './store'

import { useSelector, useDispatch } from "react-redux";
import {increment, decrement} from './DE/actions'

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>

      {isLogged ? <h3>Valuable I shouldn't see</h3> : ''}
    </div>
  );
}

export default App;
