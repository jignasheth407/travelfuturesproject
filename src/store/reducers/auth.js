import { REGISTER, REGISTER_LOADING, LOGIN_LOADING, LOGIN } from "../types";

const initialState = {
  isAuth: false,
  jwtToken: null,
  registerIsLoading: false,
  registerMessage: null,
  loginIsLoading: false,
};

const auth = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case REGISTER_LOADING:
      return {
        ...state,
        registerIsLoading: true,
      };
    case REGISTER:
      return {
        ...state,
        registerIsLoading: false,
        registerMessage: payload,
      };
    case LOGIN_LOADING:
      return {
        ...state,
        loginIsLoading: true,
      };
    case LOGIN:
      return {
        ...state,
        loginIsLoading: false,
        jwtToken: payload,
        isAuth: true,
      };
    default:
      return state;
  }
};

export default auth;
