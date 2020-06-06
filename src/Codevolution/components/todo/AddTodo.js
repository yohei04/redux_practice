import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../redux';

const AddTodo = (props) => {
  const [value, setValue] = useState('');

  const handleSubmit = () => {
    props.addTodo(value);
    setValue('');
  };

  return (
    <div>
      <form>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="button" onClick={handleSubmit}>
          add todo
        </button>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (text) => dispatch(addTodo(text)),
  };
};

export default connect(null, mapDispatchToProps)(AddTodo);
