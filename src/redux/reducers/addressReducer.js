import axios from "axios";
import {
  FETCH_ADDRESSES_REQUEST,
  FETCH_ADDRESSES_SUCCESS,
  FETCH_ADDRESSES_FAILURE,
  GET_ADDRESS_DETAILS_REQUEST,
  GET_ADDRESS_DETAILS_SUCCESS,
  GET_ADDRESS_DETAILS_FAILURE,
  CREATE_ADDRESS_REQUEST,
  CREATE_ADDRESS_SUCCESS,
  CREATE_ADDRESS_FAILURE,
  UPDATE_ADDRESS_REQUEST,
  UPDATE_ADDRESS_SUCCESS,
  UPDATE_ADDRESS_FAILURE,
  DELETE_ADDRESS_REQUEST,
  DELETE_ADDRESS_SUCCESS,
  DELETE_ADDRESS_FAILURE,
} from "../constants/addressConstants";

const initialState = {
  addresses: [],
  address: null,
  loading: false,
  error: null,
};

const addressReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ADDRESSES_REQUEST:
    case GET_ADDRESS_DETAILS_REQUEST:
    case CREATE_ADDRESS_REQUEST:
    case UPDATE_ADDRESS_REQUEST:
    case DELETE_ADDRESS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_ADDRESSES_SUCCESS:
      return {
        ...state,
        addresses: action.payload,
        loading: false,
        error: null,
      };
    case GET_ADDRESS_DETAILS_SUCCESS:
      return {
        ...state,
        address: action.payload,
        loading: false,
        error: null,
      };
    case CREATE_ADDRESS_SUCCESS:
      return {
        ...state,
        addresses: [...state.addresses, action.payload],
        loading: false,
        error: null,
      };
    case UPDATE_ADDRESS_SUCCESS:
      return {
        ...state,
        addresses: state.addresses.map((address) =>
          address.id === action.payload.id ? action.payload : address
        ),
        loading: false,
        error: null,
      };
    case DELETE_ADDRESS_SUCCESS:
      return {
        ...state,
        addresses: state.addresses.filter(
          (address) => address.id !== action.payload
        ),
        loading: false,
        error: null,
      };
    case FETCH_ADDRESSES_FAILURE:
    case GET_ADDRESS_DETAILS_FAILURE:
    case CREATE_ADDRESS_FAILURE:
    case UPDATE_ADDRESS_FAILURE:
    case DELETE_ADDRESS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default addressReducer;
