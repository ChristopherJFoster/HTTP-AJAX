import React, { Component } from "react";
import axios from "axios";
import { Route, Redirect } from "react-router-dom";
import { FriendsList } from "./components/FriendsList";
import { AddFriendForm } from "./components/AddFriendForm";
import { EditFriendForm } from "./components/EditFriendForm";
import uuid from "uuid";

// I used a combination of this declaration and the spread operator throughout the file to minimize seeing this empty list:
const emptyFriend = {
  id: "",
  name: "",
  age: "",
  email: "",
  color: "",
  favefood: "",
  quotation: ""
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      potentialFriendChanges: emptyFriend,
      error: ""
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
    const tempData = emptyFriend;
    this.setState({
      potentialFriendChanges: tempData
    });
    history.push("/addfriendform");
  };

  submitFriend = (e, history) => {
    e.preventDefault();
    const id = uuid.v4();
    let age;
    this.state.potentialFriendChanges.age
      ? (age = parseInt(this.state.potentialFriendChanges.age, 10))
      : (age = "");
    let friendChanges = { ...this.state.potentialFriendChanges, id, age };
    axios
      .post("http://localhost:5000/friends", friendChanges)
      .then(res => {
        this.setState({
          friends: res.data
        });
      })
      .catch(err => {
        this.setState({ error: err });
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

  submitFriendEdits = (e, history) => {
    e.preventDefault();
    // My add/edit friend forms do not require the age field. The following allows age to be stored as a number if present, but as an empty string if not present (null causes error messages). There are probably eighteen other ways to solve this "problem", but I went with this one:
    let age;
    this.state.potentialFriendChanges.age
      ? (age = parseInt(this.state.potentialFriendChanges.age, 10))
      : (age = "");
    let friendChanges = { ...this.state.potentialFriendChanges, age };

    axios
      .put("http://localhost:5000/friends", friendChanges)
      .then(res => {
        this.setState({
          friends: res.data
        });
      })
      .catch(err => {
        this.setState({ error: err });
      });
    history.push("/friendslist");
  };

  deleteFriend = id => {
    // I figured out how to pass in the id properly:
    axios
      .delete("http://localhost:5000/friends", { data: { id } })
      .then(res => {
        this.setState({
          friends: res.data
        });
      })
      .catch(err => {
        this.setState({ error: err });
      });
    // Now that I setState properly in the .then() above, I don't need to refresh the page. I get React's rerender for free (I'm a genius!).
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
