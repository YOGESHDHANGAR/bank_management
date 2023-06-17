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

const initialState = {
  paymentGateways: [],
  selectedPaymentGateway: null,
  loading: false,
  error: null,
};

const paymentGatewayReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PAYMENT_GATEWAYS_REQUEST:
    case GET_PAYMENT_GATEWAY_BY_ID_REQUEST:
    case CREATE_PAYMENT_GATEWAY_REQUEST:
    case UPDATE_PAYMENT_GATEWAY_REQUEST:
    case DELETE_PAYMENT_GATEWAY_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_ALL_PAYMENT_GATEWAYS_SUCCESS:
      return {
        ...state,
        paymentGateways: action.payload,
        loading: false,
        error: null,
      };
    case GET_PAYMENT_GATEWAY_BY_ID_SUCCESS:
      return {
        ...state,
        selectedPaymentGateway: action.payload,
        loading: false,
        error: null,
      };
    case CREATE_PAYMENT_GATEWAY_SUCCESS:
      return {
        ...state,
        paymentGateways: [...state.paymentGateways, action.payload],
        loading: false,
        error: null,
      };
    case UPDATE_PAYMENT_GATEWAY_SUCCESS:
      return {
        ...state,
        paymentGateways: state.paymentGateways.map((gateway) =>
          gateway.id === action.payload.id ? action.payload : gateway
        ),
        loading: false,
        error: null,
      };
    case DELETE_PAYMENT_GATEWAY_SUCCESS:
      return {
        ...state,
        paymentGateways: state.paymentGateways.filter(
          (gateway) => gateway.id !== action.payload
        ),
        loading: false,
        error: null,
      };
    case GET_ALL_PAYMENT_GATEWAYS_FAILURE:
    case GET_PAYMENT_GATEWAY_BY_ID_FAILURE:
    case CREATE_PAYMENT_GATEWAY_FAILURE:
    case UPDATE_PAYMENT_GATEWAY_FAILURE:
    case DELETE_PAYMENT_GATEWAY_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default paymentGatewayReducer;
