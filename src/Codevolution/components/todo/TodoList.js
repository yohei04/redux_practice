import React from 'react';
import { connect } from 'react-redux';
import { toggleTodo } from '../../redux';

const TodoList = ({ todos, toggleTodo }) => {
  console.log(todos);

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id} style={{ fontSize: '2rem' }}>
          <input
            id={`completed-${todo.id}`}
            type="checkbox"
            defaultChecked={todo.completed}
            onClick={() => toggleTodo(todo.id)}
          />
          <label
            for={`completed-${todo.id}`}
            style={{ textDecoration: todo.completed ? 'line-through' : '' }}
          >
            {todo.text}
          </label>
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
    toggleTodo: (id) => console.log(dispatch(toggleTodo(id))),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
