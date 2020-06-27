const initialState = {
  title: "",
  img_url: "",
  artist: "",
  album: "",
  genre: "",
  key: "",
  mode: "",
  sales: 0,
  streams: 0,
  bpm: 0,
  credits: "",
  structure: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "UPDATED_DATA":
      return action.songFormData;

    case "RESET_SONG_FORM":
      return initialState;

    default:
      return state;
  }
};
