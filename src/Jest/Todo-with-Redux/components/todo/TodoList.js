import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo } from '../../redux/todoActions';

const TodoList = () => {
  const todos = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  return (
    <ul style={{userSelect: 'none'}}>
      {todos.length === 0 ? (
        <p>No Todos now</p>
      ) : (
        todos.map((todo) => (
          <div
            key={todo.id}
            style={{
              display: 'flex',
              
              alignItems: 'center',
              fontSize: '2rem',
            }}
          >
            <input
              id={`checkbox-${todo.id}`}
              type="checkbox"
              onClick={() => dispatch(toggleTodo(todo.id))}
            />
            <label
              htmlFor={`checkbox-${todo.id}`}
              style={{
                textDecoration: todo.isCompleted ? 'line-through' : 'none',
              }}
            >
              {todo.text}
            </label>
            <button
              style={{ background: 'tomato', marginLeft: '.4rem' }}
              onClick={() => dispatch(deleteTodo(todo.id))}
            >
              x
            </button>
          </div>
        ))
      )}
    </ul>
  );
};

export default TodoList;
