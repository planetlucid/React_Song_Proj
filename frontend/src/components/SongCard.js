import React from "react";
import SegmentAdder from "./SegmentAdder.js";

const SongCard = ({ song }) => (
  <div key={song.id} className="SongCard">
    <div className="TitleContainer">
      <h2 className="SongTitle">Song: {song.title}</h2>
      <h2>Artist: {song.artist}</h2>
    </div>
    <img className="SongImage" src={song.image_url} alt={song.name} />
    <div className="ElementsContainer">
      <p>
        <span className="Element">album:</span> <br></br>
        {song.album}
      </p>
      <p>
      <span className="Element">genre:</span> <br></br>
        {song.genre}
      </p>
      <p>
      <span className="Element">key:</span> <br></br>
        {song.key}
      </p>
      <p>
      <span className="Element">mode:</span> <br></br>
        {song.mode}
      </p>
      <p>
      <span className="Element">sales:</span> <br></br>
        {song.sales}
      </p>
      <p>
      <span className="Element">streams:</span> <br></br>
        {song.streams}
      </p>
      <p>
      <span className="Element">bpm:</span> <br></br>
        {song.bpm}
      </p>
    </div>
    <div className="SongCredits">
      <p><span className="Element">credits:</span> {song.credits}</p>
    </div>
    <div className="SegmentsContainer">
      <p><span className="Element">structure:</span> {song.structure}</p>
    </div>
    <div className="SegmentAdder">
      <SegmentAdder />
    </div>
    <div className="ButtonContainer">
      <button className="Button" type="submit">
        Delete{" "}
      </button>
      <button className="Button" type="submit">
        Edit{" "}
      </button>
      <div
        className="WrapperBgImage"
        style={{ backgroundImage: `url(${song.image_url})` }}
      ></div>
    </div>
  </div>
);

export default SongCard;
