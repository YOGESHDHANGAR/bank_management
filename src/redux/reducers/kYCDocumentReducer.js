import axios from "axios";
import {
  CREATE_KYC_DOCUMENT_REQUEST,
  CREATE_KYC_DOCUMENT_SUCCESS,
  CREATE_KYC_DOCUMENT_FAILURE,
  GET_ALL_KYC_DOCUMENTS_REQUEST,
  GET_ALL_KYC_DOCUMENTS_SUCCESS,
  GET_ALL_KYC_DOCUMENTS_FAILURE,
  GET_KYC_DOCUMENT_BY_ID_REQUEST,
  GET_KYC_DOCUMENT_BY_ID_SUCCESS,
  GET_KYC_DOCUMENT_BY_ID_FAILURE,
  UPDATE_KYC_DOCUMENT_REQUEST,
  UPDATE_KYC_DOCUMENT_SUCCESS,
  UPDATE_KYC_DOCUMENT_FAILURE,
  DELETE_KYC_DOCUMENT_REQUEST,
  DELETE_KYC_DOCUMENT_SUCCESS,
  DELETE_KYC_DOCUMENT_FAILURE,
} from "../constants/kYCDocumentConstants";

const initialState = {
  kycDocuments: [],
  kycDocument: null,
  loading: false,
  error: null,
};

const kYCDocumentReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_KYC_DOCUMENT_REQUEST:
    case GET_ALL_KYC_DOCUMENTS_REQUEST:
    case GET_KYC_DOCUMENT_BY_ID_REQUEST:
    case UPDATE_KYC_DOCUMENT_REQUEST:
    case DELETE_KYC_DOCUMENT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case CREATE_KYC_DOCUMENT_SUCCESS:
      return {
        ...state,
        kycDocuments: [...state.kycDocuments, action.payload],
        loading: false,
        error: null,
      };
    case GET_ALL_KYC_DOCUMENTS_SUCCESS:
      return {
        ...state,
        kycDocuments: action.payload,
        loading: false,
        error: null,
      };
    case GET_KYC_DOCUMENT_BY_ID_SUCCESS:
      return {
        ...state,
        kycDocument: action.payload,
        loading: false,
        error: null,
      };
    case UPDATE_KYC_DOCUMENT_SUCCESS:
      return {
        ...state,
        kycDocuments: state.kycDocuments.map((kycDocument) =>
          kycDocument.id === action.payload.id ? action.payload : kycDocument
        ),
        loading: false,
        error: null,
      };
    case DELETE_KYC_DOCUMENT_SUCCESS:
      return {
        ...state,
        kycDocuments: state.kycDocuments.filter(
          (kycDocument) => kycDocument.id !== action.payload
        ),
        loading: false,
        error: null,
      };
    case CREATE_KYC_DOCUMENT_FAILURE:
    case GET_ALL_KYC_DOCUMENTS_FAILURE:
    case GET_KYC_DOCUMENT_BY_ID_FAILURE:
    case UPDATE_KYC_DOCUMENT_FAILURE:
    case DELETE_KYC_DOCUMENT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default kYCDocumentReducer;
