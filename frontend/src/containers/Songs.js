import React from 'react'

const Songs = (props) => (
<div> 
    <h1>Songs</h1>
    {props.songs.map(song => <h1>{song.name}</h1>)}
</div>
);

export default Songs;