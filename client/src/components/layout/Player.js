import React, { Component } from 'react'
import SpotifyPlayer from 'react-spotify-web-playback'
import {connect} from 'react-redux'



export class Player extends Component {

    render() {
        const { access_token, song_uri  } = this.props;
        return (
            <div className="audio-player"> 
                <SpotifyPlayer 
                token = { access_token }
                uris = {song_uri}
                />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    loading: state.artists.loading,
    song_uri: state.artists.song_uri
})



export default connect(mapStateToProps)(Player);

