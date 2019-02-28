import React, { Component } from "react";
import axios from "axios";
import { Route, Redirect } from "react-router-dom";
import { FriendsList } from "./components/FriendsList";
import { NewFriendForm } from "./components/NewFriendForm";
import { EditFriendForm } from "./components/EditFriendForm";
import uuid from "uuid";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      potentialFriendChanges: {
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
    let tempData = this.state.potentialFriendChanges;
    tempData[e.target.name] = e.target.value;
    this.setState({
      potentialFriendChanges: tempData
    });
  };

  addNewFriend = () => {
    axios
      .post("http://localhost:5000/friends", {
        id: uuid.v4(),
        name: this.state.potentialFriendChanges.name,
        age: parseInt(this.state.potentialFriendChanges.age, 10),
        email: this.state.potentialFriendChanges.email,
        color: this.state.potentialFriendChanges.color,
        favefood: this.state.potentialFriendChanges.favefood,
        quotation: this.state.potentialFriendChanges.quotation
      })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  editFriend = (id, history) => {
    const friendToEdit = this.state.friends.filter(
      friend => friend.id === id
    )[0];
    this.setState({ potentialFriendChanges: friendToEdit });
    history.push("/editfriendform");
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
            <FriendsList
              {...routeProps}
              friends={this.state.friends}
              editFriend={this.editFriend}
            />
          )}
        />
        <Route
          path="/newfriendform"
          render={routeProps => (
            <NewFriendForm
              {...routeProps}
              potentialFriendChanges={this.state.potentialFriendChanges}
              handleChanges={this.handleChanges}
              addNewFriend={this.addNewFriend}
            />
          )}
        />
        <Route
          path="/editfriendform"
          render={routeProps => (
            <EditFriendForm
              {...routeProps}
              potentialFriendChanges={this.state.potentialFriendChanges}
              handleChanges={this.handleChanges}
              submitFriendEdits={this.submitFriendEdits}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
