import axios from "axios";
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

export const fetchAccessLogs = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_ACCESS_LOGS_REQUEST });

    axios
      .get("/api/access-logs")
      .then((response) => {
        dispatch({
          type: FETCH_ACCESS_LOGS_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: FETCH_ACCESS_LOGS_FAILURE,
          payload: error.message,
        });
      });
  };
};

export const getAccessLog = (id) => {
  return (dispatch) => {
    dispatch({ type: GET_ACCESS_LOG_REQUEST });

    axios
      .get(`/api/access-logs/${id}`)
      .then((response) => {
        dispatch({
          type: GET_ACCESS_LOG_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_ACCESS_LOG_FAILURE,
          payload: error.message,
        });
      });
  };
};

export const createAccessLog = (accessLogData) => {
  return (dispatch) => {
    dispatch({ type: CREATE_ACCESS_LOG_REQUEST });

    axios
      .post("/api/access-logs", accessLogData)
      .then((response) => {
        dispatch({
          type: CREATE_ACCESS_LOG_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: CREATE_ACCESS_LOG_FAILURE,
          payload: error.message,
        });
      });
  };
};

export const updateAccessLog = (id, accessLogData) => {
  return (dispatch) => {
    dispatch({ type: UPDATE_ACCESS_LOG_REQUEST });

    axios
      .put(`/api/access-logs/${id}`, accessLogData)
      .then((response) => {
        dispatch({
          type: UPDATE_ACCESS_LOG_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: UPDATE_ACCESS_LOG_FAILURE,
          payload: error.message,
        });
      });
  };
};

export const deleteAccessLog = (id) => {
  return (dispatch) => {
    dispatch({ type: DELETE_ACCESS_LOG_REQUEST });

    axios
      .delete(`/api/access-logs/${id}`)
      .then((response) => {
        dispatch({
          type: DELETE_ACCESS_LOG_SUCCESS,
          payload: id,
        });
      })
      .catch((error) => {
        dispatch({
          type: DELETE_ACCESS_LOG_FAILURE,
          payload: error.message,
        });
      });
  };
};

export {
  fetchAccessLogs,
  getAccessLog,
  createAccessLog,
  updateAccessLog,
  deleteAccessLog,
};
