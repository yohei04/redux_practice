const colorReducer = (state = 'blue', action) => {
  switch (action.type) {
    case "CHANGE_COLOR":
      return 'red';
    default:
      return state;
  }
};

export default colorReducer;
