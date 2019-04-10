import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = {
    action: "nothing"
  };

  render() {
    return (
      <div className="app">
      <h2>{this.state.action}</h2>
        <Greeter save={this.save} delete={this.delete} />
      </div>
    );
  }

  save = () => {
    this.setState({
      action: "saving"
    })
  };
  delete = () => {
    this.setState({
      action: "deleting"
    })
  };
}

export function Greeter(props) {
  return <button onClick={props.save}>Save</button>;
}

export default App;
