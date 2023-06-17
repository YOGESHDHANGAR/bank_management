import axios from "axios";
import {
  CREATE_ACCOUNT_REQUEST,
  CREATE_ACCOUNT_SUCCESS,
  CREATE_ACCOUNT_FAILURE,
  FETCH_ACCOUNTS_REQUEST,
  FETCH_ACCOUNTS_SUCCESS,
  FETCH_ACCOUNTS_FAILURE,
  GET_ACCOUNT_DETAILS_REQUEST,
  GET_ACCOUNT_DETAILS_SUCCESS,
  GET_ACCOUNT_DETAILS_FAILURE,
  UPDATE_ACCOUNT_BALANCE_REQUEST,
  UPDATE_ACCOUNT_BALANCE_SUCCESS,
  UPDATE_ACCOUNT_BALANCE_FAILURE,
  DELETE_ACCOUNT_REQUEST,
  DELETE_ACCOUNT_SUCCESS,
  DELETE_ACCOUNT_FAILURE,
} from "../constants/accountConstants";

const initialState = {
  accounts: [],
  account: null,
  loading: false,
  error: null,
};

const accountReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ACCOUNT_REQUEST:
    case FETCH_ACCOUNTS_REQUEST:
    case GET_ACCOUNT_DETAILS_REQUEST:
    case UPDATE_ACCOUNT_BALANCE_REQUEST:
    case DELETE_ACCOUNT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case CREATE_ACCOUNT_SUCCESS:
      return {
        ...state,
        accounts: [...state.accounts, action.payload],
        loading: false,
        error: null,
      };
    case FETCH_ACCOUNTS_SUCCESS:
      return {
        ...state,
        accounts: action.payload,
        loading: false,
        error: null,
      };
    case GET_ACCOUNT_DETAILS_SUCCESS:
      return {
        ...state,
        account: action.payload,
        loading: false,
        error: null,
      };
    case UPDATE_ACCOUNT_BALANCE_SUCCESS:
      return {
        ...state,
        accounts: state.accounts.map((acc) =>
          acc.id === action.payload.id ? action.payload : acc
        ),
        loading: false,
        error: null,
      };
    case DELETE_ACCOUNT_SUCCESS:
      return {
        ...state,
        accounts: state.accounts.filter((acc) => acc.id !== action.payload),
        loading: false,
        error: null,
      };
    case CREATE_ACCOUNT_FAILURE:
    case FETCH_ACCOUNTS_FAILURE:
    case GET_ACCOUNT_DETAILS_FAILURE:
    case UPDATE_ACCOUNT_BALANCE_FAILURE:
    case DELETE_ACCOUNT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default accountReducer;
