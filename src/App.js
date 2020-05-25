import React, { Component } from "react";
import "./App.css";
import Resource from "./components/Resource";
import resources from "./mock/resources";
import { Router, BrowserRouter, Switch } from "react-router";

class App extends Component {
  renderPosts = () => {
    const display = resources.map((resource) => {
      return <Resource resource={resource} />;
    });

    return display;
  };

  render() {
    return (
      <BrowserRouter>
        <Switch>
        <div className="App">
          <h1>Welcome to BrainHive!</h1>
          <div className="resourceList">{this.renderPosts()}</div>
        </div>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
