import axios from "axios";
import {
  GET_ALL_INTEREST_RATES_REQUEST,
  GET_ALL_INTEREST_RATES_SUCCESS,
  GET_ALL_INTEREST_RATES_FAILURE,
  GET_INTEREST_RATE_BY_ACCOUNT_TYPE_REQUEST,
  GET_INTEREST_RATE_BY_ACCOUNT_TYPE_SUCCESS,
  GET_INTEREST_RATE_BY_ACCOUNT_TYPE_FAILURE,
  CREATE_INTEREST_RATE_REQUEST,
  CREATE_INTEREST_RATE_SUCCESS,
  CREATE_INTEREST_RATE_FAILURE,
  UPDATE_INTEREST_RATE_REQUEST,
  UPDATE_INTEREST_RATE_SUCCESS,
  UPDATE_INTEREST_RATE_FAILURE,
  DELETE_INTEREST_RATE_REQUEST,
  DELETE_INTEREST_RATE_SUCCESS,
  DELETE_INTEREST_RATE_FAILURE,
} from "../constants/interestRateConstants";

const initialState = {
  interestRates: [],
  interestRate: null,
  loading: false,
  error: null,
};

const interestRateReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_INTEREST_RATES_REQUEST:
    case GET_INTEREST_RATE_BY_ACCOUNT_TYPE_REQUEST:
    case CREATE_INTEREST_RATE_REQUEST:
    case UPDATE_INTEREST_RATE_REQUEST:
    case DELETE_INTEREST_RATE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_ALL_INTEREST_RATES_SUCCESS:
      return {
        ...state,
        interestRates: action.payload,
        loading: false,
        error: null,
      };
    case GET_INTEREST_RATE_BY_ACCOUNT_TYPE_SUCCESS:
      return {
        ...state,
        interestRate: action.payload,
        loading: false,
        error: null,
      };
    case CREATE_INTEREST_RATE_SUCCESS:
      return {
        ...state,
        interestRates: [...state.interestRates, action.payload],
        loading: false,
        error: null,
      };
    case UPDATE_INTEREST_RATE_SUCCESS:
      return {
        ...state,
        interestRates: state.interestRates.map((interestRate) =>
          interestRate.id === action.payload.id ? action.payload : interestRate
        ),
        loading: false,
        error: null,
      };
    case DELETE_INTEREST_RATE_SUCCESS:
      return {
        ...state,
        interestRates: state.interestRates.filter(
          (interestRate) => interestRate.id !== action.payload
        ),
        loading: false,
        error: null,
      };
    case GET_ALL_INTEREST_RATES_FAILURE:
    case GET_INTEREST_RATE_BY_ACCOUNT_TYPE_FAILURE:
    case CREATE_INTEREST_RATE_FAILURE:
    case UPDATE_INTEREST_RATE_FAILURE:
    case DELETE_INTEREST_RATE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default interestRateReducer;
