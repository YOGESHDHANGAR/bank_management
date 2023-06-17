import axios from "axios";
import {
  GET_ALL_PAYMENT_GATEWAYS_REQUEST,
  GET_ALL_PAYMENT_GATEWAYS_SUCCESS,
  GET_ALL_PAYMENT_GATEWAYS_FAILURE,
  GET_PAYMENT_GATEWAY_BY_ID_REQUEST,
  GET_PAYMENT_GATEWAY_BY_ID_SUCCESS,
  GET_PAYMENT_GATEWAY_BY_ID_FAILURE,
  CREATE_PAYMENT_GATEWAY_REQUEST,
  CREATE_PAYMENT_GATEWAY_SUCCESS,
  CREATE_PAYMENT_GATEWAY_FAILURE,
  UPDATE_PAYMENT_GATEWAY_REQUEST,
  UPDATE_PAYMENT_GATEWAY_SUCCESS,
  UPDATE_PAYMENT_GATEWAY_FAILURE,
  DELETE_PAYMENT_GATEWAY_REQUEST,
  DELETE_PAYMENT_GATEWAY_SUCCESS,
  DELETE_PAYMENT_GATEWAY_FAILURE,
} from "../constants/paymentGatewayConstants";

// Get all payment gateways
export const getAllPaymentGateways = () => async (dispatch) => {
  dispatch({ type: GET_ALL_PAYMENT_GATEWAYS_REQUEST });

  try {
    const res = await axios.get("/api/paymentgateways");
    dispatch({
      type: GET_ALL_PAYMENT_GATEWAYS_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.error(err);
    dispatch({ type: GET_ALL_PAYMENT_GATEWAYS_FAILURE });
  }
};

// Get payment gateway by ID
export const getPaymentGatewayById = (id) => async (dispatch) => {
  dispatch({ type: GET_PAYMENT_GATEWAY_BY_ID_REQUEST });

  try {
    const res = await axios.get(`/api/paymentgateways/${id}`);
    dispatch({
      type: GET_PAYMENT_GATEWAY_BY_ID_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.error(err);
    dispatch({ type: GET_PAYMENT_GATEWAY_BY_ID_FAILURE });
  }
};

// Create payment gateway
export const createPaymentGateway = (gatewayData) => async (dispatch) => {
  dispatch({ type: CREATE_PAYMENT_GATEWAY_REQUEST });

  try {
    const res = await axios.post("/api/paymentgateways", gatewayData);
    dispatch({
      type: CREATE_PAYMENT_GATEWAY_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.error(err);
    dispatch({ type: CREATE_PAYMENT_GATEWAY_FAILURE });
  }
};

// Update payment gateway
export const updatePaymentGateway = (id, gatewayData) => async (dispatch) => {
  dispatch({ type: UPDATE_PAYMENT_GATEWAY_REQUEST });

  try {
    const res = await axios.put(`/api/paymentgateways/${id}`, gatewayData);
    dispatch({
      type: UPDATE_PAYMENT_GATEWAY_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.error(err);
    dispatch({ type: UPDATE_PAYMENT_GATEWAY_FAILURE });
  }
};

// Delete payment gateway
export const deletePaymentGateway = (id) => async (dispatch) => {
  dispatch({ type: DELETE_PAYMENT_GATEWAY_REQUEST });

  try {
    await axios.delete(`/api/paymentgateways/${id}`);
    dispatch({ type: DELETE_PAYMENT_GATEWAY_SUCCESS, payload: id });
  } catch (err) {
    console.error(err);
    dispatch({ type: DELETE_PAYMENT_GATEWAY_FAILURE });
  }
};
