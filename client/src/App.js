import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";

import { setCurrentUser, logoutUser } from "./actions/authActions";
import { clearCurrentProfile } from "./actions/profileActions";

import { Provider } from "react-redux";
import store from "./store";

import PrivateRoute from "./components/common/PrivateRoute";

import Navbar from "./components/layout/Navbar";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import NotFound from "./components/not-found/NotFound";
import ShopList from "./components/shopping/ShopList";
import Plans from "./components/plans/Plans";
import Goals from "./components/goals/Goals";

import "./App.css";

// check for token
if (localStorage.jwtToken) {
  //set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // set current user
  store.dispatch(setCurrentUser(decoded));

  // check for expired token
  const currentTime = Date.now() / 120000000;
  if (decoded.exp < currentTime) {
    // then logout user
    store.dispatch(logoutUser());
    //clear current profile
    store.dispatch(clearCurrentProfile());

    //redirect to login
    window.location.href = "/login";
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Navbar />
            <div>
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />

              <Switch>
                <PrivateRoute exact path="/shoplist" component={ShopList} />
              </Switch>

              <Switch>
                <PrivateRoute exact path="/plans" component={Plans} />
              </Switch>

              <Switch>
                <PrivateRoute exact path="/goals" component={Goals} />
              </Switch>

              <Route exact path="/not-found" component={NotFound} />
            </div>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
