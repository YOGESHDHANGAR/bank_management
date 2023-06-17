import axios from "axios";
import {
  FETCH_CURRENCIES_REQUEST,
  FETCH_CURRENCIES_SUCCESS,
  FETCH_CURRENCIES_FAILURE,
  GET_CURRENCY_DETAILS_REQUEST,
  GET_CURRENCY_DETAILS_SUCCESS,
  GET_CURRENCY_DETAILS_FAILURE,
  CREATE_CURRENCY_REQUEST,
  CREATE_CURRENCY_SUCCESS,
  CREATE_CURRENCY_FAILURE,
  UPDATE_CURRENCY_REQUEST,
  UPDATE_CURRENCY_SUCCESS,
  UPDATE_CURRENCY_FAILURE,
  DELETE_CURRENCY_REQUEST,
  DELETE_CURRENCY_SUCCESS,
  DELETE_CURRENCY_FAILURE,
} from "../constants/currencyConstants";
// Fetch all currencies
export const fetchCurrencies = () => {
  return (dispatch) => {
    dispatch(fetchCurrenciesRequest());
    axios
      .get("/api/currencies")
      .then((response) => {
        dispatch(fetchCurrenciesSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchCurrenciesFailure(error.message));
      });
  };
};

const fetchCurrenciesRequest = () => ({
  type: FETCH_CURRENCIES_REQUEST,
});

const fetchCurrenciesSuccess = (currencies) => ({
  type: FETCH_CURRENCIES_SUCCESS,
  payload: currencies,
});

const fetchCurrenciesFailure = (error) => ({
  type: FETCH_CURRENCIES_FAILURE,
  payload: error,
});

// Get currency details by ID
export const getCurrencyDetails = (id) => {
  return (dispatch) => {
    dispatch(getCurrencyDetailsRequest());
    axios
      .get(`/api/currencies/${id}`)
      .then((response) => {
        dispatch(getCurrencyDetailsSuccess(response.data));
      })
      .catch((error) => {
        dispatch(getCurrencyDetailsFailure(error.message));
      });
  };
};

const getCurrencyDetailsRequest = () => ({
  type: GET_CURRENCY_DETAILS_REQUEST,
});

const getCurrencyDetailsSuccess = (currency) => ({
  type: GET_CURRENCY_DETAILS_SUCCESS,
  payload: currency,
});

const getCurrencyDetailsFailure = (error) => ({
  type: GET_CURRENCY_DETAILS_FAILURE,
  payload: error,
});

// Create a currency
export const createCurrency = (currencyData) => {
  return (dispatch) => {
    dispatch(createCurrencyRequest());
    axios
      .post("/api/currencies", currencyData)
      .then((response) => {
        dispatch(createCurrencySuccess(response.data));
      })
      .catch((error) => {
        dispatch(createCurrencyFailure(error.message));
      });
  };
};

const createCurrencyRequest = () => ({
  type: CREATE_CURRENCY_REQUEST,
});

const createCurrencySuccess = (currency) => ({
  type: CREATE_CURRENCY_SUCCESS,
  payload: currency,
});

const createCurrencyFailure = (error) => ({
  type: CREATE_CURRENCY_FAILURE,
  payload: error,
});

// Update a currency
export const updateCurrency = (id, currencyData) => {
  return (dispatch) => {
    dispatch(updateCurrencyRequest());
    axios
      .put(`/api/currencies/${id}`, currencyData)
      .then((response) => {
        dispatch(updateCurrencySuccess(response.data));
      })
      .catch((error) => {
        dispatch(updateCurrencyFailure(error.message));
      });
  };
};

const updateCurrencyRequest = () => ({
  type: UPDATE_CURRENCY_REQUEST,
});

const updateCurrencySuccess = (currency) => ({
  type: UPDATE_CURRENCY_SUCCESS,
  payload: currency,
});

const updateCurrencyFailure = (error) => ({
  type: UPDATE_CURRENCY_FAILURE,
  payload: error,
});

// Delete a currency
export const deleteCurrency = (id) => {
  return (dispatch) => {
    dispatch(deleteCurrencyRequest());
    axios
      .delete(`/api/currencies/${id}`)
      .then(() => {
        dispatch(deleteCurrencySuccess(id));
      })
      .catch((error) => {
        dispatch(deleteCurrencyFailure(error.message));
      });
  };
};

const deleteCurrencyRequest = () => ({
  type: DELETE_CURRENCY_REQUEST,
});

const deleteCurrencySuccess = (id) => ({
  type: DELETE_CURRENCY_SUCCESS,
  payload: id,
});

const deleteCurrencyFailure = (error) => ({
  type: DELETE_CURRENCY_FAILURE,
  payload: error,
});
export {
  fetchCurrencies,
  getCurrencyDetails,
  createCurrency,
  updateCurrency,
  deleteCurrency,
};
