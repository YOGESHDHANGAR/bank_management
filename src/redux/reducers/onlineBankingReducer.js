import axios from "axios";
import {
  CREATE_ONLINE_BANKING_ACCOUNT_REQUEST,
  CREATE_ONLINE_BANKING_ACCOUNT_SUCCESS,
  CREATE_ONLINE_BANKING_ACCOUNT_FAILURE,
  GET_ONLINE_BANKING_ACCOUNT_BY_CUSTOMER_ID_REQUEST,
  GET_ONLINE_BANKING_ACCOUNT_BY_CUSTOMER_ID_SUCCESS,
  GET_ONLINE_BANKING_ACCOUNT_BY_CUSTOMER_ID_FAILURE,
  UPDATE_ONLINE_BANKING_ACCOUNT_REQUEST,
  UPDATE_ONLINE_BANKING_ACCOUNT_SUCCESS,
  UPDATE_ONLINE_BANKING_ACCOUNT_FAILURE,
  DELETE_ONLINE_BANKING_ACCOUNT_REQUEST,
  DELETE_ONLINE_BANKING_ACCOUNT_SUCCESS,
  DELETE_ONLINE_BANKING_ACCOUNT_FAILURE,
} from "../constants/onlineBankingConstants";

const initialState = {
  onlineBankingAccount: null,
  loading: false,
  error: null,
};

const onlineBankingReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ONLINE_BANKING_ACCOUNT_REQUEST:
    case GET_ONLINE_BANKING_ACCOUNT_BY_CUSTOMER_ID_REQUEST:
    case UPDATE_ONLINE_BANKING_ACCOUNT_REQUEST:
    case DELETE_ONLINE_BANKING_ACCOUNT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case CREATE_ONLINE_BANKING_ACCOUNT_SUCCESS:
    case GET_ONLINE_BANKING_ACCOUNT_BY_CUSTOMER_ID_SUCCESS:
    case UPDATE_ONLINE_BANKING_ACCOUNT_SUCCESS:
      return {
        ...state,
        onlineBankingAccount: action.payload,
        loading: false,
        error: null,
      };
    case DELETE_ONLINE_BANKING_ACCOUNT_SUCCESS:
      return {
        ...state,
        onlineBankingAccount: null,
        loading: false,
        error: null,
      };
    case CREATE_ONLINE_BANKING_ACCOUNT_FAILURE:
    case GET_ONLINE_BANKING_ACCOUNT_BY_CUSTOMER_ID_FAILURE:
    case UPDATE_ONLINE_BANKING_ACCOUNT_FAILURE:
    case DELETE_ONLINE_BANKING_ACCOUNT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default onlineBankingReducer;
