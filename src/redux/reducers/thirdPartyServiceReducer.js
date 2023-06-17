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

const initialState = {
  thirdPartyServices: [],
  loading: false,
  error: null,
};

const thirdPartyServiceReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_THIRD_PARTY_SERVICES_REQUEST:
    case GET_THIRD_PARTY_SERVICE_BY_ID_REQUEST:
    case CREATE_THIRD_PARTY_SERVICE_REQUEST:
    case UPDATE_THIRD_PARTY_SERVICE_REQUEST:
    case DELETE_THIRD_PARTY_SERVICE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_ALL_THIRD_PARTY_SERVICES_SUCCESS:
      return {
        ...state,
        thirdPartyServices: action.payload,
        loading: false,
        error: null,
      };
    case GET_THIRD_PARTY_SERVICE_BY_ID_SUCCESS:
    case CREATE_THIRD_PARTY_SERVICE_SUCCESS:
    case UPDATE_THIRD_PARTY_SERVICE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
      };
    case DELETE_THIRD_PARTY_SERVICE_SUCCESS:
      return {
        ...state,
        thirdPartyServices: state.thirdPartyServices.filter(
          (service) => service.id !== action.payload
        ),
        loading: false,
        error: null,
      };
    case GET_ALL_THIRD_PARTY_SERVICES_FAILURE:
    case GET_THIRD_PARTY_SERVICE_BY_ID_FAILURE:
    case CREATE_THIRD_PARTY_SERVICE_FAILURE:
    case UPDATE_THIRD_PARTY_SERVICE_FAILURE:
    case DELETE_THIRD_PARTY_SERVICE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default thirdPartyServiceReducer;
