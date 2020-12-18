import {  SEARCH_ARTIST, 
    LOADING, 
    GET_ARTIST, 
    GET_ARTIST_PROFILE, 
    GET_ARTIST_ALBUMS, 
    GET_ALBUM_TRACKS, 
    GET_CURRENT_PLAYING,
    GET_SONG_URI,
} from '../actions/types';

const initialState = {
    text: '',
    artists: [],
    artist: [],
    albums: [],
    tracks: [],
    current_playing: [],
    loading: false,
    song_uri: [],
    likedSongs: []
}

export default function(state = initialState, action){
    switch(action.type){
        case SEARCH_ARTIST:
            return{
                ...state,
                text: action.payload,
                loading: false
            };
            
        case GET_ARTIST:
            return{
                ...state,
                artists: action.payload,
                loading: false
            };

        case GET_ARTIST_PROFILE:
                return{
                ...state,
                artist: action.payload,
                loading: false
                };

        case GET_ARTIST_ALBUMS:
            return{
                ...state,
                albums: action.payload,
                loading: false
        };
        case GET_ALBUM_TRACKS:
            return{
                ...state,
                tracks: action.payload,
                loading: false
        };

        case GET_CURRENT_PLAYING:
            return{
                ...state,
                current_playing: action.payload,
                loading: false
            };
        
        case GET_SONG_URI:
            return{
                ...state,
                song_uri: action.payload,
            };

    
        case LOADING:
            return {
                ...state,
                loading: true
            };
        
        default:
            return state
    }
}
