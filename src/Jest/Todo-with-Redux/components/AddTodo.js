import React, { useState, useSelector, useDispatch } from 'react';
import { addTodo } from '../redux/todoActions';
import { connect } from 'react-redux';

const AddTodo = ({ todos, addTodo }) => {
  const [value, setValue] = useState('');
  const handleSubmit = () => {
    addTodo(value);
  };

  // console.log(todos)
  return (
    <div data-testid="addTodo">
      <input
        type="text"
        placeholder="add todo..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={handleSubmit}>Add Todo</button>
      {todos.map((todo) => {
        return <li key={todo.id}>{todo.text}</li>;
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
