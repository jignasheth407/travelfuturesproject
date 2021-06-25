import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import store from "./store";
import ReactGA from "react-ga";
import Routes from "./Routes";
import Web3 from "web3";
import ABI from "./NftTokenABI.json";

import "./assets/scss/index.scss";
import Alert from "./components/Alert";

const App = () => {
  return (
    <Provider store={store}>
      <Alert />
      <Routes />
    </Provider>
  );
};
export default App;
