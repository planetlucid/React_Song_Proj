import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Songs from "./Songs";
import NavBar from "../components/NavBar.js";
import Footer from "../components/Footer.js";
import Header from "../components/Header.js";
import About from "../components/About.js";
import SongForm from "./SongForm.js";

import "./App.css";

const API_URL = process.env.REACT_APP_API_URL;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      songs: [],
      // count: 0,
    };
  }



  componentDidMount() {
    fetch(`${API_URL}/songs`).then((response) => response.json());
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="TopNav">
            <Header />
            <NavBar />
            {/* <button onClick={this.theCounter}>Click Me!</button> */}
            {this.state.count}
          </div>
          <Footer />
          <Switch>
            <Route exact path="/songs" component={Songs} />
            <Route exact path="/songs/new" component={SongForm} />
            <Route exact path="/about" component={About} />
            <Songs />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
