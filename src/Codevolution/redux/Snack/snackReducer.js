import { BUY_SNACK } from "./snackTypes";

const initialState = {
  numOfSnacks: 30,
};

const snackReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_SNACK:
      return {
        ...state,
        numOfSnacks: state.numOfSnacks - action.payload,
      };

    default:
      return state;
  }
};

export default snackReducer;
