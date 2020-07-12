import React, { Component } from "react";
import { connect } from "react-redux";
import { getSongs } from "../actions/songs";
import SongCard from "../components/SongCard";
import "./Songs.css";


class Songs extends Component {
  componentDidMount() {
    this.props.getSongs();
  }

  render() {
    return (
      <div className="SongsContainer">
        <h1>Songs</h1>
        {this.props.songs.map((song) => (
          <SongCard key={song.id} song={song} />
        ))}
      </div>
    );
  }
}

//gets the redux state as a parameter and returns an object
const mapStateToProps = (state) => {
  return {
    songs: state.songs,
  };
};

//action creator is getsongs that is being dispatched with mapDispatchtoProps
export default connect(mapStateToProps, { getSongs })(Songs);
