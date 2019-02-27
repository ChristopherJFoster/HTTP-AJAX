import React, { Component } from "react";
import axios from "axios";
import { Route, Redirect } from "react-router-dom";
import { FriendsList } from "./components/FriendsList";
import { NewFriendForm } from "./components/NewFriendForm";
import uuid from "uuid";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      potentialNewFriend: {
        id: "",
        name: "",
        age: "",
        email: "",
        color: "",
        favefood: "",
        quotation: ""
      }
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

  handleChanges = e => {
    e.preventDefault();
    let tempData = this.state.potentialNewFriend;
    tempData[e.target.name] = e.target.value;
    this.setState({
      potentialNewFriend: tempData
    });
  };

  addNewFriend = () => {
    axios
      .post("http://localhost:5000/friends", {
        id: uuid.v4(),
        name: this.state.potentialNewFriend.name,
        age: parseInt(this.state.potentialNewFriend.age, 10),
        email: this.state.potentialNewFriend.email,
        color: this.state.potentialNewFriend.color,
        favefood: this.state.potentialNewFriend.favefood,
        quotation: this.state.potentialNewFriend.quotation
      })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

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
            <NewFriendForm
              {...routeProps}
              potentialNewFriend={this.state.potentialNewFriend}
              handleChanges={this.handleChanges}
              addNewFriend={this.addNewFriend}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
