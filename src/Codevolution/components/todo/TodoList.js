import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../redux';

const TodoList = (props) => {
  console.log(props)
  return (
    <div>
      {props.todos.map((todo) => (
        <h1>・{todo.text}</h1>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    todos: state.todo,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addTodo: () => dispatch(addTodo('aaaa')),
//   };
// };

export default connect(mapStateToProps, null)(TodoList);
