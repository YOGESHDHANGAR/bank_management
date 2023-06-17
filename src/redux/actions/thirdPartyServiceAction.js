import axios from "axios";
import {
  GET_ALL_THIRD_PARTY_SERVICES_REQUEST,
  GET_ALL_THIRD_PARTY_SERVICES_SUCCESS,
  GET_ALL_THIRD_PARTY_SERVICES_FAILURE,
  GET_THIRD_PARTY_SERVICE_BY_ID_REQUEST,
  GET_THIRD_PARTY_SERVICE_BY_ID_SUCCESS,
  GET_THIRD_PARTY_SERVICE_BY_ID_FAILURE,
  CREATE_THIRD_PARTY_SERVICE_REQUEST,
  CREATE_THIRD_PARTY_SERVICE_SUCCESS,
  CREATE_THIRD_PARTY_SERVICE_FAILURE,
  UPDATE_THIRD_PARTY_SERVICE_REQUEST,
  UPDATE_THIRD_PARTY_SERVICE_SUCCESS,
  UPDATE_THIRD_PARTY_SERVICE_FAILURE,
  DELETE_THIRD_PARTY_SERVICE_REQUEST,
  DELETE_THIRD_PARTY_SERVICE_SUCCESS,
  DELETE_THIRD_PARTY_SERVICE_FAILURE,
} from "../constants/thirdPartyServiceContants";

// Get all third party services
export const getAllThirdPartyServices = () => async (dispatch) => {
  dispatch({ type: GET_ALL_THIRD_PARTY_SERVICES_REQUEST });

  try {
    const res = await axios.get("/api/third-party-services");
    dispatch({
      type: GET_ALL_THIRD_PARTY_SERVICES_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.error(err);
    dispatch({ type: GET_ALL_THIRD_PARTY_SERVICES_FAILURE });
  }
};

// Get third party service by ID
export const getThirdPartyServiceById = (serviceId) => async (dispatch) => {
  dispatch({ type: GET_THIRD_PARTY_SERVICE_BY_ID_REQUEST });

  try {
    const res = await axios.get(`/api/third-party-services/${serviceId}`);
    dispatch({
      type: GET_THIRD_PARTY_SERVICE_BY_ID_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.error(err);
    dispatch({ type: GET_THIRD_PARTY_SERVICE_BY_ID_FAILURE });
  }
};

// Create third party service
export const createThirdPartyService = (serviceData) => async (dispatch) => {
  dispatch({ type: CREATE_THIRD_PARTY_SERVICE_REQUEST });

  try {
    const res = await axios.post("/api/third-party-services", serviceData);
    dispatch({
      type: CREATE_THIRD_PARTY_SERVICE_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.error(err);
    dispatch({ type: CREATE_THIRD_PARTY_SERVICE_FAILURE });
  }
};

// Update third party service
export const updateThirdPartyService =
  (serviceId, serviceData) => async (dispatch) => {
    dispatch({ type: UPDATE_THIRD_PARTY_SERVICE_REQUEST });

    try {
      const res = await axios.put(
        `/api/third-party-services/${serviceId}`,
        serviceData
      );
      dispatch({
        type: UPDATE_THIRD_PARTY_SERVICE_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      console.error(err);
      dispatch({ type: UPDATE_THIRD_PARTY_SERVICE_FAILURE });
    }
  };

// Delete third party service
export const deleteThirdPartyService = (serviceId) => async (dispatch) => {
  dispatch({ type: DELETE_THIRD_PARTY_SERVICE_REQUEST });

  try {
    await axios.delete(`/api/third-party-services/${serviceId}`);
    dispatch({ type: DELETE_THIRD_PARTY_SERVICE_SUCCESS, payload: serviceId });
  } catch (err) {
    console.error(err);
    dispatch({ type: DELETE_THIRD_PARTY_SERVICE_FAILURE });
  }
};
