import React, { useState } from 'react';
import './Todo.scss';

const initialState = [
  {
    id: 1,
    text: 'first text',
    completed: false,
  },
  {
    id: 2,
    text: 'second text',
    completed: false,
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
      setTodos([...todos, { id: todoId + 1, text: query, completed: false }]);
      setQuery('');
    } else {
      return;
    }
    console.log(todos);
  };

  const toggleCompleted = (todoId) => {
    setTodos(
      todos.map((todo) =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      )
    );
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
            <li
              key={todo.id}
              style={{
                textDecoration: todo.completed ? 'line-through' : '',
              }}
              onClick={() => toggleCompleted(todo.id)}
            >
              {todo.text}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Todo;
