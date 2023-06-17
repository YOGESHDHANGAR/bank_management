import axios from "axios";
import {
  FETCH_CURRENCIES_REQUEST,
  FETCH_CURRENCIES_SUCCESS,
  FETCH_CURRENCIES_FAILURE,
  GET_CURRENCY_DETAILS_REQUEST,
  GET_CURRENCY_DETAILS_SUCCESS,
  GET_CURRENCY_DETAILS_FAILURE,
  CREATE_CURRENCY_REQUEST,
  CREATE_CURRENCY_SUCCESS,
  CREATE_CURRENCY_FAILURE,
  UPDATE_CURRENCY_REQUEST,
  UPDATE_CURRENCY_SUCCESS,
  UPDATE_CURRENCY_FAILURE,
  DELETE_CURRENCY_REQUEST,
  DELETE_CURRENCY_SUCCESS,
  DELETE_CURRENCY_FAILURE,
} from "../constants/currencyConstants";

const initialState = {
  currencies: [],
  currency: null,
  loading: false,
  error: null,
};

const currencyReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CURRENCIES_REQUEST:
    case GET_CURRENCY_DETAILS_REQUEST:
    case CREATE_CURRENCY_REQUEST:
    case UPDATE_CURRENCY_REQUEST:
    case DELETE_CURRENCY_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_CURRENCIES_SUCCESS:
      return {
        ...state,
        currencies: action.payload,
        loading: false,
        error: null,
      };
    case GET_CURRENCY_DETAILS_SUCCESS:
      return {
        ...state,
        currency: action.payload,
        loading: false,
        error: null,
      };
    case CREATE_CURRENCY_SUCCESS:
      return {
        ...state,
        currencies: [...state.currencies, action.payload],
        loading: false,
        error: null,
      };
    case UPDATE_CURRENCY_SUCCESS:
      return {
        ...state,
        currencies: state.currencies.map((currency) =>
          currency.id === action.payload.id ? action.payload : currency
        ),
        loading: false,
        error: null,
      };
    case DELETE_CURRENCY_SUCCESS:
      return {
        ...state,
        currencies: state.currencies.filter(
          (currency) => currency.id !== action.payload
        ),
        loading: false,
        error: null,
      };
    case FETCH_CURRENCIES_FAILURE:
    case GET_CURRENCY_DETAILS_FAILURE:
    case CREATE_CURRENCY_FAILURE:
    case UPDATE_CURRENCY_FAILURE:
    case DELETE_CURRENCY_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default currencyReducer;
