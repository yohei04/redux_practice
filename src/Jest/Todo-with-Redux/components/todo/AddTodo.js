import React, { useState } from 'react';
import { addTodo } from '../../redux/todoActions';
import { useDispatch } from 'react-redux';

const AddTodo = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value) {
      dispatch(addTodo(value));
      setValue('');
    } 
    // document.querySelector('input').focus();
  };

  // console.log(todos)
  return (
    <div data-testid="addTodo">
      <form>
        <input
          autoFocus
          type="text"
          placeholder="add todo..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={handleSubmit}>Add Todo</button>
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
