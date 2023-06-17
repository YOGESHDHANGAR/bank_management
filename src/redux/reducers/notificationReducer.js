import axios from "axios";
import {
  GET_ALL_NOTIFICATIONS_REQUEST,
  GET_ALL_NOTIFICATIONS_SUCCESS,
  GET_ALL_NOTIFICATIONS_FAILURE,
  GET_NOTIFICATIONS_BY_CUSTOMER_ID_REQUEST,
  GET_NOTIFICATIONS_BY_CUSTOMER_ID_SUCCESS,
  GET_NOTIFICATIONS_BY_CUSTOMER_ID_FAILURE,
  CREATE_NOTIFICATION_REQUEST,
  CREATE_NOTIFICATION_SUCCESS,
  CREATE_NOTIFICATION_FAILURE,
  MARK_NOTIFICATION_AS_READ_REQUEST,
  MARK_NOTIFICATION_AS_READ_SUCCESS,
  MARK_NOTIFICATION_AS_READ_FAILURE,
  DELETE_NOTIFICATION_REQUEST,
  DELETE_NOTIFICATION_SUCCESS,
  DELETE_NOTIFICATION_FAILURE,
} from "../constants/notificationConstants";

const initialState = {
  notifications: [],
  loading: false,
  error: null,
};

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_NOTIFICATIONS_REQUEST:
    case GET_NOTIFICATIONS_BY_CUSTOMER_ID_REQUEST:
    case CREATE_NOTIFICATION_REQUEST:
    case MARK_NOTIFICATION_AS_READ_REQUEST:
    case DELETE_NOTIFICATION_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_ALL_NOTIFICATIONS_SUCCESS:
    case GET_NOTIFICATIONS_BY_CUSTOMER_ID_SUCCESS:
      return {
        ...state,
        notifications: action.payload,
        loading: false,
        error: null,
      };
    case CREATE_NOTIFICATION_SUCCESS:
      return {
        ...state,
        notifications: [...state.notifications, action.payload],
        loading: false,
        error: null,
      };
    case MARK_NOTIFICATION_AS_READ_SUCCESS:
      return {
        ...state,
        notifications: state.notifications.map((notification) =>
          notification.id === action.payload.id ? action.payload : notification
        ),
        loading: false,
        error: null,
      };
    case DELETE_NOTIFICATION_SUCCESS:
      return {
        ...state,
        notifications: state.notifications.filter(
          (notification) => notification.id !== action.payload
        ),
        loading: false,
        error: null,
      };
    case GET_ALL_NOTIFICATIONS_FAILURE:
    case GET_NOTIFICATIONS_BY_CUSTOMER_ID_FAILURE:
    case CREATE_NOTIFICATION_FAILURE:
    case MARK_NOTIFICATION_AS_READ_FAILURE:
    case DELETE_NOTIFICATION_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default notificationReducer;
