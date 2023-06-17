import {
  GET_ALL_TRANSACTIONS_REQUEST,
  GET_ALL_TRANSACTIONS_SUCCESS,
  GET_ALL_TRANSACTIONS_FAILURE,
  GET_TRANSACTION_BY_ID_REQUEST,
  GET_TRANSACTION_BY_ID_SUCCESS,
  GET_TRANSACTION_BY_ID_FAILURE,
  CREATE_TRANSACTION_REQUEST,
  CREATE_TRANSACTION_SUCCESS,
  CREATE_TRANSACTION_FAILURE,
  UPDATE_TRANSACTION_REQUEST,
  UPDATE_TRANSACTION_SUCCESS,
  UPDATE_TRANSACTION_FAILURE,
  DELETE_TRANSACTION_REQUEST,
  DELETE_TRANSACTION_SUCCESS,
  DELETE_TRANSACTION_FAILURE,
} from "../constants/transactionConstants";

const initialState = {
  transactions: [],
  loading: false,
  error: null,
};

const transactionReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_TRANSACTIONS_REQUEST:
    case GET_TRANSACTION_BY_ID_REQUEST:
    case CREATE_TRANSACTION_REQUEST:
    case UPDATE_TRANSACTION_REQUEST:
    case DELETE_TRANSACTION_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_ALL_TRANSACTIONS_SUCCESS:
      return {
        ...state,
        transactions: action.payload,
        loading: false,
        error: null,
      };
    case GET_TRANSACTION_BY_ID_SUCCESS:
    case CREATE_TRANSACTION_SUCCESS:
    case UPDATE_TRANSACTION_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
      };
    case DELETE_TRANSACTION_SUCCESS:
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        ),
        loading: false,
        error: null,
      };
    case GET_ALL_TRANSACTIONS_FAILURE:
    case GET_TRANSACTION_BY_ID_FAILURE:
    case CREATE_TRANSACTION_FAILURE:
    case UPDATE_TRANSACTION_FAILURE:
    case DELETE_TRANSACTION_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default transactionReducer;
