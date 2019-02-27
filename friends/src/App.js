import React, { Component } from "react";
import axios from "axios";
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
    // http://localhost:3333 is the address to the server doorstep
    // /items is the "endpoint"
    axios
      .get("http://localhost:5000/friends")
      .then(res => {
        console.log(res);
        this.setState({ friends: res.data });
      })
      .catch(err => {
        console.log(err);
        // this.setState({ error: err });
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header" />
      </div>
    );
  }
}

export default App;
