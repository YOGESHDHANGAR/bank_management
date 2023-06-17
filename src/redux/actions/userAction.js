import axios from "axios";
import {
  GET_ALL_USERS_REQUEST,
  GET_ALL_USERS_SUCCESS,
  GET_ALL_USERS_FAILURE,
  GET_USER_BY_ID_REQUEST,
  GET_USER_BY_ID_SUCCESS,
  GET_USER_BY_ID_FAILURE,
  CREATE_USER_REQUEST,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAILURE,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAILURE,
} from "../constants/userConstants";

// Get all users
export const getAllUsers = () => async (dispatch) => {
  dispatch({ type: GET_ALL_USERS_REQUEST });

  try {
    const res = await axios.get("/api/users");
    dispatch({
      type: GET_ALL_USERS_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.error(err);
    dispatch({ type: GET_ALL_USERS_FAILURE });
  }
};

// Get user by ID
export const getUserById = (userId) => async (dispatch) => {
  dispatch({ type: GET_USER_BY_ID_REQUEST });

  try {
    const res = await axios.get(`/api/users/${userId}`);
    dispatch({
      type: GET_USER_BY_ID_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.error(err);
    dispatch({ type: GET_USER_BY_ID_FAILURE });
  }
};

// Create user
export const createUser = (userData) => async (dispatch) => {
  dispatch({ type: CREATE_USER_REQUEST });

  try {
    const res = await axios.post("/api/users", userData);
    dispatch({
      type: CREATE_USER_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.error(err);
    dispatch({ type: CREATE_USER_FAILURE });
  }
};

// Update user
export const updateUser = (userId, userData) => async (dispatch) => {
  dispatch({ type: UPDATE_USER_REQUEST });

  try {
    const res = await axios.put(`/api/users/${userId}`, userData);
    dispatch({
      type: UPDATE_USER_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.error(err);
    dispatch({ type: UPDATE_USER_FAILURE });
  }
};

// Delete user
export const deleteUser = (userId) => async (dispatch) => {
  dispatch({ type: DELETE_USER_REQUEST });

  try {
    await axios.delete(`/api/users/${userId}`);
    dispatch({ type: DELETE_USER_SUCCESS, payload: userId });
  } catch (err) {
    console.error(err);
    dispatch({ type: DELETE_USER_FAILURE });
  }
};
