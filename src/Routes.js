import React, { lazy, Suspense } from "react";
import { Router, Switch, Route } from "react-router-dom";
import { WithLayoutRoute } from "./routers";
import { PublicLayout, SecondaryPublicLayout } from "./layouts";
import { history } from "./utils";

// const LandingPage = lazy(() => import("./pages/LandingPage"));

import Home from "./pages/Home";
import Product from "./pages/Product";

import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";
import { connect } from "react-redux";
import Collection from "./pages/Collection";
import Stores from "./pages/Stores";
import Create from "./pages/Create";

const Routes = ({ isAuth }) => {
  return (
    <Router history={history}>
      <Switch>
        <WithLayoutRoute
          exact
          path="/"
          layout={PublicLayout}
          component={Home}
        />

        <WithLayoutRoute
          exact
          path="/product"
          layout={PublicLayout}
          component={Product}
        />

        <WithLayoutRoute
          exact
          path="/my-collection"
          layout={PublicLayout}
          component={Collection}
        />

        <WithLayoutRoute
          exact
          path="/stores"
          layout={PublicLayout}
          component={Stores}
        />

        <WithLayoutRoute
          exact
          path="/create"
          layout={PublicLayout}
          component={Create}
        />

        <Route path="*" component={() => "404 NOT FOUND"} />
      </Switch>
    </Router>
  );
};

const mapStateToProps = ({ auth }) => ({
  isAuth: auth.isAuth,
});

export default connect(mapStateToProps)(Routes);
