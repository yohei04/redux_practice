import React from 'react';
import { useSelector } from 'react-redux';

const TodoList = () => {
  const todos = useSelector((state) => state.todo);

  return (
    <ul>
      {todos.length == 0 ? (
        <div>No Todos now</div>
      ) : (
        todos.map((todo) => <li key={todo.id}>{todo.text}</li>)
      )}
    </ul>
  );
};

export default TodoList;
