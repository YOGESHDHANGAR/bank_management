import {
  FETCH_ACCESS_LOGS_REQUEST,
  FETCH_ACCESS_LOGS_SUCCESS,
  FETCH_ACCESS_LOGS_FAILURE,
  GET_ACCESS_LOG_REQUEST,
  GET_ACCESS_LOG_SUCCESS,
  GET_ACCESS_LOG_FAILURE,
  CREATE_ACCESS_LOG_REQUEST,
  CREATE_ACCESS_LOG_SUCCESS,
  CREATE_ACCESS_LOG_FAILURE,
  UPDATE_ACCESS_LOG_REQUEST,
  UPDATE_ACCESS_LOG_SUCCESS,
  UPDATE_ACCESS_LOG_FAILURE,
  DELETE_ACCESS_LOG_REQUEST,
  DELETE_ACCESS_LOG_SUCCESS,
  DELETE_ACCESS_LOG_FAILURE,
} from "../constants/accessLogConstants";

const initialState = {
  accessLogs: [],
  accessLog: null,
  loading: false,
  error: null,
};

const accessLogReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ACCESS_LOGS_REQUEST:
    case GET_ACCESS_LOG_REQUEST:
    case CREATE_ACCESS_LOG_REQUEST:
    case UPDATE_ACCESS_LOG_REQUEST:
    case DELETE_ACCESS_LOG_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_ACCESS_LOGS_SUCCESS:
      return {
        ...state,
        accessLogs: action.payload,
        loading: false,
        error: null,
      };
    case GET_ACCESS_LOG_SUCCESS:
      return {
        ...state,
        accessLog: action.payload,
        loading: false,
        error: null,
      };
    case CREATE_ACCESS_LOG_SUCCESS:
      return {
        ...state,
        accessLogs: [...state.accessLogs, action.payload],
        loading: false,
        error: null,
      };
    case UPDATE_ACCESS_LOG_SUCCESS:
      return {
        ...state,
        accessLogs: state.accessLogs.map((log) =>
          log.id === action.payload.id ? action.payload : log
        ),
        loading: false,
        error: null,
      };
    case DELETE_ACCESS_LOG_SUCCESS:
      return {
        ...state,
        accessLogs: state.accessLogs.filter((log) => log.id !== action.payload),
        loading: false,
        error: null,
      };
    case FETCH_ACCESS_LOGS_FAILURE:
    case GET_ACCESS_LOG_FAILURE:
    case CREATE_ACCESS_LOG_FAILURE:
    case UPDATE_ACCESS_LOG_FAILURE:
    case DELETE_ACCESS_LOG_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default accessLogReducer;
