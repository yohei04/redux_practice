import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo, fetchTodos } from '../../redux/todoActions';

const TodoList = () => {
  const todos = useSelector((state) => state.todo);
  // const todosData = useSelector((state) => state.todo)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  console.log(todos);

  // return (

  return todos.loading ? (
    <h2>Loading</h2>
  ) : todos.error ? (
    <h2>{todos.error} </h2>
  ) : (
    <div>
      <h2>User List</h2>
      <div>
        {todos &&
          todos.todo &&
          todos.todo.map((todo) => (
            <p
              key={todo.id}
              onClick={() => dispatch(toggleTodo(todo.id))}
              style={{
                textDecoration: todo.completed ? 'line-through' : 'none',
              }}
            >
              {todo.title}
            </p>
          ))}
      </div>
    </div>
  );

  // <ul style={{ userSelect: 'none' }}>
  //   {todos.length === 0 ? (
  //     <h2>No Todos now</h2>
  //   ) : (
  //     todos.map((todo) => (
  //       <div
  //         key={todo.id}
  //         style={{
  //           display: 'flex',
  //           justifyContent: 'center',
  //           alignItems: 'center',
  //           fontSize: '2rem',
  //         }}
  //       >
  //         <input
  //           id={`checkbox-${todo.id}`}
  //           type="checkbox"
  //           onClick={() => dispatch(toggleTodo(todo.id))}
  //         />
  //         <label
  //           htmlFor={`checkbox-${todo.id}`}
  //           data-testid={`checkbox-${todo.id}`}
  //           style={{
  //             textDecoration: todo.completed ? 'line-through' : 'none',
  //           }}
  //         >
  //           {todo.title}
  //         </label>
  //         <button
  //           style={{ background: 'tomato', marginLeft: '.4rem' }}
  //           onClick={() => dispatch(deleteTodo(todo.id))}
  //         >
  //           x
  //         </button>
  //       </div>
  //     ))
  //   )}
  // </ul>
  // )
};

export default TodoList;
