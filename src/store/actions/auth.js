import axios from "axios";
import { REGISTER_LOADING, REGISTER, LOGIN_LOADING, LOGIN } from "../types";
import { setAlert } from "./alert";
import { axiosInstance } from "./axiosInterceptor";

export const register = (formData) => async (dispatch) => {
  dispatch({ type: REGISTER_LOADING });
  try {
    const result = await axiosInstance.post(
      "/api/v1/user/addRegistration",
      formData
    );
    dispatch({ type: REGISTER, payload: result.data.response_message });
    console.log(result.data);
    dispatch(setAlert(result.data.response_message, "success", 5000));
  } catch (error) {
    console.log(error);
  }
};

export const login = (formData) => async (dispatch) => {
  console.log(formData);
  dispatch({ type: LOGIN_LOADING });
  try {
    const result = await axiosInstance.post("/api/v1/user/login", formData);
    dispatch({ type: LOGIN, payload: result.data.result.token });
    localStorage.setItem("jwtToken", result.data.result.token);
    console.log(result.data);
    dispatch(setAlert(result.data.response_message, "success", 5000));
  } catch (error) {
    console.log(error);
  }
};
