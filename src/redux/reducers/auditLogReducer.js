import axios from "axios";
import {
  FETCH_AUDIT_LOGS_REQUEST,
  FETCH_AUDIT_LOGS_SUCCESS,
  FETCH_AUDIT_LOGS_FAILURE,
  GET_AUDIT_LOG_DETAILS_REQUEST,
  GET_AUDIT_LOG_DETAILS_SUCCESS,
  GET_AUDIT_LOG_DETAILS_FAILURE,
  CREATE_AUDIT_LOG_REQUEST,
  CREATE_AUDIT_LOG_SUCCESS,
  CREATE_AUDIT_LOG_FAILURE,
  UPDATE_AUDIT_LOG_REQUEST,
  UPDATE_AUDIT_LOG_SUCCESS,
  UPDATE_AUDIT_LOG_FAILURE,
  DELETE_AUDIT_LOG_REQUEST,
  DELETE_AUDIT_LOG_SUCCESS,
  DELETE_AUDIT_LOG_FAILURE,
} from "../constants/auditLogConstants";

const initialState = {
  auditLogs: [],
  auditLog: null,
  loading: false,
  error: null,
};

const auditLogReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_AUDIT_LOGS_REQUEST:
    case GET_AUDIT_LOG_DETAILS_REQUEST:
    case CREATE_AUDIT_LOG_REQUEST:
    case UPDATE_AUDIT_LOG_REQUEST:
    case DELETE_AUDIT_LOG_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_AUDIT_LOGS_SUCCESS:
      return {
        ...state,
        auditLogs: action.payload,
        loading: false,
        error: null,
      };
    case GET_AUDIT_LOG_DETAILS_SUCCESS:
      return {
        ...state,
        auditLog: action.payload,
        loading: false,
        error: null,
      };
    case CREATE_AUDIT_LOG_SUCCESS:
      return {
        ...state,
        auditLogs: [...state.auditLogs, action.payload],
        loading: false,
        error: null,
      };
    case UPDATE_AUDIT_LOG_SUCCESS:
      return {
        ...state,
        auditLogs: state.auditLogs.map((auditLog) =>
          auditLog.id === action.payload.id ? action.payload : auditLog
        ),
        loading: false,
        error: null,
      };
    case DELETE_AUDIT_LOG_SUCCESS:
      return {
        ...state,
        auditLogs: state.auditLogs.filter(
          (auditLog) => auditLog.id !== action.payload
        ),
        loading: false,
        error: null,
      };
    case FETCH_AUDIT_LOGS_FAILURE:
    case GET_AUDIT_LOG_DETAILS_FAILURE:
    case CREATE_AUDIT_LOG_FAILURE:
    case UPDATE_AUDIT_LOG_FAILURE:
    case DELETE_AUDIT_LOG_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default auditLogReducer;
