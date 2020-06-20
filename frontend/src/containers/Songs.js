import React from "react";
import "./Songs.css";

const Songs = (props) => (
  <div>
    <h1>Songs</h1>
    {props.songs.map((song) => (
      <div className="SongCard">
        <h1>{song.title}</h1>
        <img src={song.img_url} alt={song.name} />
        <p>artist: {song.artist}</p>
        <p>album: {song.album}</p>
        <p>genre: {song.genre}</p>
        <p>key: {song.key}</p>
        <p>mode: {song.mode}</p>
        <p>sales: {song.sales}</p>
        <p>streams: {song.streams}</p>
        <p>bpm: {song.bpm}</p>
        <p>credits: {song.credits}</p>
        <p>structure: {song.structure}</p>
      </div>
    ))}
  </div>
);

export default Songs;
