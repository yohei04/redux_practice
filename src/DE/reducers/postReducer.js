import {
  GET_POSTS_REQUEST,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAILURE,
} from "../actions/postAction";

const initialState = {
  isFetching: false,
  items: [],
};

const posts = (state = [initialState], action) => {
  switch (action.type) {
    case GET_POSTS_REQUEST:
      return [
        ...state,
        {
          isFetching: true,
          items: [],
        },
      ];
    case GET_POSTS_SUCCESS:
      return [
        ...state,
        {
          isFetching: false,
          items: action.posts,
          // lastUpdate: action.receivedAt,
        },
      ];
    case GET_POSTS_FAILURE:
      return [
        ...state,
        {
          isFetching: false,
          error: action.error,
        },
      ];
    default:
      return state;
  }
};

export default posts

