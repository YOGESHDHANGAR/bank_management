import axios from "axios";
import {
  CREATE_ONLINE_BANKING_ACCOUNT_REQUEST,
  CREATE_ONLINE_BANKING_ACCOUNT_SUCCESS,
  CREATE_ONLINE_BANKING_ACCOUNT_FAILURE,
  GET_ONLINE_BANKING_ACCOUNT_BY_CUSTOMER_ID_REQUEST,
  GET_ONLINE_BANKING_ACCOUNT_BY_CUSTOMER_ID_SUCCESS,
  GET_ONLINE_BANKING_ACCOUNT_BY_CUSTOMER_ID_FAILURE,
  UPDATE_ONLINE_BANKING_ACCOUNT_REQUEST,
  UPDATE_ONLINE_BANKING_ACCOUNT_SUCCESS,
  UPDATE_ONLINE_BANKING_ACCOUNT_FAILURE,
  DELETE_ONLINE_BANKING_ACCOUNT_REQUEST,
  DELETE_ONLINE_BANKING_ACCOUNT_SUCCESS,
  DELETE_ONLINE_BANKING_ACCOUNT_FAILURE,
} from "../constants/onlineBankingConstants";

// Create online banking account
export const createOnlineBankingAccount = (accountData) => async (dispatch) => {
  dispatch({ type: CREATE_ONLINE_BANKING_ACCOUNT_REQUEST });

  try {
    const res = await axios.post("/api/onlinebankings", accountData);
    dispatch({
      type: CREATE_ONLINE_BANKING_ACCOUNT_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.error(err);
    dispatch({ type: CREATE_ONLINE_BANKING_ACCOUNT_FAILURE });
  }
};

// Get online banking account by customer ID
export const getOnlineBankingAccountByCustomerId =
  (customerId) => async (dispatch) => {
    dispatch({ type: GET_ONLINE_BANKING_ACCOUNT_BY_CUSTOMER_ID_REQUEST });

    try {
      const res = await axios.get(`/api/onlinebankings/${customerId}`);
      dispatch({
        type: GET_ONLINE_BANKING_ACCOUNT_BY_CUSTOMER_ID_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      console.error(err);
      dispatch({ type: GET_ONLINE_BANKING_ACCOUNT_BY_CUSTOMER_ID_FAILURE });
    }
  };

// Update online banking account
export const updateOnlineBankingAccount =
  (id, accountData) => async (dispatch) => {
    dispatch({ type: UPDATE_ONLINE_BANKING_ACCOUNT_REQUEST });

    try {
      const res = await axios.put(`/api/onlinebankings/${id}`, accountData);
      dispatch({
        type: UPDATE_ONLINE_BANKING_ACCOUNT_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      console.error(err);
      dispatch({ type: UPDATE_ONLINE_BANKING_ACCOUNT_FAILURE });
    }
  };

// Delete online banking account
export const deleteOnlineBankingAccount = (id) => async (dispatch) => {
  dispatch({ type: DELETE_ONLINE_BANKING_ACCOUNT_REQUEST });

  try {
    await axios.delete(`/api/onlinebankings/${id}`);
    dispatch({ type: DELETE_ONLINE_BANKING_ACCOUNT_SUCCESS, payload: id });
  } catch (err) {
    console.error(err);
    dispatch({ type: DELETE_ONLINE_BANKING_ACCOUNT_FAILURE });
  }
};
