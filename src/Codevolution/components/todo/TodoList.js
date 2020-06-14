import React from 'react';
import { connect } from 'react-redux';
import { toggleTodo, deleteTodo } from '../../redux';

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  // console.log(todos);

  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <div className="todo-item" key={todo.id} style={{ fontSize: '2rem' }}>
          <input
            id={`completed-${todo.id}`}
            type="checkbox"
            defaultChecked={todo.completed}
            onClick={() => toggleTodo(todo.id)}
          />
          <label
            htmlFor={`completed-${todo.id}`}
            style={{ textDecoration: todo.completed ? 'line-through' : '' }}
          >
            {todo.text}
          </label>
          <button
            style={{ background: 'tomato', marginLeft: '.4rem' }}
            onClick={() => deleteTodo(todo.id)}
          >
            X
          </button>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    todos: state.todo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // toggleTodo: (id) => console.log(dispatch(toggleTodo(id))),
    // deleteTodo: (id) => console.log(dispatch(deleteTodo(id))),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
