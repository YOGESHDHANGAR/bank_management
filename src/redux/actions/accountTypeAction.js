import axios from "axios";
import {
  CREATE_ACCOUNT_TYPE_REQUEST,
  CREATE_ACCOUNT_TYPE_SUCCESS,
  CREATE_ACCOUNT_TYPE_FAILURE,
  FETCH_ACCOUNT_TYPES_REQUEST,
  FETCH_ACCOUNT_TYPES_SUCCESS,
  FETCH_ACCOUNT_TYPES_FAILURE,
  GET_ACCOUNT_TYPE_DETAILS_REQUEST,
  GET_ACCOUNT_TYPE_DETAILS_SUCCESS,
  GET_ACCOUNT_TYPE_DETAILS_FAILURE,
  UPDATE_ACCOUNT_TYPE_REQUEST,
  UPDATE_ACCOUNT_TYPE_SUCCESS,
  UPDATE_ACCOUNT_TYPE_FAILURE,
  DELETE_ACCOUNT_TYPE_REQUEST,
  DELETE_ACCOUNT_TYPE_SUCCESS,
  DELETE_ACCOUNT_TYPE_FAILURE,
} from "../constants/accountTypeConstants";

export const createAccountType = (accountTypeData) => {
  return (dispatch) => {
    dispatch({ type: CREATE_ACCOUNT_TYPE_REQUEST });

    axios
      .post("/api/accountTypes", accountTypeData)
      .then((response) => {
        dispatch({
          type: CREATE_ACCOUNT_TYPE_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: CREATE_ACCOUNT_TYPE_FAILURE,
          payload: error.message,
        });
      });
  };
};

export const fetchAccountTypes = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_ACCOUNT_TYPES_REQUEST });

    axios
      .get("/api/accountTypes")
      .then((response) => {
        dispatch({
          type: FETCH_ACCOUNT_TYPES_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: FETCH_ACCOUNT_TYPES_FAILURE,
          payload: error.message,
        });
      });
  };
};

export const getAccountTypeDetails = (id) => {
  return (dispatch) => {
    dispatch({ type: GET_ACCOUNT_TYPE_DETAILS_REQUEST });

    axios
      .get(`/api/accountTypes/${id}`)
      .then((response) => {
        dispatch({
          type: GET_ACCOUNT_TYPE_DETAILS_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_ACCOUNT_TYPE_DETAILS_FAILURE,
          payload: error.message,
        });
      });
  };
};

export const updateAccountType = (id, accountTypeData) => {
  return (dispatch) => {
    dispatch({ type: UPDATE_ACCOUNT_TYPE_REQUEST });

    axios
      .put(`/api/accountTypes/${id}`, accountTypeData)
      .then((response) => {
        dispatch({
          type: UPDATE_ACCOUNT_TYPE_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: UPDATE_ACCOUNT_TYPE_FAILURE,
          payload: error.message,
        });
      });
  };
};

export const deleteAccountType = (id) => {
  return (dispatch) => {
    dispatch({ type: DELETE_ACCOUNT_TYPE_REQUEST });

    axios
      .delete(`/api/accountTypes/${id}`)
      .then((response) => {
        dispatch({
          type: DELETE_ACCOUNT_TYPE_SUCCESS,
          payload: id,
        });
      })
      .catch((error) => {
        dispatch({
          type: DELETE_ACCOUNT_TYPE_FAILURE,
          payload: error.message,
        });
      });
  };
};

export {
  createAccountType,
  fetchAccountTypes,
  getAccountTypeDetails,
  updateAccountType,
  deleteAccountType,
};
