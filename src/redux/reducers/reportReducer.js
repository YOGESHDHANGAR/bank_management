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

const initialState = {
  accountStatements: {
    loading: false,
    data: null,
    error: null,
  },
  transactionHistory: {
    loading: false,
    data: null,
    error: null,
  },
  customerActivity: {
    loading: false,
    data: null,
    error: null,
  },
  financialAnalysis: {
    loading: false,
    data: null,
    error: null,
  },
};

const reportReducer = (state = initialState, action) => {
  switch (action.type) {
    case GENERATE_ACCOUNT_STATEMENTS_REQUEST:
      return {
        ...state,
        accountStatements: {
          ...state.accountStatements,
          loading: true,
        },
      };
    case GENERATE_ACCOUNT_STATEMENTS_SUCCESS:
      return {
        ...state,
        accountStatements: {
          ...state.accountStatements,
          loading: false,
          data: action.payload,
        },
      };
    case GENERATE_ACCOUNT_STATEMENTS_FAILURE:
      return {
        ...state,
        accountStatements: {
          ...state.accountStatements,
          loading: false,
          error: action.payload,
        },
      };
    case GENERATE_TRANSACTION_HISTORY_REQUEST:
      return {
        ...state,
        transactionHistory: {
          ...state.transactionHistory,
          loading: true,
        },
      };
    case GENERATE_TRANSACTION_HISTORY_SUCCESS:
      return {
        ...state,
        transactionHistory: {
          ...state.transactionHistory,
          loading: false,
          data: action.payload,
        },
      };
    case GENERATE_TRANSACTION_HISTORY_FAILURE:
      return {
        ...state,
        transactionHistory: {
          ...state.transactionHistory,
          loading: false,
          error: action.payload,
        },
      };
    case GENERATE_CUSTOMER_ACTIVITY_REQUEST:
      return {
        ...state,
        customerActivity: {
          ...state.customerActivity,
          loading: true,
        },
      };
    case GENERATE_CUSTOMER_ACTIVITY_SUCCESS:
      return {
        ...state,
        customerActivity: {
          ...state.customerActivity,
          loading: false,
          data: action.payload,
        },
      };
    case GENERATE_CUSTOMER_ACTIVITY_FAILURE:
      return {
        ...state,
        customerActivity: {
          ...state.customerActivity,
          loading: false,
          error: action.payload,
        },
      };
    case GENERATE_FINANCIAL_ANALYSIS_REQUEST:
      return {
        ...state,
        financialAnalysis: {
          ...state.financialAnalysis,
          loading: true,
        },
      };
    case GENERATE_FINANCIAL_ANALYSIS_SUCCESS:
      return {
        ...state,
        financialAnalysis: {
          ...state.financialAnalysis,
          loading: false,
          data: action.payload,
        },
      };
    case GENERATE_FINANCIAL_ANALYSIS_FAILURE:
      return {
        ...state,
        financialAnalysis: {
          ...state.financialAnalysis,
          loading: false,
          error: action.payload,
        },
      };
    default:
      return state;
  }
};

export default reportReducer;
