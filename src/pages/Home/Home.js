import React, { useState, useEffect } from "react";
import {
  CustomDialog,
  ImageField,
  Text,
  Button,
  TextBox,
} from "../../components";
import { Products, Profile } from "./components";
import { setProfileDialog } from "../../store/actions";
import { connect } from "react-redux";

const Home = (props) => {
  useEffect(() => {
    console.log(props.isProfile);
  }, []);

  return (
    <div>
      <CustomDialog
        isOpen={props.isProfile}
        DialogComponent={Profile}
        setOpen={(val) => props.setProfileDialog(val)}
      />
      <div className="md:flex md:h-screen items-center justify-center">
        <img src="/static/images/banne.jpg" />
      </div>

      <div className="py-10">
        <Products />
      </div>
    </div>
  );
};

const mapStateToProps = ({ ui }) => ({
  isProfile: ui.isProfileDialog,
});

export default connect(mapStateToProps, { setProfileDialog })(Home);
