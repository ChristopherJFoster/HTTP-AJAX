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
        age: 0,
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

  // changeHandlerNested = (e, timestamp) => {
  //   e.preventDefault();
  //   const postIndex = this.state.data.findIndex(
  //     post => post.timestamp === timestamp
  //   );
  //   let tempData = [...this.state.data];
  //   // The following was very difficult to debug. Since [e.target.name] is being used as a property name here, why isn't it: tempData[postIndex].[e.target.name] (with a dot)
  //   tempData[postIndex][e.target.name] = e.target.value;
  //   this.setState({
  //     data: tempData
  //   });
  // };

  addNewFriend = () => {};

  render() {
    console.log(uuid.v4());
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
