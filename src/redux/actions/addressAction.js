import axios from "axios";
import {
  FETCH_ADDRESSES_REQUEST,
  FETCH_ADDRESSES_SUCCESS,
  FETCH_ADDRESSES_FAILURE,
  GET_ADDRESS_DETAILS_REQUEST,
  GET_ADDRESS_DETAILS_SUCCESS,
  GET_ADDRESS_DETAILS_FAILURE,
  CREATE_ADDRESS_REQUEST,
  CREATE_ADDRESS_SUCCESS,
  CREATE_ADDRESS_FAILURE,
  UPDATE_ADDRESS_REQUEST,
  UPDATE_ADDRESS_SUCCESS,
  UPDATE_ADDRESS_FAILURE,
  DELETE_ADDRESS_REQUEST,
  DELETE_ADDRESS_SUCCESS,
  DELETE_ADDRESS_FAILURE,
} from "../constants/addressConstants";

export const fetchAddresses = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_ADDRESSES_REQUEST });

    axios
      .get("/api/addresses")
      .then((response) => {
        dispatch({
          type: FETCH_ADDRESSES_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: FETCH_ADDRESSES_FAILURE,
          payload: error.message,
        });
      });
  };
};

export const getAddressDetails = (id) => {
  return (dispatch) => {
    dispatch({ type: GET_ADDRESS_DETAILS_REQUEST });

    axios
      .get(`/api/addresses/${id}`)
      .then((response) => {
        dispatch({
          type: GET_ADDRESS_DETAILS_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_ADDRESS_DETAILS_FAILURE,
          payload: error.message,
        });
      });
  };
};

export const createAddress = (addressData) => {
  return (dispatch) => {
    dispatch({ type: CREATE_ADDRESS_REQUEST });

    axios
      .post("/api/addresses", addressData)
      .then((response) => {
        dispatch({
          type: CREATE_ADDRESS_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: CREATE_ADDRESS_FAILURE,
          payload: error.message,
        });
      });
  };
};

export const updateAddress = (id, addressData) => {
  return (dispatch) => {
    dispatch({ type: UPDATE_ADDRESS_REQUEST });

    axios
      .put(`/api/addresses/${id}`, addressData)
      .then((response) => {
        dispatch({
          type: UPDATE_ADDRESS_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: UPDATE_ADDRESS_FAILURE,
          payload: error.message,
        });
      });
  };
};

export const deleteAddress = (id) => {
  return (dispatch) => {
    dispatch({ type: DELETE_ADDRESS_REQUEST });

    axios
      .delete(`/api/addresses/${id}`)
      .then((response) => {
        dispatch({
          type: DELETE_ADDRESS_SUCCESS,
          payload: id,
        });
      })
      .catch((error) => {
        dispatch({
          type: DELETE_ADDRESS_FAILURE,
          payload: error.message,
        });
      });
  };
};
export {
  fetchAddresses,
  getAddressDetails,
  createAddress,
  updateAddress,
  deleteAddress,
};
