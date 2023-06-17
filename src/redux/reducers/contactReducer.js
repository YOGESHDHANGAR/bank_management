import axios from "axios";
import {
  FETCH_CONTACTS_REQUEST,
  FETCH_CONTACTS_SUCCESS,
  FETCH_CONTACTS_FAILURE,
  GET_CONTACT_DETAILS_REQUEST,
  GET_CONTACT_DETAILS_SUCCESS,
  GET_CONTACT_DETAILS_FAILURE,
  CREATE_CONTACT_REQUEST,
  CREATE_CONTACT_SUCCESS,
  CREATE_CONTACT_FAILURE,
  UPDATE_CONTACT_REQUEST,
  UPDATE_CONTACT_SUCCESS,
  UPDATE_CONTACT_FAILURE,
  DELETE_CONTACT_REQUEST,
  DELETE_CONTACT_SUCCESS,
  DELETE_CONTACT_FAILURE,
} from "../constants/contactConstants";

const initialState = {
  contacts: [],
  contact: null,
  loading: false,
  error: null,
};

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CONTACTS_REQUEST:
    case GET_CONTACT_DETAILS_REQUEST:
    case CREATE_CONTACT_REQUEST:
    case UPDATE_CONTACT_REQUEST:
    case DELETE_CONTACT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_CONTACTS_SUCCESS:
      return {
        ...state,
        contacts: action.payload,
        loading: false,
        error: null,
      };
    case GET_CONTACT_DETAILS_SUCCESS:
      return {
        ...state,
        contact: action.payload,
        loading: false,
        error: null,
      };
    case CREATE_CONTACT_SUCCESS:
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
        loading: false,
        error: null,
      };
    case UPDATE_CONTACT_SUCCESS:
      return {
        ...state,
        contacts: state.contacts.map((contact) =>
          contact.id === action.payload.id ? action.payload : contact
        ),
        loading: false,
        error: null,
      };
    case DELETE_CONTACT_SUCCESS:
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
        loading: false,
        error: null,
      };
    case FETCH_CONTACTS_FAILURE:
    case GET_CONTACT_DETAILS_FAILURE:
    case CREATE_CONTACT_FAILURE:
    case UPDATE_CONTACT_FAILURE:
    case DELETE_CONTACT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default contactReducer;
