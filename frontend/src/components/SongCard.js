import React from "react";

const SongCard = ({ song }) => (
  <div key={song.id} className="SongCard">
    <div className="WrapperBgImage" style={{backgroundImage: `url(${song.image_url})`}}>
      <div className="TitleContainer">
        <h2 className="SongTitle">Song: {song.title}</h2>
        <h2>Artist: {song.artist}</h2>
      </div>
      <img className="SongImage" src={song.image_url} alt={song.name} />
      <div className="ElementsContainer">
        <p>album: <br></br>{song.album}</p>
        <p>genre: <br></br>{song.genre}</p>
        <p>key: <br></br>{song.key}</p>
        <p>mode: <br></br>{song.mode}</p>
        <p>sales: <br></br>{song.sales}</p>
        <p>streams: <br></br>{song.streams}</p>
        <p>bpm: <br></br>{song.bpm}</p>
      </div>
      <div className="SongCredits">
        <p>credits: {song.credits}</p>
      </div>
      <div className="SegmentsContainer">
        <p>structure: {song.structure}</p>
      </div>
      <div className="ButtonContainer">
        <button className="Button" type="submit">
          Delete{" "}
        </button>
        <button className="Button" type="submit">
          Edit{" "}
        </button>
      </div>
    </div>
  </div>
);

export default SongCard;
