import axios from "axios";
import {
  FETCH_CASH_TRANSACTIONS_REQUEST,
  FETCH_CASH_TRANSACTIONS_SUCCESS,
  FETCH_CASH_TRANSACTIONS_FAILURE,
  GET_CASH_TRANSACTION_DETAILS_REQUEST,
  GET_CASH_TRANSACTION_DETAILS_SUCCESS,
  GET_CASH_TRANSACTION_DETAILS_FAILURE,
  CREATE_CASH_TRANSACTION_REQUEST,
  CREATE_CASH_TRANSACTION_SUCCESS,
  CREATE_CASH_TRANSACTION_FAILURE,
  UPDATE_CASH_TRANSACTION_REQUEST,
  UPDATE_CASH_TRANSACTION_SUCCESS,
  UPDATE_CASH_TRANSACTION_FAILURE,
  DELETE_CASH_TRANSACTION_REQUEST,
  DELETE_CASH_TRANSACTION_SUCCESS,
  DELETE_CASH_TRANSACTION_FAILURE,
} from "../constants/cashTransactionConstants";
// Fetch all cash transactions
// Fetch all cash transactions
export const fetchCashTransactions = () => {
  return (dispatch) => {
    dispatch(fetchCashTransactionsRequest());
    axios
      .get("/api/cash-transactions")
      .then((response) => {
        dispatch(fetchCashTransactionsSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchCashTransactionsFailure(error.message));
      });
  };
};

const fetchCashTransactionsRequest = () => ({
  type: FETCH_CASH_TRANSACTIONS_REQUEST,
});

const fetchCashTransactionsSuccess = (cashTransactions) => ({
  type: FETCH_CASH_TRANSACTIONS_SUCCESS,
  payload: cashTransactions,
});

const fetchCashTransactionsFailure = (error) => ({
  type: FETCH_CASH_TRANSACTIONS_FAILURE,
  payload: error,
});

// Get cash transaction details by ID
export const getCashTransactionDetails = (id) => {
  return (dispatch) => {
    dispatch(getCashTransactionDetailsRequest());
    axios
      .get(`/api/cash-transactions/${id}`)
      .then((response) => {
        dispatch(getCashTransactionDetailsSuccess(response.data));
      })
      .catch((error) => {
        dispatch(getCashTransactionDetailsFailure(error.message));
      });
  };
};

const getCashTransactionDetailsRequest = () => ({
  type: GET_CASH_TRANSACTION_DETAILS_REQUEST,
});

const getCashTransactionDetailsSuccess = (cashTransaction) => ({
  type: GET_CASH_TRANSACTION_DETAILS_SUCCESS,
  payload: cashTransaction,
});

const getCashTransactionDetailsFailure = (error) => ({
  type: GET_CASH_TRANSACTION_DETAILS_FAILURE,
  payload: error,
});

// Create a cash transaction
export const createCashTransaction = (cashTransactionData) => {
  return (dispatch) => {
    dispatch(createCashTransactionRequest());
    axios
      .post("/api/cash-transactions", cashTransactionData)
      .then((response) => {
        dispatch(createCashTransactionSuccess(response.data));
      })
      .catch((error) => {
        dispatch(createCashTransactionFailure(error.message));
      });
  };
};

const createCashTransactionRequest = () => ({
  type: CREATE_CASH_TRANSACTION_REQUEST,
});

const createCashTransactionSuccess = (cashTransaction) => ({
  type: CREATE_CASH_TRANSACTION_SUCCESS,
  payload: cashTransaction,
});

const createCashTransactionFailure = (error) => ({
  type: CREATE_CASH_TRANSACTION_FAILURE,
  payload: error,
});

// Update a cash transaction
export const updateCashTransaction = (id, cashTransactionData) => {
  return (dispatch) => {
    dispatch(updateCashTransactionRequest());
    axios
      .put(`/api/cash-transactions/${id}`, cashTransactionData)
      .then((response) => {
        dispatch(updateCashTransactionSuccess(response.data));
      })
      .catch((error) => {
        dispatch(updateCashTransactionFailure(error.message));
      });
  };
};

const updateCashTransactionRequest = () => ({
  type: UPDATE_CASH_TRANSACTION_REQUEST,
});

const updateCashTransactionSuccess = (cashTransaction) => ({
  type: UPDATE_CASH_TRANSACTION_SUCCESS,
  payload: cashTransaction,
});

const updateCashTransactionFailure = (error) => ({
  type: UPDATE_CASH_TRANSACTION_FAILURE,
  payload: error,
});

// Delete a cash transaction
export const deleteCashTransaction = (id) => {
  return (dispatch) => {
    dispatch(deleteCashTransactionRequest());
    axios
      .delete(`/api/cash-transactions/${id}`)
      .then(() => {
        dispatch(deleteCashTransactionSuccess(id));
      })
      .catch((error) => {
        dispatch(deleteCashTransactionFailure(error.message));
      });
  };
};

const deleteCashTransactionRequest = () => ({
  type: DELETE_CASH_TRANSACTION_REQUEST,
});

const deleteCashTransactionSuccess = (id) => ({
  type: DELETE_CASH_TRANSACTION_SUCCESS,
  payload: id,
});

const deleteCashTransactionFailure = (error) => ({
  type: DELETE_CASH_TRANSACTION_FAILURE,
  payload: error,
});

export {
  fetchCashTransactions,
  getCashTransactionDetails,
  createCashTransaction,
  updateCashTransaction,
  deleteCashTransaction,
};
