import {resetSongForm} from './songForm'
const API_URL = process.env.REACT_APP_API_URL


// Action Creators
const setSongs = songs => {
    return {
        type:"GET_SONGS_SUCCESS",
        songs
    }
}

const addSong = song => {
  return {
    type: 'CREATE_SONG_SUCCESS',
    song
  }
} 

// Async
export const getSongs = () => {
    return   dispatch => {
        return fetch(`${API_URL}/songs`)
        .then((response) => response.json())
        .then (songs => dispatch(setSongs(songs)))
        .catch(error => console.log(error));
    }
}

export const createSong = song => {
    return dispatch => {
      return fetch(`${API_URL}/songs`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ song: song })
      })
        .then(response => response.json())
        .then(song => {
          dispatch(addSong(song))
          dispatch(resetSongForm())
        })
        .catch(error => console.log(error))
    }
  }