import axios from "axios";
import {
  GENERATE_ACCOUNT_STATEMENTS_REQUEST,
  GENERATE_ACCOUNT_STATEMENTS_SUCCESS,
  GENERATE_ACCOUNT_STATEMENTS_FAILURE,
  GENERATE_TRANSACTION_HISTORY_REQUEST,
  GENERATE_TRANSACTION_HISTORY_SUCCESS,
  GENERATE_TRANSACTION_HISTORY_FAILURE,
  GENERATE_CUSTOMER_ACTIVITY_REQUEST,
  GENERATE_CUSTOMER_ACTIVITY_SUCCESS,
  GENERATE_CUSTOMER_ACTIVITY_FAILURE,
  GENERATE_FINANCIAL_ANALYSIS_REQUEST,
  GENERATE_FINANCIAL_ANALYSIS_SUCCESS,
  GENERATE_FINANCIAL_ANALYSIS_FAILURE,
} from "../constants/reportContants";

// Generate account statements
export const generateAccountStatements = () => async (dispatch) => {
  dispatch({ type: GENERATE_ACCOUNT_STATEMENTS_REQUEST });

  try {
    const res = await axios.get("/api/reports/account-statements");
    dispatch({
      type: GENERATE_ACCOUNT_STATEMENTS_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.error(err);
    dispatch({ type: GENERATE_ACCOUNT_STATEMENTS_FAILURE });
  }
};

// Generate transaction history
export const generateTransactionHistory = () => async (dispatch) => {
  dispatch({ type: GENERATE_TRANSACTION_HISTORY_REQUEST });

  try {
    const res = await axios.get("/api/reports/transaction-history");
    dispatch({
      type: GENERATE_TRANSACTION_HISTORY_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.error(err);
    dispatch({ type: GENERATE_TRANSACTION_HISTORY_FAILURE });
  }
};

// Generate customer activity
export const generateCustomerActivity = () => async (dispatch) => {
  dispatch({ type: GENERATE_CUSTOMER_ACTIVITY_REQUEST });

  try {
    const res = await axios.get("/api/reports/customer-activity");
    dispatch({
      type: GENERATE_CUSTOMER_ACTIVITY_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.error(err);
    dispatch({ type: GENERATE_CUSTOMER_ACTIVITY_FAILURE });
  }
};

// Generate financial analysis
export const generateFinancialAnalysis = () => async (dispatch) => {
  dispatch({ type: GENERATE_FINANCIAL_ANALYSIS_REQUEST });

  try {
    const res = await axios.get("/api/reports/financial-analysis");
    dispatch({
      type: GENERATE_FINANCIAL_ANALYSIS_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.error(err);
    dispatch({ type: GENERATE_FINANCIAL_ANALYSIS_FAILURE });
  }
};
