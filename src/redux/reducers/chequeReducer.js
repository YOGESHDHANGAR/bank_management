import axios from "axios";
import {
  FETCH_CHEQUES_REQUEST,
  FETCH_CHEQUES_SUCCESS,
  FETCH_CHEQUES_FAILURE,
  GET_CHEQUE_DETAILS_REQUEST,
  GET_CHEQUE_DETAILS_SUCCESS,
  GET_CHEQUE_DETAILS_FAILURE,
  CREATE_CHEQUE_REQUEST,
  CREATE_CHEQUE_SUCCESS,
  CREATE_CHEQUE_FAILURE,
  UPDATE_CHEQUE_REQUEST,
  UPDATE_CHEQUE_SUCCESS,
  UPDATE_CHEQUE_FAILURE,
  DELETE_CHEQUE_REQUEST,
  DELETE_CHEQUE_SUCCESS,
  DELETE_CHEQUE_FAILURE,
} from "../constants/chequeConstants";

const initialState = {
  cheques: [],
  cheque: null,
  loading: false,
  error: null,
};

const chequeReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHEQUES_REQUEST:
    case GET_CHEQUE_DETAILS_REQUEST:
    case CREATE_CHEQUE_REQUEST:
    case UPDATE_CHEQUE_REQUEST:
    case DELETE_CHEQUE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_CHEQUES_SUCCESS:
      return {
        ...state,
        cheques: action.payload,
        loading: false,
        error: null,
      };
    case GET_CHEQUE_DETAILS_SUCCESS:
      return {
        ...state,
        cheque: action.payload,
        loading: false,
        error: null,
      };
    case CREATE_CHEQUE_SUCCESS:
      return {
        ...state,
        cheques: [...state.cheques, action.payload],
        loading: false,
        error: null,
      };
    case UPDATE_CHEQUE_SUCCESS:
      return {
        ...state,
        cheques: state.cheques.map((cheque) =>
          cheque.id === action.payload.id ? action.payload : cheque
        ),
        loading: false,
        error: null,
      };
    case DELETE_CHEQUE_SUCCESS:
      return {
        ...state,
        cheques: state.cheques.filter((cheque) => cheque.id !== action.payload),
        loading: false,
        error: null,
      };
    case FETCH_CHEQUES_FAILURE:
    case GET_CHEQUE_DETAILS_FAILURE:
    case CREATE_CHEQUE_FAILURE:
    case UPDATE_CHEQUE_FAILURE:
    case DELETE_CHEQUE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default chequeReducer;
