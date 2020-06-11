import React, { useState } from 'react';

const initialState = [
  {
    id: 1,
    text: 'first text',
  },
  {
    id: 2,
    text: 'second text',
  },
];

let todoId = 3;
const Todo = () => {
  const [query, setQuery] = useState('');
  const [todos, setTodos] = useState(initialState);

  const updateQuery = (e) => {
    setQuery(e.target.value);
  };

  const updateTodo = () => {
    if (query) {
      setTodos([...todos, { id: todoId + 1, text: query }]);
      setQuery('');
    } else {
      return
    }
    console.log(todos);
  };

  return (
    <>
      <div className="addTodo" data-testid="addTodo">
        <input
          type="text"
          placeholder="add todo..."
          value={query}
          onChange={updateQuery}
        />
        <button onClick={updateTodo}>addTodo</button>
      </div>
      <div className="todoList" data-testid="todoList">
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>{todo.text}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Todo;
