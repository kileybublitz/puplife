import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import SignUp from "./Pages/SignUp";

import "./App.css";
import Nav from "./components/Nav/Nav";
import FooterPage from "./components/Footer/Footer";
import SearchForm from "./components/SearchForm/SearchForm";

// handlePageChange = () => {};

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/search" component={SearchForm} />
            <Route exact path="/signup" component={SignUp} />
            <Redirect from = "/signup" to= "/profile" />
          </Switch>
          <FooterPage />
        </div>
      </Router>
    );
  }
}

export default App;
