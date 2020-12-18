import { GET_ARTIST, 
    SEARCH_ARTIST, 
    LOADING, 
    GET_ARTIST_PROFILE, 
    GET_ARTIST_ALBUMS,
    GET_ALBUM_TRACKS,
    GET_CURRENT_PLAYING,
    GET_SONG_URI
 } from './types'

import Spotify from 'spotify-web-api-js';

var spotifyAPI = new Spotify();

//populates the text state as user types in the input field
export const searchArtist = text => dispatch => {
    dispatch({
        type: SEARCH_ARTIST,
        payload: text
    })
} 

//Get artist that contains name from text
export const getArtist = text => dispatch => {
    spotifyAPI.searchArtists(text).then(response => dispatch({
            type: GET_ARTIST,
            payload: response.artists.items
        }))
    
    .catch(err => console.log(err));
}

//Get single artist profile info
export const getArtistProfile = id => dispatch => {
    spotifyAPI.getArtist(id).then(response => dispatch({
            type: GET_ARTIST_PROFILE,
            payload: response
        }))
    
    .catch(err => console.log(err));
}

//Get albums from a given artist 
export const getAlbumByArtist = id => dispatch => {
    spotifyAPI.getArtistAlbums(id).then(response => dispatch({
            type: GET_ARTIST_ALBUMS,
            payload: response.items
        }))
    .catch(err => console.log(err));
}

//Get tracks from given album
export const getTracksFromAlbum = id => dispatch => {
    spotifyAPI.getAlbumTracks(id).then(response => dispatch({
            type: GET_ALBUM_TRACKS,
            payload: response.items
        }))
    
    .catch(err => console.log(err));
}

export const getCurrentPlaying = () => dispatch => {
    spotifyAPI.getMyCurrentPlaybackState().then(response => dispatch({
        type: GET_CURRENT_PLAYING,
        payload: response.item
    }))

    .catch(err => console.log(err));
}


export const getSongURI = uri =>  {
   return{
        type: GET_SONG_URI,
        payload: uri
 }
} 

export const setLoading = () => {
    return {
      type: LOADING
    };
  };
  

