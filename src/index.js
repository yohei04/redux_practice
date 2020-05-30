import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
// import { createStore, applyMiddleware } from "redux";
// import allReducers from "./DE/reducers";
// import { Provider } from "react-redux";
// import { getPosts } from './DE/actions/postAction'
// import thunk from "redux-thunk";
// import logger from "redux-logger";

// const store = createStore(
//   allReducers,
//   applyMiddleware(thunk, logger),
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

// store.dispatch(getPosts());

ReactDOM.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
      <App />
    {/* </Provider> */}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
