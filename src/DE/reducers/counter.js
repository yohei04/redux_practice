const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + action.payload
    case 'DECREMENT':
      return state - 1
    case 'MULTIPLICATION':
      return state * action.payload
    default:
      return state;
  }
}

export default counterReducer;
