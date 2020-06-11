import React from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import { Provider } from 'react-redux';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <AddTodo />
        <TodoList />
      </div>
    </Provider>
  );
};

export default App;
