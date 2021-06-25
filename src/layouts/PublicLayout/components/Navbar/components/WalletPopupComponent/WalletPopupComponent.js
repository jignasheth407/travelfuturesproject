import React, { useState } from "react";
import { connect } from "react-redux";
import {
  Card,
  Button,
  CustomDialog,
  Searchbar,
  Text,
  TextBox,
} from "../../../../../../components";
import {
  setProfileDialog,
  setConnectWalletDialog,
} from "../../../../../../store/actions";

const WalletPopupComponent = (props) => {
  const handleWalletConnect = (walletName) => {
    console.log(walletName);
    props.setProfileDialog(true);
    props.setConnectWalletDialog(false);
  };

  return (
    <div>
      <div className="py-4 text-center">
        <Text size="lg">Connect Wallet</Text>
      </div>
      <div className="space-y-4">
        <Card color="blue" rounded="lg" shadow="lg">
          <div
            className="flex justify-center space-x-2 p-2 cursor-pointer"
            onClick={() => handleWalletConnect("metaMask")}
          >
            <div>
              <img src="/static/images/mask.png" width="25" />
            </div>
            <div>
              <Text>MetaMask</Text>
            </div>
          </div>
        </Card>
        <Card color="blue" rounded="lg" shadow="lg">
          <div
            className="flex justify-center space-x-2 p-2 cursor-pointer"
            onClick={() => handleWalletConnect("binance")}
          >
            <div>
              <img src="/static/images/binance.png" width="25" />
            </div>
            <div>
              <Text>Binance</Text>
            </div>
          </div>
        </Card>
        <Card color="blue" rounded="lg" shadow="lg">
          <div
            className="flex justify-center space-x-2 p-2 cursor-pointer"
            onClick={() => handleWalletConnect("walletConnect")}
          >
            <div>
              <img src="/static/images/wallet.png" width="25" />
            </div>
            <div>
              <Text>WalletConnect</Text>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default connect(null, { setProfileDialog, setConnectWalletDialog })(
  WalletPopupComponent
);
