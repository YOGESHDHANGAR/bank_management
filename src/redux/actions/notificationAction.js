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

// Get all notifications
export const getAllNotifications = () => async (dispatch) => {
  dispatch({ type: GET_ALL_NOTIFICATIONS_REQUEST });

  try {
    const res = await axios.get("/api/notifications");
    dispatch({
      type: GET_ALL_NOTIFICATIONS_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.error(err);
    dispatch({ type: GET_ALL_NOTIFICATIONS_FAILURE });
  }
};

// Get notifications by customer ID
export const getNotificationsByCustomerId =
  (customerId) => async (dispatch) => {
    dispatch({ type: GET_NOTIFICATIONS_BY_CUSTOMER_ID_REQUEST });

    try {
      const res = await axios.get(`/api/notifications/${customerId}`);
      dispatch({
        type: GET_NOTIFICATIONS_BY_CUSTOMER_ID_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      console.error(err);
      dispatch({ type: GET_NOTIFICATIONS_BY_CUSTOMER_ID_FAILURE });
    }
  };

// Create notification
export const createNotification = (notificationData) => async (dispatch) => {
  dispatch({ type: CREATE_NOTIFICATION_REQUEST });

  try {
    const res = await axios.post("/api/notifications", notificationData);
    dispatch({
      type: CREATE_NOTIFICATION_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.error(err);
    dispatch({ type: CREATE_NOTIFICATION_FAILURE });
  }
};

// Mark notification as read
export const markNotificationAsRead = (id) => async (dispatch) => {
  dispatch({ type: MARK_NOTIFICATION_AS_READ_REQUEST });

  try {
    const res = await axios.patch(`/api/notifications/${id}`);
    dispatch({
      type: MARK_NOTIFICATION_AS_READ_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.error(err);
    dispatch({ type: MARK_NOTIFICATION_AS_READ_FAILURE });
  }
};

// Delete notification
export const deleteNotification = (id) => async (dispatch) => {
  dispatch({ type: DELETE_NOTIFICATION_REQUEST });

  try {
    await axios.delete(`/api/notifications/${id}`);
    dispatch({ type: DELETE_NOTIFICATION_SUCCESS, payload: id });
  } catch (err) {
    console.error(err);
    dispatch({ type: DELETE_NOTIFICATION_FAILURE });
  }
};
