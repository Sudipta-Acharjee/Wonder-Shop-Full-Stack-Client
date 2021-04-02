import React, { createContext, useState } from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Details from "./Component/Details/Details";
import Nav from "./Component/Nav/Nav";
import Checkout from "./Component/Checkout/Checkout";
import Login from "./Component/Login/Login";
import PrivateRoute from "./Component/PrivateRoute/PrivateRoute";
import Admin from "./Component/Admin/Admin";
import Orders from "./Component/Orders/Orders";

export const UserContext = createContext();

export default function BasicExample() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <p>User: {loggedInUser.email}</p>
      <Router>
        <div>
          <Nav></Nav>
          <Switch>
            <Route exact path="/">
              <Details />
            </Route>
            <PrivateRoute path="/Orders">
              <Orders />
            </PrivateRoute>
            <PrivateRoute path="/home/Checkout/:id">
              <Checkout />
            </PrivateRoute>
            <PrivateRoute path="/Admin">
              <Admin />
            </PrivateRoute>
            <Route path="/logIn">
              <Login />
            </Route>
          </Switch>
        </div>
      </Router>
    </UserContext.Provider>
  );
}
