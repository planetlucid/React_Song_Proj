export default (state = [], action) => {
    switch (action.type) {
      case "GET_SONGS_SUCCESS":
        return action.songs;

        case 'CREATE_SONG_SUCCESS':
            return state.concat(action.song);

      default:
        return state;
    }
  };