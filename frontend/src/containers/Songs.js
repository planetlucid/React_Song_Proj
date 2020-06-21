import React, { Component } from "react";
import { connect } from "react-redux";
import SongCard from "../components/SongCard";
import SongForm from "./SongForm";
import "./Songs.css";

class Songs extends Component {

  componentDidMount() {
    this.props.dispatch({
    type: 'GET_SONGS_SUCCESS',
    songs: [{ title:"test"}]
    });
  }

  render() {
    return (
      <div className="SongsContainer">
        <h1>Songs</h1>
        <SongForm />
        {this.props.songs.map((song) => (
          <SongCard key={song.id} song={song} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    songs: state.songs,
  };
};

export default connect(mapStateToProps)(Songs);
