import React, { Component } from "react";

import Songs from "./Songs";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      songs: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:3001/api/songs")
      .then((response) => response.json())
      .then((songs) => this.setState({ songs }));
  }

  render() {
     return (
      <div className="App">
        <Songs songs={this.state.songs} />
      </div>
    );
  }
}

export default App;
