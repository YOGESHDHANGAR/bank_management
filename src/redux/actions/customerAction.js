import axios from "axios";
import {
  FETCH_CUSTOMERS_REQUEST,
  FETCH_CUSTOMERS_SUCCESS,
  FETCH_CUSTOMERS_FAILURE,
  GET_CUSTOMER_DETAILS_REQUEST,
  GET_CUSTOMER_DETAILS_SUCCESS,
  GET_CUSTOMER_DETAILS_FAILURE,
  CREATE_CUSTOMER_REQUEST,
  CREATE_CUSTOMER_SUCCESS,
  CREATE_CUSTOMER_FAILURE,
  UPDATE_CUSTOMER_REQUEST,
  UPDATE_CUSTOMER_SUCCESS,
  UPDATE_CUSTOMER_FAILURE,
  DELETE_CUSTOMER_REQUEST,
  DELETE_CUSTOMER_SUCCESS,
  DELETE_CUSTOMER_FAILURE,
} from "../constants/customerConstants";
// Fetch all customers
export const fetchCustomers = () => {
  return (dispatch) => {
    dispatch(fetchCustomersRequest());
    axios
      .get("/api/customers")
      .then((response) => {
        dispatch(fetchCustomersSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchCustomersFailure(error.message));
      });
  };
};

const fetchCustomersRequest = () => ({
  type: FETCH_CUSTOMERS_REQUEST,
});

const fetchCustomersSuccess = (customers) => ({
  type: FETCH_CUSTOMERS_SUCCESS,
  payload: customers,
});

const fetchCustomersFailure = (error) => ({
  type: FETCH_CUSTOMERS_FAILURE,
  payload: error,
});

// Get customer details by ID
export const getCustomerDetails = (id) => {
  return (dispatch) => {
    dispatch(getCustomerDetailsRequest());
    axios
      .get(`/api/customers/${id}`)
      .then((response) => {
        dispatch(getCustomerDetailsSuccess(response.data));
      })
      .catch((error) => {
        dispatch(getCustomerDetailsFailure(error.message));
      });
  };
};

const getCustomerDetailsRequest = () => ({
  type: GET_CUSTOMER_DETAILS_REQUEST,
});

const getCustomerDetailsSuccess = (customer) => ({
  type: GET_CUSTOMER_DETAILS_SUCCESS,
  payload: customer,
});

const getCustomerDetailsFailure = (error) => ({
  type: GET_CUSTOMER_DETAILS_FAILURE,
  payload: error,
});

// Create a customer
export const createCustomer = (customerData) => {
  return (dispatch) => {
    dispatch(createCustomerRequest());
    axios
      .post("/api/customers", customerData)
      .then((response) => {
        dispatch(createCustomerSuccess(response.data));
      })
      .catch((error) => {
        dispatch(createCustomerFailure(error.message));
      });
  };
};

const createCustomerRequest = () => ({
  type: CREATE_CUSTOMER_REQUEST,
});

const createCustomerSuccess = (customer) => ({
  type: CREATE_CUSTOMER_SUCCESS,
  payload: customer,
});

const createCustomerFailure = (error) => ({
  type: CREATE_CUSTOMER_FAILURE,
  payload: error,
});

// Update a customer
export const updateCustomer = (id, customerData) => {
  return (dispatch) => {
    dispatch(updateCustomerRequest());
    axios
      .put(`/api/customers/${id}`, customerData)
      .then((response) => {
        dispatch(updateCustomerSuccess(response.data));
      })
      .catch((error) => {
        dispatch(updateCustomerFailure(error.message));
      });
  };
};

const updateCustomerRequest = () => ({
  type: UPDATE_CUSTOMER_REQUEST,
});

const updateCustomerSuccess = (customer) => ({
  type: UPDATE_CUSTOMER_SUCCESS,
  payload: customer,
});

const updateCustomerFailure = (error) => ({
  type: UPDATE_CUSTOMER_FAILURE,
  payload: error,
});

// Delete a customer
export const deleteCustomer = (id) => {
  return (dispatch) => {
    dispatch(deleteCustomerRequest());
    axios
      .delete(`/api/customers/${id}`)
      .then(() => {
        dispatch(deleteCustomerSuccess(id));
      })
      .catch((error) => {
        dispatch(deleteCustomerFailure(error.message));
      });
  };
};

const deleteCustomerRequest = () => ({
  type: DELETE_CUSTOMER_REQUEST,
});

const deleteCustomerSuccess = (id) => ({
  type: DELETE_CUSTOMER_SUCCESS,
  payload: id,
});

const deleteCustomerFailure = (error) => ({
  type: DELETE_CUSTOMER_FAILURE,
  payload: error,
});

export {
  fetchCustomers,
  getCustomerDetails,
  createCustomer,
  updateCustomer,
  deleteCustomer,
};
