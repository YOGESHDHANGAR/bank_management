import axios from "axios";
import {
  GET_ALL_LOANS_REQUEST,
  GET_ALL_LOANS_SUCCESS,
  GET_ALL_LOANS_FAILURE,
  GET_LOAN_BY_CUSTOMER_ID_REQUEST,
  GET_LOAN_BY_CUSTOMER_ID_SUCCESS,
  GET_LOAN_BY_CUSTOMER_ID_FAILURE,
  CREATE_LOAN_REQUEST,
  CREATE_LOAN_SUCCESS,
  CREATE_LOAN_FAILURE,
  UPDATE_LOAN_REQUEST,
  UPDATE_LOAN_SUCCESS,
  UPDATE_LOAN_FAILURE,
  DELETE_LOAN_REQUEST,
  DELETE_LOAN_SUCCESS,
  DELETE_LOAN_FAILURE,
} from "../constants/loanConstants";

// Get all loans
export const getAllLoans = () => async (dispatch) => {
  dispatch({ type: GET_ALL_LOANS_REQUEST });

  try {
    const res = await axios.get("/api/loans");
    dispatch({
      type: GET_ALL_LOANS_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.error(err);
    dispatch({ type: GET_ALL_LOANS_FAILURE });
  }
};

// Get loan by customer ID
export const getLoanByCustomerId = (customerId) => async (dispatch) => {
  dispatch({ type: GET_LOAN_BY_CUSTOMER_ID_REQUEST });

  try {
    const res = await axios.get(`/api/loans/${customerId}`);
    dispatch({
      type: GET_LOAN_BY_CUSTOMER_ID_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.error(err);
    dispatch({ type: GET_LOAN_BY_CUSTOMER_ID_FAILURE });
  }
};

// Create loan
export const createLoan = (loanData) => async (dispatch) => {
  dispatch({ type: CREATE_LOAN_REQUEST });

  try {
    const res = await axios.post("/api/loans", loanData);
    dispatch({
      type: CREATE_LOAN_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.error(err);
    dispatch({ type: CREATE_LOAN_FAILURE });
  }
};

// Update loan
export const updateLoan = (id, loanData) => async (dispatch) => {
  dispatch({ type: UPDATE_LOAN_REQUEST });

  try {
    const res = await axios.put(`/api/loans/${id}`, loanData);
    dispatch({
      type: UPDATE_LOAN_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.error(err);
    dispatch({ type: UPDATE_LOAN_FAILURE });
  }
};

// Delete loan
export const deleteLoan = (id) => async (dispatch) => {
  dispatch({ type: DELETE_LOAN_REQUEST });

  try {
    await axios.delete(`/api/loans/${id}`);
    dispatch({ type: DELETE_LOAN_SUCCESS, payload: id });
  } catch (err) {
    console.error(err);
    dispatch({ type: DELETE_LOAN_FAILURE });
  }
};
