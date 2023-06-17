import axios from "axios";
import {
  GET_ALL_LOANS_REQUEST,
  GET_ALL_LOANS_SUCCESS,
  GET_ALL_LOANS_FAILURE,
  GET_LOAN_BY_CUSTOMER_ID_REQUEST,
  GET_LOAN_BY_CUSTOMER_ID_SUCCESS,
  GET_LOAN_BY_CUSTOMER_ID_FAILURE,
  CREATE_LOAN_REQUEST,
  CREATE_LOAN_SUCCESS,
  CREATE_LOAN_FAILURE,
  UPDATE_LOAN_REQUEST,
  UPDATE_LOAN_SUCCESS,
  UPDATE_LOAN_FAILURE,
  DELETE_LOAN_REQUEST,
  DELETE_LOAN_SUCCESS,
  DELETE_LOAN_FAILURE,
} from "../constants/loanConstants";

const initialState = {
  loans: [],
  loan: null,
  loading: false,
  error: null,
};

const loanReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_LOANS_REQUEST:
    case GET_LOAN_BY_CUSTOMER_ID_REQUEST:
    case CREATE_LOAN_REQUEST:
    case UPDATE_LOAN_REQUEST:
    case DELETE_LOAN_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_ALL_LOANS_SUCCESS:
      return {
        ...state,
        loans: action.payload,
        loading: false,
        error: null,
      };
    case GET_LOAN_BY_CUSTOMER_ID_SUCCESS:
      return {
        ...state,
        loan: action.payload,
        loading: false,
        error: null,
      };
    case CREATE_LOAN_SUCCESS:
      return {
        ...state,
        loans: [...state.loans, action.payload],
        loading: false,
        error: null,
      };
    case UPDATE_LOAN_SUCCESS:
      return {
        ...state,
        loans: state.loans.map((loan) =>
          loan.id === action.payload.id ? action.payload : loan
        ),
        loading: false,
        error: null,
      };
    case DELETE_LOAN_SUCCESS:
      return {
        ...state,
        loans: state.loans.filter((loan) => loan.id !== action.payload),
        loading: false,
        error: null,
      };
    case GET_ALL_LOANS_FAILURE:
    case GET_LOAN_BY_CUSTOMER_ID_FAILURE:
    case CREATE_LOAN_FAILURE:
    case UPDATE_LOAN_FAILURE:
    case DELETE_LOAN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default loanReducer;
