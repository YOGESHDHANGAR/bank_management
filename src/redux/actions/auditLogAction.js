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
export const fetchAuditLogs = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_AUDIT_LOGS_REQUEST });

    axios
      .get("/api/auditlogs")
      .then((response) => {
        dispatch({
          type: FETCH_AUDIT_LOGS_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: FETCH_AUDIT_LOGS_FAILURE,
          payload: error.message,
        });
      });
  };
};

export const getAuditLogDetails = (id) => {
  return (dispatch) => {
    dispatch({ type: GET_AUDIT_LOG_DETAILS_REQUEST });

    axios
      .get(`/api/auditlogs/${id}`)
      .then((response) => {
        dispatch({
          type: GET_AUDIT_LOG_DETAILS_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_AUDIT_LOG_DETAILS_FAILURE,
          payload: error.message,
        });
      });
  };
};

export const createAuditLog = (auditLogData) => {
  return (dispatch) => {
    dispatch({ type: CREATE_AUDIT_LOG_REQUEST });

    axios
      .post("/api/auditlogs", auditLogData)
      .then((response) => {
        dispatch({
          type: CREATE_AUDIT_LOG_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: CREATE_AUDIT_LOG_FAILURE,
          payload: error.message,
        });
      });
  };
};

export const updateAuditLog = (id, auditLogData) => {
  return (dispatch) => {
    dispatch({ type: UPDATE_AUDIT_LOG_REQUEST });

    axios
      .put(`/api/auditlogs/${id}`, auditLogData)
      .then((response) => {
        dispatch({
          type: UPDATE_AUDIT_LOG_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: UPDATE_AUDIT_LOG_FAILURE,
          payload: error.message,
        });
      });
  };
};

export const deleteAuditLog = (id) => {
  return (dispatch) => {
    dispatch({ type: DELETE_AUDIT_LOG_REQUEST });

    axios
      .delete(`/api/auditlogs/${id}`)
      .then((response) => {
        dispatch({
          type: DELETE_AUDIT_LOG_SUCCESS,
          payload: id,
        });
      })
      .catch((error) => {
        dispatch({
          type: DELETE_AUDIT_LOG_FAILURE,
          payload: error.message,
        });
      });
  };
};

export {
  fetchAuditLogs,
  getAuditLogDetails,
  createAuditLog,
  updateAuditLog,
  deleteAuditLog,
};
