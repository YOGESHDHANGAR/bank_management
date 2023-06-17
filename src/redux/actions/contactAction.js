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
} from "../constants/contactConstatns";

// Fetch all contacts
export const fetchContacts = () => {
  return (dispatch) => {
    dispatch(fetchContactsRequest());
    axios
      .get("/api/contacts")
      .then((response) => {
        dispatch(fetchContactsSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchContactsFailure(error.message));
      });
  };
};

const fetchContactsRequest = () => ({
  type: FETCH_CONTACTS_REQUEST,
});

const fetchContactsSuccess = (contacts) => ({
  type: FETCH_CONTACTS_SUCCESS,
  payload: contacts,
});

const fetchContactsFailure = (error) => ({
  type: FETCH_CONTACTS_FAILURE,
  payload: error,
});

// Get contact details by ID
export const getContactDetails = (id) => {
  return (dispatch) => {
    dispatch(getContactDetailsRequest());
    axios
      .get(`/api/contacts/${id}`)
      .then((response) => {
        dispatch(getContactDetailsSuccess(response.data));
      })
      .catch((error) => {
        dispatch(getContactDetailsFailure(error.message));
      });
  };
};

const getContactDetailsRequest = () => ({
  type: GET_CONTACT_DETAILS_REQUEST,
});

const getContactDetailsSuccess = (contact) => ({
  type: GET_CONTACT_DETAILS_SUCCESS,
  payload: contact,
});

const getContactDetailsFailure = (error) => ({
  type: GET_CONTACT_DETAILS_FAILURE,
  payload: error,
});

// Create a contact
export const createContact = (contactData) => {
  return (dispatch) => {
    dispatch(createContactRequest());
    axios
      .post("/api/contacts", contactData)
      .then((response) => {
        dispatch(createContactSuccess(response.data));
      })
      .catch((error) => {
        dispatch(createContactFailure(error.message));
      });
  };
};

const createContactRequest = () => ({
  type: CREATE_CONTACT_REQUEST,
});

const createContactSuccess = (contact) => ({
  type: CREATE_CONTACT_SUCCESS,
  payload: contact,
});

const createContactFailure = (error) => ({
  type: CREATE_CONTACT_FAILURE,
  payload: error,
});

// Update a contact
export const updateContact = (id, contactData) => {
  return (dispatch) => {
    dispatch(updateContactRequest());
    axios
      .put(`/api/contacts/${id}`, contactData)
      .then((response) => {
        dispatch(updateContactSuccess(response.data));
      })
      .catch((error) => {
        dispatch(updateContactFailure(error.message));
      });
  };
};

const updateContactRequest = () => ({
  type: UPDATE_CONTACT_REQUEST,
});

const updateContactSuccess = (contact) => ({
  type: UPDATE_CONTACT_SUCCESS,
  payload: contact,
});

const updateContactFailure = (error) => ({
  type: UPDATE_CONTACT_FAILURE,
  payload: error,
});

// Delete a contact
export const deleteContact = (id) => {
  return (dispatch) => {
    dispatch(deleteContactRequest());
    axios
      .delete(`/api/contacts/${id}`)
      .then(() => {
        dispatch(deleteContactSuccess(id));
      })
      .catch((error) => {
        dispatch(deleteContactFailure(error.message));
      });
  };
};

const deleteContactRequest = () => ({
  type: DELETE_CONTACT_REQUEST,
});

const deleteContactSuccess = (id) => ({
  type: DELETE_CONTACT_SUCCESS,
  payload: id,
});

const deleteContactFailure = (error) => ({
  type: DELETE_CONTACT_FAILURE,
  payload: error,
});

export {
  fetchContacts,
  getContactDetails,
  createContact,
  updateContact,
  deleteContact,
};
