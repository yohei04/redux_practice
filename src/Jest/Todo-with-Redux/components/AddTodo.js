import React, { useState, useSelector, useDispatch } from 'react';
import { addTodo } from '../redux/todoActions';
import { connect } from 'react-redux';

const AddTodo = ({ todos, addTodo }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(value);
    setValue('');
    // document.querySelector('input').focus();
  };

  // console.log(todos)
  return (
    <div data-testid="addTodo">
      <form onClick={handleSubmit}>
        <input
          // autoFocus
          type="text"
          placeholder="add todo..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button>Add Todo</button>
        <ul>
          {todos.map((todo) =>
            todo.text !== '' ? <li key={todo.id}>{todo.text}</li> : ''
          )}
        </ul>
      </form>
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
