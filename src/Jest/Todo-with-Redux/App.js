import React from 'react';

import { Provider } from 'react-redux';
import store from './store';
import Todo from './components/todo/Todo';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Todo />
      </div>
    </Provider>
  );
};

export default App;
