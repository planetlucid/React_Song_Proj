const API_URL = process.env.REACT_APP_API_URL

// Action Creators
const setSongs = songs => {
    return {
        type:"GET_SONGS_SUCCESS",
        songs
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

