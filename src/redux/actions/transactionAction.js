import axios from "axios";
import {
  GET_ALL_TRANSACTIONS_REQUEST,
  GET_ALL_TRANSACTIONS_SUCCESS,
  GET_ALL_TRANSACTIONS_FAILURE,
  GET_TRANSACTION_BY_ID_REQUEST,
  GET_TRANSACTION_BY_ID_SUCCESS,
  GET_TRANSACTION_BY_ID_FAILURE,
  CREATE_TRANSACTION_REQUEST,
  CREATE_TRANSACTION_SUCCESS,
  CREATE_TRANSACTION_FAILURE,
  UPDATE_TRANSACTION_REQUEST,
  UPDATE_TRANSACTION_SUCCESS,
  UPDATE_TRANSACTION_FAILURE,
  DELETE_TRANSACTION_REQUEST,
  DELETE_TRANSACTION_SUCCESS,
  DELETE_TRANSACTION_FAILURE,
} from "../constants/transactionConstants";

// Get all transactions
export const getAllTransactions = () => async (dispatch) => {
  dispatch({ type: GET_ALL_TRANSACTIONS_REQUEST });

  try {
    const res = await axios.get("/api/transactions");
    dispatch({
      type: GET_ALL_TRANSACTIONS_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.error(err);
    dispatch({ type: GET_ALL_TRANSACTIONS_FAILURE });
  }
};

// Get transaction by ID
export const getTransactionById = (transactionId) => async (dispatch) => {
  dispatch({ type: GET_TRANSACTION_BY_ID_REQUEST });

  try {
    const res = await axios.get(`/api/transactions/${transactionId}`);
    dispatch({
      type: GET_TRANSACTION_BY_ID_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.error(err);
    dispatch({ type: GET_TRANSACTION_BY_ID_FAILURE });
  }
};

// Create transaction
export const createTransaction = (transactionData) => async (dispatch) => {
  dispatch({ type: CREATE_TRANSACTION_REQUEST });

  try {
    const res = await axios.post("/api/transactions", transactionData);
    dispatch({
      type: CREATE_TRANSACTION_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.error(err);
    dispatch({ type: CREATE_TRANSACTION_FAILURE });
  }
};

// Update transaction
export const updateTransaction =
  (transactionId, transactionData) => async (dispatch) => {
    dispatch({ type: UPDATE_TRANSACTION_REQUEST });

    try {
      const res = await axios.put(
        `/api/transactions/${transactionId}`,
        transactionData
      );
      dispatch({
        type: UPDATE_TRANSACTION_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      console.error(err);
      dispatch({ type: UPDATE_TRANSACTION_FAILURE });
    }
  };

// Delete transaction
export const deleteTransaction = (transactionId) => async (dispatch) => {
  dispatch({ type: DELETE_TRANSACTION_REQUEST });

  try {
    await axios.delete(`/api/transactions/${transactionId}`);
    dispatch({ type: DELETE_TRANSACTION_SUCCESS, payload: transactionId });
  } catch (err) {
    console.error(err);
    dispatch({ type: DELETE_TRANSACTION_FAILURE });
  }
};
