import axios from "axios";
import {
  FETCH_CHEQUES_REQUEST,
  FETCH_CHEQUES_SUCCESS,
  FETCH_CHEQUES_FAILURE,
  GET_CHEQUE_DETAILS_REQUEST,
  GET_CHEQUE_DETAILS_SUCCESS,
  GET_CHEQUE_DETAILS_FAILURE,
  CREATE_CHEQUE_REQUEST,
  CREATE_CHEQUE_SUCCESS,
  CREATE_CHEQUE_FAILURE,
  UPDATE_CHEQUE_REQUEST,
  UPDATE_CHEQUE_SUCCESS,
  UPDATE_CHEQUE_FAILURE,
  DELETE_CHEQUE_REQUEST,
  DELETE_CHEQUE_SUCCESS,
  DELETE_CHEQUE_FAILURE,
} from "../constants/chequeConstants";

// Fetch all cheques
export const fetchCheques = () => {
  return (dispatch) => {
    dispatch(fetchChequesRequest());
    axios
      .get("/api/cheques")
      .then((response) => {
        dispatch(fetchChequesSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchChequesFailure(error.message));
      });
  };
};

const fetchChequesRequest = () => ({
  type: FETCH_CHEQUES_REQUEST,
});

const fetchChequesSuccess = (cheques) => ({
  type: FETCH_CHEQUES_SUCCESS,
  payload: cheques,
});

const fetchChequesFailure = (error) => ({
  type: FETCH_CHEQUES_FAILURE,
  payload: error,
});

// Get cheque details by ID
export const getChequeDetails = (id) => {
  return (dispatch) => {
    dispatch(getChequeDetailsRequest());
    axios
      .get(`/api/cheques/${id}`)
      .then((response) => {
        dispatch(getChequeDetailsSuccess(response.data));
      })
      .catch((error) => {
        dispatch(getChequeDetailsFailure(error.message));
      });
  };
};

const getChequeDetailsRequest = () => ({
  type: GET_CHEQUE_DETAILS_REQUEST,
});

const getChequeDetailsSuccess = (cheque) => ({
  type: GET_CHEQUE_DETAILS_SUCCESS,
  payload: cheque,
});

const getChequeDetailsFailure = (error) => ({
  type: GET_CHEQUE_DETAILS_FAILURE,
  payload: error,
});

// Create a cheque
export const createCheque = (chequeData) => {
  return (dispatch) => {
    dispatch(createChequeRequest());
    axios
      .post("/api/cheques", chequeData)
      .then((response) => {
        dispatch(createChequeSuccess(response.data));
      })
      .catch((error) => {
        dispatch(createChequeFailure(error.message));
      });
  };
};

const createChequeRequest = () => ({
  type: CREATE_CHEQUE_REQUEST,
});

const createChequeSuccess = (cheque) => ({
  type: CREATE_CHEQUE_SUCCESS,
  payload: cheque,
});

const createChequeFailure = (error) => ({
  type: CREATE_CHEQUE_FAILURE,
  payload: error,
});

// Update a cheque
export const updateCheque = (id, chequeData) => {
  return (dispatch) => {
    dispatch(updateChequeRequest());
    axios
      .put(`/api/cheques/${id}`, chequeData)
      .then((response) => {
        dispatch(updateChequeSuccess(response.data));
      })
      .catch((error) => {
        dispatch(updateChequeFailure(error.message));
      });
  };
};

const updateChequeRequest = () => ({
  type: UPDATE_CHEQUE_REQUEST,
});

const updateChequeSuccess = (cheque) => ({
  type: UPDATE_CHEQUE_SUCCESS,
  payload: cheque,
});

const updateChequeFailure = (error) => ({
  type: UPDATE_CHEQUE_FAILURE,
  payload: error,
});

// Delete a cheque
export const deleteCheque = (id) => {
  return (dispatch) => {
    dispatch(deleteChequeRequest());
    axios
      .delete(`/api/cheques/${id}`)
      .then(() => {
        dispatch(deleteChequeSuccess(id));
      })
      .catch((error) => {
        dispatch(deleteChequeFailure(error.message));
      });
  };
};

const deleteChequeRequest = () => ({
  type: DELETE_CHEQUE_REQUEST,
});

const deleteChequeSuccess = (id) => ({
  type: DELETE_CHEQUE_SUCCESS,
  payload: id,
});

const deleteChequeFailure = (error) => ({
  type: DELETE_CHEQUE_FAILURE,
  payload: error,
});

export {
  fetchCheques,
  getChequeDetails,
  createCheque,
  updateCheque,
  deleteCheque,
};
