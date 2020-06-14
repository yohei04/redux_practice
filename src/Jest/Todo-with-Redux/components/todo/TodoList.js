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
      <h2>Todo List</h2>
      <ul style={{ userSelect: 'none' }}>
        {todos &&
          todos.todo &&
          todos.todo.sort(function (a, b) {
            if (a.id > b.id) {
              return -1;
            }
            if (a.id < b.id) {
              return 1;
            }
            return 0;
          }) &&
          todos.todo.map((todo) => (
            <div
              key={todo.id}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: '1.4rem',
              }}
            >
              <input
                id={`checkbox-${todo.id}`}
                type="checkbox"
                onClick={() => dispatch(toggleTodo(todo.id))}
                checked={todo.completed}
              />
              <label
                htmlFor={`checkbox-${todo.id}`}
                data-testid={`checkbox-${todo.id}`}
                style={{
                  textDecoration: todo.completed ? 'line-through' : 'none',
                }}
              >
                {todo.title}
              </label>
              <button
                style={{ background: 'tomato', marginLeft: '.4rem' }}
                onClick={() => dispatch(deleteTodo(todo.id))}
              >
                x
              </button>
            </div>
          ))}
      </ul>
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
