import axios from "axios";
import {
  CREATE_ACCOUNT_REQUEST,
  CREATE_ACCOUNT_SUCCESS,
  CREATE_ACCOUNT_FAILURE,
  FETCH_ACCOUNTS_REQUEST,
  FETCH_ACCOUNTS_SUCCESS,
  FETCH_ACCOUNTS_FAILURE,
  GET_ACCOUNT_DETAILS_REQUEST,
  GET_ACCOUNT_DETAILS_SUCCESS,
  GET_ACCOUNT_DETAILS_FAILURE,
  UPDATE_ACCOUNT_BALANCE_REQUEST,
  UPDATE_ACCOUNT_BALANCE_SUCCESS,
  UPDATE_ACCOUNT_BALANCE_FAILURE,
  DELETE_ACCOUNT_REQUEST,
  DELETE_ACCOUNT_SUCCESS,
  DELETE_ACCOUNT_FAILURE,
} from "../constants/accountConstants";

export const createAccount = (accountData) => {
  return (dispatch) => {
    dispatch({ type: CREATE_ACCOUNT_REQUEST });

    axios
      .post("/api/accounts", accountData)
      .then((response) => {
        dispatch({
          type: CREATE_ACCOUNT_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: CREATE_ACCOUNT_FAILURE,
          payload: error.message,
        });
      });
  };
};

export const fetchAccounts = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_ACCOUNTS_REQUEST });

    axios
      .get("/api/accounts")
      .then((response) => {
        dispatch({
          type: FETCH_ACCOUNTS_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: FETCH_ACCOUNTS_FAILURE,
          payload: error.message,
        });
      });
  };
};

export const getAccountDetails = (id) => {
  return (dispatch) => {
    dispatch({ type: GET_ACCOUNT_DETAILS_REQUEST });

    axios
      .get(`/api/accounts/${id}`)
      .then((response) => {
        dispatch({
          type: GET_ACCOUNT_DETAILS_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_ACCOUNT_DETAILS_FAILURE,
          payload: error.message,
        });
      });
  };
};

export const updateAccountBalance = (id, balance) => {
  return (dispatch) => {
    dispatch({ type: UPDATE_ACCOUNT_BALANCE_REQUEST });

    axios
      .put(`/api/accounts/${id}`, { balance })
      .then((response) => {
        dispatch({
          type: UPDATE_ACCOUNT_BALANCE_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: UPDATE_ACCOUNT_BALANCE_FAILURE,
          payload: error.message,
        });
      });
  };
};

export const deleteAccount = (id) => {
  return (dispatch) => {
    dispatch({ type: DELETE_ACCOUNT_REQUEST });

    axios
      .delete(`/api/accounts/${id}`)
      .then((response) => {
        dispatch({
          type: DELETE_ACCOUNT_SUCCESS,
          payload: id,
        });
      })
      .catch((error) => {
        dispatch({
          type: DELETE_ACCOUNT_FAILURE,
          payload: error.message,
        });
      });
  };
};

export {
  createAccount,
  fetchAccounts,
  getAccountDetails,
  updateAccountBalance,
  deleteAccount,
};
