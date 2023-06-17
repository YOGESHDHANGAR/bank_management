import {
  GET_ALL_USERS_REQUEST,
  GET_ALL_USERS_SUCCESS,
  GET_ALL_USERS_FAILURE,
  GET_USER_BY_ID_REQUEST,
  GET_USER_BY_ID_SUCCESS,
  GET_USER_BY_ID_FAILURE,
  CREATE_USER_REQUEST,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAILURE,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAILURE,
} from "../constants/userConstants";

const initialState = {
  users: [],
  loading: false,
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_USERS_REQUEST:
    case GET_USER_BY_ID_REQUEST:
    case CREATE_USER_REQUEST:
    case UPDATE_USER_REQUEST:
    case DELETE_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_ALL_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload,
        loading: false,
        error: null,
      };
    case GET_USER_BY_ID_SUCCESS:
    case CREATE_USER_SUCCESS:
    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
      };
    case DELETE_USER_SUCCESS:
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
        loading: false,
        error: null,
      };
    case GET_ALL_USERS_FAILURE:
    case GET_USER_BY_ID_FAILURE:
    case CREATE_USER_FAILURE:
    case UPDATE_USER_FAILURE:
    case DELETE_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
