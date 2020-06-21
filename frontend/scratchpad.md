const songs = [
    {
        title:"New Apartment",
        img_url:"https://bit.ly/3djlYb4",
        artist: "Ari Lennox",
        album: "Shea Butter Baby",
        genre:"R&B",
        key:"G Minor",
        mode: "Pentatonic",
        sales: "700000",
        streams:"8000000",
        bpm: "95",
        credits: "alot",
        structure:"[intro, chorus, verse, bridge, outro]"
    },
    {
        title:"How Much a Dollar Cost",
        img_url:"https://bit.ly/2AUl1ss",
        artist: "Kendrick Lamar",
        album: "To Pimp A Butterfly",
        genre:"Hip-Hop",
        key:"D Minor",
        mode: "Dorian",
        sales: "1000000",
        streams:"9000000",
        bpm: "90",
        credits: "alot",
        structure:"[intro, chorus, verse, bridge, outro]"
    }
]



      <div key={song.id} className="SongCard">
        <h1>{song.title}</h1>
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