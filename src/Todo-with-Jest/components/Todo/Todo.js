import React from 'react';

const initialState = [
  {
  id: 1, text: 'first text'
  },
  {
  id: 2, text: 'second text'
  },
]

const Todo = () => {
  


  return (
    <>
      <div className="addTodo" data-testid="addTodo">
        <input type="text" />
        <button>addTodo</button>
      </div>
      <div className="todoList" data-testid="todoList">
        <ul>
          {initialState.map((todo) => (
            <li key={todo.id}>{todo.text}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Todo;
