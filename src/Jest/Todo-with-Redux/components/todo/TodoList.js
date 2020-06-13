import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTodo } from '../../redux/todoActions';

const TodoList = () => {
  const todos = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  // const toggleCompleted = (todoid) =>
  //   todos.map((todo) =>
  //     todo.id === todoid ? { ...todo, isCompleted: !todo.isCompleted } : todo
  //   );

  return (
    <ul>
      {todos.length === 0 ? (
        <p>No Todos now</p>
      ) : (
        todos.map((todo) => (
          <div key={todo.id} style={{ display: 'flex' }}>
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
          </div>
        ))
      )}
    </ul>
  );
};

export default TodoList;
