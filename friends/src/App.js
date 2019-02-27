import React, { Component } from "react";
import axios from "axios";
import { Friend } from "./components/Friend";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    };
  }

  componentDidMount() {
    console.log("CDM now running");
    axios
      .get("http://localhost:5000/friends")
      .then(res => {
        console.log(res);
        this.setState({ friends: res.data });
      })
      .catch(err => {
        console.log(err);
        this.setState({ error: err });
      });
  }

  render() {
    return (
      <div className="App">
        {this.state.friends.map(friend => (
          <Friend friend={friend} />
        ))}
      </div>
    );
  }
}

export default App;
