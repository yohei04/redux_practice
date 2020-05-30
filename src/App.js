import React from "react";
import CakeContainer from "./Codevolution/components/CakeContainer";
import { Provider } from "react-redux";
// import Posts from "./components/Posts";
// import PostForm from "./components/PostForm";
import store from "./Codevolution/redux/store";
// import Color from "./DE/components/Color";
// import Posts from "./DE/components/PostList";

// import { useSelector, useDispatch } from "react-redux";
// import { increment, decrement, multiplication } from "./DE/actions";

function App() {
  // const counter = useSelector((state) => state.counter);
  // const isLogged = useSelector((state) => state.isLogged);
  // const dispatch = useDispatch();

  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
      </div>
    </Provider>

    // <div className="App">
    //   <Color />
    //   <h1>Counter {counter}</h1>
    //   <button onClick={() => dispatch(increment(5))}>+</button>
    //   <button onClick={() => dispatch(decrement())}>-</button>
    //   <button onClick={() => dispatch(multiplication(2))}>x</button>
    //   {isLogged ? <h3>Valuable I shouldn't see</h3> : ""}

    //   <Posts />
    // </div>
  );
}

export default App;
