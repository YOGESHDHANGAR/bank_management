import axios from "axios";
import {
  FETCH_CUSTOMERS_REQUEST,
  FETCH_CUSTOMERS_SUCCESS,
  FETCH_CUSTOMERS_FAILURE,
  GET_CUSTOMER_DETAILS_REQUEST,
  GET_CUSTOMER_DETAILS_SUCCESS,
  GET_CUSTOMER_DETAILS_FAILURE,
  CREATE_CUSTOMER_REQUEST,
  CREATE_CUSTOMER_SUCCESS,
  CREATE_CUSTOMER_FAILURE,
  UPDATE_CUSTOMER_REQUEST,
  UPDATE_CUSTOMER_SUCCESS,
  UPDATE_CUSTOMER_FAILURE,
  DELETE_CUSTOMER_REQUEST,
  DELETE_CUSTOMER_SUCCESS,
  DELETE_CUSTOMER_FAILURE,
} from "../constants/customerConstants";

const initialState = {
  customers: [],
  customer: null,
  loading: false,
  error: null,
};

const customerReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CUSTOMERS_REQUEST:
    case GET_CUSTOMER_DETAILS_REQUEST:
    case CREATE_CUSTOMER_REQUEST:
    case UPDATE_CUSTOMER_REQUEST:
    case DELETE_CUSTOMER_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_CUSTOMERS_SUCCESS:
      return {
        ...state,
        customers: action.payload,
        loading: false,
        error: null,
      };
    case GET_CUSTOMER_DETAILS_SUCCESS:
      return {
        ...state,
        customer: action.payload,
        loading: false,
        error: null,
      };
    case CREATE_CUSTOMER_SUCCESS:
      return {
        ...state,
        customers: [...state.customers, action.payload],
        loading: false,
        error: null,
      };
    case UPDATE_CUSTOMER_SUCCESS:
      return {
        ...state,
        customers: state.customers.map((customer) =>
          customer.id === action.payload.id ? action.payload : customer
        ),
        loading: false,
        error: null,
      };
    case DELETE_CUSTOMER_SUCCESS:
      return {
        ...state,
        customers: state.customers.filter(
          (customer) => customer.id !== action.payload
        ),
        loading: false,
        error: null,
      };
    case FETCH_CUSTOMERS_FAILURE:
    case GET_CUSTOMER_DETAILS_FAILURE:
    case CREATE_CUSTOMER_FAILURE:
    case UPDATE_CUSTOMER_FAILURE:
    case DELETE_CUSTOMER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default customerReducer;
