import React, { useState } from "react";
import { connect } from "react-redux";
import {
  Card,
  Button,
  CustomDialog,
  Searchbar,
  Text,
  TextBox,
} from "../../../../components";
import { Drawer, SearchSlide, WalletPopupComponent } from "./components";
import {
  register,
  login,
  setConnectWalletDialog,
} from "../../../../store/actions";
import { history } from "../../../../utils";

const Navbar = (props) => {
  const [drawer, setDrawer] = useState(false);
  const [searchSlide, setSearchSlide] = useState(false);

  const handleDrawer = () => {
    setDrawer(true);
  };

  const handleSearchSlide = () => {
    setSearchSlide(true);
  };

  const drawerClose = () => {
    setDrawer(false);
  };

  const sliderClose = () => {
    setSearchSlide(false);
  };

  const handleRoute = (route) => {
    history.push(route);
  };

  const handleLoginClick = () => {
    // login click function
  };

  return (
    <div className="fixed w-full">
      <Drawer isOpen={drawer} close={drawerClose} />

      <CustomDialog
        isOpen={props.isWalletConnectDialog}
        size="xs"
        fullWidth={true}
        DialogComponent={WalletPopupComponent}
        setOpen={(val) => props.setConnectWalletDialog(val)}
      />

      <SearchSlide isOpen={searchSlide} close={sliderClose} />
      <nav className="bg-gray-900 py-6 md:block hidden">
        <div className="flex justify-between items-center px-12">
          <div>
            <img src="/static/images/mainlogo.png" width="80" />
            <img src="/static/images/logo.png" width="120" />
          </div>
          <div>
            <Searchbar placeholder="Search..." />
          </div>
          <ul className="flex space-x-6">
            <li onClick={() => handleRoute("/")} className="cursor-pointer">
              <Text variant="white">Marketplace</Text>
            </li>
            <li
              onClick={() => handleRoute("/stores")}
              className="cursor-pointer"
            >
              <Text variant="white">Stores</Text>
            </li>
            <li
              onClick={() => handleRoute("/my-collection")}
              className="cursor-pointer"
            >
              <Text variant="white">My Collection</Text>
            </li>
            <li
              onClick={() => handleRoute("/create")}
              className="cursor-pointer"
            >
              <Text variant="white">Create</Text>
            </li>
          </ul>

          <div>
            <div>
              <Button
                rounded="full"
                color="primary"
                variant="primary200"
                onClick={handleLoginClick}
              >
                Login
              </Button>
            </div>
          </div>

          <div>
            <Button
              rounded="full"
              color="primary"
              variant="primary200"
              onClick={() => props.setConnectWalletDialog(true)}
            >
              Connect Wallet
            </Button>
          </div>
        </div>
      </nav>

      <nav
        className="gradient-bg py-6 md:hidden block"
        style={{ zIndex: 9999 }}
      >
        <div className="flex justify-between px-4">
          <div>
            <Text variant="white">LOGO</Text>
          </div>
          <div className="flex space-x-6">
            <div onClick={handleSearchSlide}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <div onClick={handleDrawer}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

const mapStateToProps = ({ auth, ui }) => ({
  registerIsLoading: auth.registerIsLoading,
  registerMessage: auth.registerMessage,
  isAuth: auth.isAuth,
  isWalletConnectDialog: ui.isWalletDialog,
});

export default connect(mapStateToProps, {
  register,
  login,
  setConnectWalletDialog,
})(Navbar);
