import React, { createContext } from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.10.0";

// pages for this product
import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import Announcement from "views/Components/Announcement/Announcement.js";
import Store from './store';


var hist = createBrowserHistory();


const store = new Store()

const State = {
  store: Store
}

export const Context = createContext({
  store,
})


ReactDOM.render(
  <Context.Provider value={{ store }}>

    <Router history={hist}>
      <Switch>
        <Route path="/landing-page/:id" component={LandingPage} />
        <Route path="/announcement" component={Announcement} />
        <Route path="/profile-page" component={ProfilePage} />
        <Route path="/login-page" component={LoginPage} />
        <Route path="/" component={Components} />
      </Switch>
    </Router>,
  </Context.Provider>,
  document.getElementById("root")
);
