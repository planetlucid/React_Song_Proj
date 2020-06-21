// ** Action Creators **
export const updateSongFormData = songFormData => {
    return {
      type: 'UPDATED_DATA',
      songFormData
    }
  }
  
  export const resetSongForm = () => {
    return {
      type: 'RESET_SURFBOARD_FORM'
    }
  }