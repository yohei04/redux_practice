import React, { useState } from 'react';
import { addTodo } from '../redux/todoActions';
import { connect, useSelector, useDispatch } from 'react-redux';

const AddTodo = () => {
  const [value, setValue] = useState('');
  const todos = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(value));
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

// const mapStateToProps = (state) => {
//   return { todos: state.todo };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addTodo: (text) => dispatch(addTodo(text)),
//   };
// };

export default AddTodo;
