import axios from "axios";
import {
  GET_ALL_INTEREST_RATES_REQUEST,
  GET_ALL_INTEREST_RATES_SUCCESS,
  GET_ALL_INTEREST_RATES_FAILURE,
  GET_INTEREST_RATE_BY_ACCOUNT_TYPE_REQUEST,
  GET_INTEREST_RATE_BY_ACCOUNT_TYPE_SUCCESS,
  GET_INTEREST_RATE_BY_ACCOUNT_TYPE_FAILURE,
  CREATE_INTEREST_RATE_REQUEST,
  CREATE_INTEREST_RATE_SUCCESS,
  CREATE_INTEREST_RATE_FAILURE,
  UPDATE_INTEREST_RATE_REQUEST,
  UPDATE_INTEREST_RATE_SUCCESS,
  UPDATE_INTEREST_RATE_FAILURE,
  DELETE_INTEREST_RATE_REQUEST,
  DELETE_INTEREST_RATE_SUCCESS,
  DELETE_INTEREST_RATE_FAILURE,
} from "../constants/interestRateConstants";

// Get all interest rates
export const getAllInterestRates = () => async (dispatch) => {
  dispatch({ type: GET_ALL_INTEREST_RATES_REQUEST });

  try {
    const res = await axios.get("/api/interest-rates");
    dispatch({
      type: GET_ALL_INTEREST_RATES_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.error(err);
    dispatch({ type: GET_ALL_INTEREST_RATES_FAILURE });
  }
};

// Get interest rate by account type
export const getInterestRateByAccountType = (id) => async (dispatch) => {
  dispatch({ type: GET_INTEREST_RATE_BY_ACCOUNT_TYPE_REQUEST });

  try {
    const res = await axios.get(`/api/interest-rates/${id}`);
    dispatch({
      type: GET_INTEREST_RATE_BY_ACCOUNT_TYPE_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.error(err);
    dispatch({ type: GET_INTEREST_RATE_BY_ACCOUNT_TYPE_FAILURE });
  }
};

// Create interest rate
export const createInterestRate = (interestRateData) => async (dispatch) => {
  dispatch({ type: CREATE_INTEREST_RATE_REQUEST });

  try {
    const res = await axios.post("/api/interest-rates", interestRateData);
    dispatch({
      type: CREATE_INTEREST_RATE_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.error(err);
    dispatch({ type: CREATE_INTEREST_RATE_FAILURE });
  }
};

// Update interest rate
export const updateInterestRate =
  (id, interestRateData) => async (dispatch) => {
    dispatch({ type: UPDATE_INTEREST_RATE_REQUEST });

    try {
      const res = await axios.put(
        `/api/interest-rates/${id}`,
        interestRateData
      );
      dispatch({
        type: UPDATE_INTEREST_RATE_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      console.error(err);
      dispatch({ type: UPDATE_INTEREST_RATE_FAILURE });
    }
  };

// Delete interest rate
export const deleteInterestRate = (id) => async (dispatch) => {
  dispatch({ type: DELETE_INTEREST_RATE_REQUEST });

  try {
    await axios.delete(`/api/interest-rates/${id}`);
    dispatch({ type: DELETE_INTEREST_RATE_SUCCESS, payload: id });
  } catch (err) {
    console.error(err);
    dispatch({ type: DELETE_INTEREST_RATE_FAILURE });
  }
};
