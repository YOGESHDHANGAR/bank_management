import {
  GET_ALL_ROLES_REQUEST,
  GET_ALL_ROLES_SUCCESS,
  GET_ALL_ROLES_FAILURE,
  GET_ROLE_BY_ID_REQUEST,
  GET_ROLE_BY_ID_SUCCESS,
  GET_ROLE_BY_ID_FAILURE,
  CREATE_ROLE_REQUEST,
  CREATE_ROLE_SUCCESS,
  CREATE_ROLE_FAILURE,
  UPDATE_ROLE_REQUEST,
  UPDATE_ROLE_SUCCESS,
  UPDATE_ROLE_FAILURE,
  DELETE_ROLE_REQUEST,
  DELETE_ROLE_SUCCESS,
  DELETE_ROLE_FAILURE,
} from "../constants/roleConstants";

const initialState = {
  roles: [],
  loading: false,
  error: null,
};

const roleReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_ROLES_REQUEST:
    case GET_ROLE_BY_ID_REQUEST:
    case CREATE_ROLE_REQUEST:
    case UPDATE_ROLE_REQUEST:
    case DELETE_ROLE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_ALL_ROLES_SUCCESS:
      return {
        ...state,
        roles: action.payload,
        loading: false,
        error: null,
      };
    case GET_ROLE_BY_ID_SUCCESS:
    case CREATE_ROLE_SUCCESS:
    case UPDATE_ROLE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
      };
    case DELETE_ROLE_SUCCESS:
      return {
        ...state,
        roles: state.roles.filter((role) => role.id !== action.payload),
        loading: false,
        error: null,
      };
    case GET_ALL_ROLES_FAILURE:
    case GET_ROLE_BY_ID_FAILURE:
    case CREATE_ROLE_FAILURE:
    case UPDATE_ROLE_FAILURE:
    case DELETE_ROLE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default roleReducer;
