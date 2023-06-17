import axios from "axios";
import {
  FETCH_CASH_TRANSACTIONS_REQUEST,
  FETCH_CASH_TRANSACTIONS_SUCCESS,
  FETCH_CASH_TRANSACTIONS_FAILURE,
  GET_CASH_TRANSACTION_DETAILS_REQUEST,
  GET_CASH_TRANSACTION_DETAILS_SUCCESS,
  GET_CASH_TRANSACTION_DETAILS_FAILURE,
  CREATE_CASH_TRANSACTION_REQUEST,
  CREATE_CASH_TRANSACTION_SUCCESS,
  CREATE_CASH_TRANSACTION_FAILURE,
  UPDATE_CASH_TRANSACTION_REQUEST,
  UPDATE_CASH_TRANSACTION_SUCCESS,
  UPDATE_CASH_TRANSACTION_FAILURE,
  DELETE_CASH_TRANSACTION_REQUEST,
  DELETE_CASH_TRANSACTION_SUCCESS,
  DELETE_CASH_TRANSACTION_FAILURE,
} from "../constants/cashTransactionConstants";

const initialState = {
  cashTransactions: [],
  cashTransaction: null,
  loading: false,
  error: null,
};

const cashTransactionReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CASH_TRANSACTIONS_REQUEST:
    case GET_CASH_TRANSACTION_DETAILS_REQUEST:
    case CREATE_CASH_TRANSACTION_REQUEST:
    case UPDATE_CASH_TRANSACTION_REQUEST:
    case DELETE_CASH_TRANSACTION_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_CASH_TRANSACTIONS_SUCCESS:
      return {
        ...state,
        cashTransactions: action.payload,
        loading: false,
        error: null,
      };
    case GET_CASH_TRANSACTION_DETAILS_SUCCESS:
      return {
        ...state,
        cashTransaction: action.payload,
        loading: false,
        error: null,
      };
    case CREATE_CASH_TRANSACTION_SUCCESS:
      return {
        ...state,
        cashTransactions: [...state.cashTransactions, action.payload],
        loading: false,
        error: null,
      };
    case UPDATE_CASH_TRANSACTION_SUCCESS:
      return {
        ...state,
        cashTransactions: state.cashTransactions.map((cashTransaction) =>
          cashTransaction.id === action.payload.id
            ? action.payload
            : cashTransaction
        ),
        loading: false,
        error: null,
      };
    case DELETE_CASH_TRANSACTION_SUCCESS:
      return {
        ...state,
        cashTransactions: state.cashTransactions.filter(
          (cashTransaction) => cashTransaction.id !== action.payload
        ),
        loading: false,
        error: null,
      };
    case FETCH_CASH_TRANSACTIONS_FAILURE:
    case GET_CASH_TRANSACTION_DETAILS_FAILURE:
    case CREATE_CASH_TRANSACTION_FAILURE:
    case UPDATE_CASH_TRANSACTION_FAILURE:
    case DELETE_CASH_TRANSACTION_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default cashTransactionReducer;
