import React, { Component } from "react";
import axios from "axios";
import { Route, Redirect } from "react-router-dom";
import { FriendsList } from "./components/FriendsList";
import { AddFriendForm } from "./components/AddFriendForm";
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

  addFriend = history => {
    const tempData = {
      id: "",
      name: "",
      age: "",
      email: "",
      color: "",
      favefood: "",
      quotation: ""
    };
    this.setState({
      potentialFriendChanges: tempData
    });
    history.push("/addfriendform");
  };

  submitFriend = history => {
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
    history.push("/friendslist");
  };

  editFriend = (id, history) => {
    // Cases in which some code needs to be executed immediately prior to loading a component/page seem like good candidates for using history to route to a new url (instead of <a>, <Link>, or <NavLink>). It was fun working out first _that_ I needed to pass the history object down to the Friend component, and then working out _how_ (since the Friend component does not have its own Route).
    const friendToEdit = this.state.friends.filter(
      friend => friend.id === id
    )[0];
    this.setState({ potentialFriendChanges: friendToEdit });
    history.push("/editfriendform");
  };

  submitFriendEdits = history => {
    axios
      .put("http://localhost:5000/friends", {
        id: this.state.potentialFriendChanges.id,
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
    history.push("/friendslist");
  };

  deleteFriend = (id, history) => {
    console.log(id);
    axios
      .delete("http://localhost:5000/friends", {
        id: id
      })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
    history.push("/friendslist");
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
              addFriend={this.addFriend}
              editFriend={this.editFriend}
              deleteFriend={this.deleteFriend}
            />
          )}
        />
        <Route
          path="/addfriendform"
          render={routeProps => (
            <AddFriendForm
              {...routeProps}
              potentialFriendChanges={this.state.potentialFriendChanges}
              handleChanges={this.handleChanges}
              submitFriend={this.submitFriend}
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
