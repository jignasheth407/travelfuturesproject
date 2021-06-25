import { SET_PROFILE, SET_WALLET_CONNECT } from "../types";

const initialState = {
  isProfileDialog: false,
  isWalletDialog: false,
};

const ui = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_PROFILE:
      return {
        ...state,
        isProfileDialog: payload,
      };

    case SET_WALLET_CONNECT:
      return {
        ...state,
        isWalletDialog: payload,
      };

    default:
      return state;
  }
};

export default ui;
