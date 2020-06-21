export default (state = {
    title:"",
    img_url:"https://bit.ly/3djlYb4",
    artist: "",
    album: "",
    genre:"",
    key:"",
    mode: "",
    sales: 0,
    streams:0,
    bpm: 0,
    credits: "",
    structure:""
    }, action ) => {

    switch(action.type) {
        case 'UPDATED_DATA':
            return action.songFormData

        default:
            return state;
        }
    }