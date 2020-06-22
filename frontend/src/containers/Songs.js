import React, { Component } from "react";
import { connect } from "react-redux";
import {getSongs} from '../actions/songs'
import SongCard from "../components/SongCard";
import SongForm from "./SongForm";
import "./Songs.css";

class Songs extends Component {

  componentDidMount() {
      this.props.getSongs()
  }

  render() {
    return (
      <div className="SongsContainer">
        {/* <SongForm /> */}
        <h1>Songs</h1>
        {this.props.songs.map(song => <SongCard key={song.id} song={song} />)}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    songs: state.songs,
  };
};

export default connect(mapStateToProps, {getSongs})(Songs);
