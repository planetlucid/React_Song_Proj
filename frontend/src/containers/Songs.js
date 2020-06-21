import React, {Component} from "react";

import SongCard from '../components/SongCard';
import SongForm from './SongForm';
import "./Songs.css";

class Songs extends Component {

    render () {
        return (
        <div className ="SongsContainer">
            <h1>Songs</h1>
            <SongForm/>
            {this.props.songs.map(song => <SongCard key={song.id}song={song} />)}
        
        </div>
        );
    }
}

export default Songs;
