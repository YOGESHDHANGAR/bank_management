import axios from "axios";
import {
  GET_ALL_ROLES_REQUEST,
  GET_ALL_ROLES_SUCCESS,
  GET_ALL_ROLES_FAILURE,
  GET_ROLE_BY_ID_REQUEST,
  GET_ROLE_BY_ID_SUCCESS,
  GET_ROLE_BY_ID_FAILURE,
  CREATE_ROLE_REQUEST,
  CREATE_ROLE_SUCCESS,
  CREATE_ROLE_FAILURE,
  UPDATE_ROLE_REQUEST,
  UPDATE_ROLE_SUCCESS,
  UPDATE_ROLE_FAILURE,
  DELETE_ROLE_REQUEST,
  DELETE_ROLE_SUCCESS,
  DELETE_ROLE_FAILURE,
} from "../constants/roleConstants";

// Get all roles
export const getAllRoles = () => async (dispatch) => {
  dispatch({ type: GET_ALL_ROLES_REQUEST });

  try {
    const res = await axios.get("/api/roles");
    dispatch({
      type: GET_ALL_ROLES_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.error(err);
    dispatch({ type: GET_ALL_ROLES_FAILURE });
  }
};

// Get role by ID
export const getRoleById = (roleId) => async (dispatch) => {
  dispatch({ type: GET_ROLE_BY_ID_REQUEST });

  try {
    const res = await axios.get(`/api/roles/${roleId}`);
    dispatch({
      type: GET_ROLE_BY_ID_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.error(err);
    dispatch({ type: GET_ROLE_BY_ID_FAILURE });
  }
};

// Create role
export const createRole = (roleData) => async (dispatch) => {
  dispatch({ type: CREATE_ROLE_REQUEST });

  try {
    const res = await axios.post("/api/roles", roleData);
    dispatch({
      type: CREATE_ROLE_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.error(err);
    dispatch({ type: CREATE_ROLE_FAILURE });
  }
};

// Update role
export const updateRole = (roleId, roleData) => async (dispatch) => {
  dispatch({ type: UPDATE_ROLE_REQUEST });

  try {
    const res = await axios.put(`/api/roles/${roleId}`, roleData);
    dispatch({
      type: UPDATE_ROLE_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.error(err);
    dispatch({ type: UPDATE_ROLE_FAILURE });
  }
};

// Delete role
export const deleteRole = (roleId) => async (dispatch) => {
  dispatch({ type: DELETE_ROLE_REQUEST });

  try {
    await axios.delete(`/api/roles/${roleId}`);
    dispatch({ type: DELETE_ROLE_SUCCESS, payload: roleId });
  } catch (err) {
    console.error(err);
    dispatch({ type: DELETE_ROLE_FAILURE });
  }
};
