import axios from "axios";
import {
  CREATE_ACCOUNT_TYPE_REQUEST,
  CREATE_ACCOUNT_TYPE_SUCCESS,
  CREATE_ACCOUNT_TYPE_FAILURE,
  FETCH_ACCOUNT_TYPES_REQUEST,
  FETCH_ACCOUNT_TYPES_SUCCESS,
  FETCH_ACCOUNT_TYPES_FAILURE,
  GET_ACCOUNT_TYPE_DETAILS_REQUEST,
  GET_ACCOUNT_TYPE_DETAILS_SUCCESS,
  GET_ACCOUNT_TYPE_DETAILS_FAILURE,
  UPDATE_ACCOUNT_TYPE_REQUEST,
  UPDATE_ACCOUNT_TYPE_SUCCESS,
  UPDATE_ACCOUNT_TYPE_FAILURE,
  DELETE_ACCOUNT_TYPE_REQUEST,
  DELETE_ACCOUNT_TYPE_SUCCESS,
  DELETE_ACCOUNT_TYPE_FAILURE,
} from "../constants/accountTypeConstants";

const initialState = {
  accountTypes: [],
  accountType: null,
  loading: false,
  error: null,
};

const accountTypeReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ACCOUNT_TYPE_REQUEST:
    case FETCH_ACCOUNT_TYPES_REQUEST:
    case GET_ACCOUNT_TYPE_DETAILS_REQUEST:
    case UPDATE_ACCOUNT_TYPE_REQUEST:
    case DELETE_ACCOUNT_TYPE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case CREATE_ACCOUNT_TYPE_SUCCESS:
      return {
        ...state,
        accountTypes: [...state.accountTypes, action.payload],
        loading: false,
        error: null,
      };
    case FETCH_ACCOUNT_TYPES_SUCCESS:
      return {
        ...state,
        accountTypes: action.payload,
        loading: false,
        error: null,
      };
    case GET_ACCOUNT_TYPE_DETAILS_SUCCESS:
      return {
        ...state,
        accountType: action.payload,
        loading: false,
        error: null,
      };
    case UPDATE_ACCOUNT_TYPE_SUCCESS:
      return {
        ...state,
        accountTypes: state.accountTypes.map((type) =>
          type.id === action.payload.id ? action.payload : type
        ),
        loading: false,
        error: null,
      };
    case DELETE_ACCOUNT_TYPE_SUCCESS:
      return {
        ...state,
        accountTypes: state.accountTypes.filter(
          (type) => type.id !== action.payload
        ),
        loading: false,
        error: null,
      };
    case CREATE_ACCOUNT_TYPE_FAILURE:
    case FETCH_ACCOUNT_TYPES_FAILURE:
    case GET_ACCOUNT_TYPE_DETAILS_FAILURE:
    case UPDATE_ACCOUNT_TYPE_FAILURE:
    case DELETE_ACCOUNT_TYPE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default accountTypeReducer;
