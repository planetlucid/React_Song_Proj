import React, { Component } from "react";

import Songs from "./Songs";
import "./App.css";

const API_URL = process.env.REACT_APP_API_URL

  class App extends Component {
  
    constructor(props) {
        super(props);

        this.state = {
        songs: []
        }   
    }

  componentDidMount() {
    fetch(`${API_URL}/songs`)
      .then((response) => response.json())
  }

  render() {
     return (
      <div className="App">
        <Songs />
      </div>
    );
  }
}

export default App;
