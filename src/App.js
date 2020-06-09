import React from 'react';
// import CakeContainer from './Codevolution/components/CakeContainer';
import { Provider } from 'react-redux';
// import Posts from "./components/Posts";
// import PostForm from "./components/PostForm";
import store from './Codevolution/redux/store';
// import HooksCakeContainer from "./Codevolution/components/HooksCakeContainer";
// import IceCreamContainer from "./Codevolution/components/IceCreamContainer";
// import NewCakeContainer from "./Codevolution/components/NewCakeContainer";
// import ItemContainer from "./Codevolution/components/ItemContainer";
// import UserContainer from "./Codevolution/components/UserContainer";
// import PostContainer from "./Codevolution/components/PostContainer";
// import SnackContainer from "./Codevolution/components/SnackContainer";
// import AddTodo from "./Codevolution/components/todo/AddTodo";
// import TodoList from './Codevolution/components/todo/TodoList';
// import Color from "./DE/components/Color";
// import Posts from "./DE/components/PostList";
// import Header from './Jest/components/Header/Header';
// import Button from './Jest/components/Button/Button';
import Clickers from './Jest/components/Clickers/Clickers';

// import { useSelector, useDispatch } from "react-redux";
// import { increment, decrement, multiplication } from "./DE/actions";

function App() {
  // const counter = useSelector((state) => state.counter);
  // const isLogged = useSelector((state) => state.isLogged);
  // const dispatch = useDispatch();

  return (
    <Provider store={store}>
      <div className="App">
        <Clickers />
        {/* <AddTodo />
        <TodoList /> */}
        {/* <UserContainer />
        <PostContainer />
        <SnackContainer />
        <ItemContainer cake />
        <ItemContainer />
        <HooksCakeContainer />
        <CakeContainer />
        <IceCreamContainer />
        <NewCakeContainer /> */}
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
