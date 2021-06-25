import { SET_PROFILE, SET_WALLET_CONNECT } from "../types";

export const setProfileDialog = (value) => (dispatch) => {
  dispatch({
    type: SET_PROFILE,
    payload: value,
  });
};

export const setConnectWalletDialog = (value) => (dispatch) => {
  dispatch({
    type: SET_WALLET_CONNECT,
    payload: value,
  });
};
