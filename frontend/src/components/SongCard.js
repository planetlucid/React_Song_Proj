import React from 'react'

const SongCard = ({song})=>(
    <div key={song.id} className="SongCard">
        <h2 class="SongTitle">{song.title}</h2>
        <img className="SongImage" src={song.image_url} alt={song.name} />
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
)

export default SongCard;