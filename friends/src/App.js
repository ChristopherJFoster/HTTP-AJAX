import React, { Component } from "react";
import axios from "axios";
import { Route, Redirect } from "react-router-dom";
import { FriendsList } from "./components/FriendsList";
import { NewFriendForm } from "./components/NewFriendForm";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(res => {
        this.setState({ friends: res.data });
      })
      .catch(err => {
        this.setState({ error: err });
      });
  }

  addNewFriend = () => {};

  render() {
    return (
      <div className="App">
        <Route
          exact
          path="/"
          component={() => <Redirect to="/friendslist" />}
        />
        <Route
          exact
          path="/friendslist"
          render={routeProps => (
            <FriendsList {...routeProps} friends={this.state.friends} />
          )}
        />
        <Route
          path="/newfriendform"
          render={routeProps => (
            <NewFriendForm {...routeProps} addNewFriend={this.addNewFriend} />
          )}
        />
      </div>
    );
  }
}

export default App;
