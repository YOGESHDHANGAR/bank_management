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

// Create KYC document
export const createKYCDocument = (documentData) => async (dispatch) => {
  dispatch({ type: CREATE_KYC_DOCUMENT_REQUEST });

  try {
    const res = await axios.post("/api/kyc-documents", documentData);
    dispatch({
      type: CREATE_KYC_DOCUMENT_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.error(err);
    dispatch({ type: CREATE_KYC_DOCUMENT_FAILURE });
  }
};

// Get all KYC documents
export const getAllKYCDocuments = () => async (dispatch) => {
  dispatch({ type: GET_ALL_KYC_DOCUMENTS_REQUEST });

  try {
    const res = await axios.get("/api/kyc-documents");
    dispatch({
      type: GET_ALL_KYC_DOCUMENTS_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.error(err);
    dispatch({ type: GET_ALL_KYC_DOCUMENTS_FAILURE });
  }
};

// Get KYC document by ID
export const getKYCDocumentById = (id) => async (dispatch) => {
  dispatch({ type: GET_KYC_DOCUMENT_BY_ID_REQUEST });

  try {
    const res = await axios.get(`/api/kyc-documents/${id}`);
    dispatch({
      type: GET_KYC_DOCUMENT_BY_ID_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.error(err);
    dispatch({ type: GET_KYC_DOCUMENT_BY_ID_FAILURE });
  }
};

// Update KYC document
export const updateKYCDocument = (id, documentData) => async (dispatch) => {
  dispatch({ type: UPDATE_KYC_DOCUMENT_REQUEST });

  try {
    const res = await axios.put(`/api/kyc-documents/${id}`, documentData);
    dispatch({
      type: UPDATE_KYC_DOCUMENT_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.error(err);
    dispatch({ type: UPDATE_KYC_DOCUMENT_FAILURE });
  }
};

// Delete KYC document
export const deleteKYCDocument = (id) => async (dispatch) => {
  dispatch({ type: DELETE_KYC_DOCUMENT_REQUEST });

  try {
    await axios.delete(`/api/kyc-documents/${id}`);
    dispatch({ type: DELETE_KYC_DOCUMENT_SUCCESS, payload: id });
  } catch (err) {
    console.error(err);
    dispatch({ type: DELETE_KYC_DOCUMENT_FAILURE });
  }
};
