import React, { useState, useSelector, useDispatch } from 'react';
import { addTodo } from '../redux/todoActions';
import { connect } from 'react-redux';

const AddTodo = ({ todos, addTodo }) => {
  const [value, setValue] = useState('');
  const handleSubmit = () => {
    addTodo(value);
  };

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={handleSubmit}>add Todo</button>
      {todos.map((todo) => {
        return <li>{todo.text}</li>;
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { todos: state.todo };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (text) => dispatch(addTodo(text)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
