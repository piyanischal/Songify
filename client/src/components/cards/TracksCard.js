import React, { Component } from 'react'
import playbutton from '../../assets/icons/play-button.svg'
import { connect } from 'react-redux'
import { getSongURI } from '../../actions/searchActions'
import { bindActionCreators } from 'redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faHeart as unlikeHeart } from '@fortawesome/fontawesome-free-regular';
import { faHeart as likeHeart } from '@fortawesome/fontawesome-free-solid';



export class TracksCard extends Component {

    constructor(){
        super();
        this.state = {
            isLiked: false
        }
    }

    toggleLike = isLiked =>{
        this.setState({
            isLiked: !isLiked
        })
        
    }


    onSongSelect = () => {
        this.props.getSongURI(this.props.uri);
    }

 
   
    formatTime(minutes) {
        var sign = minutes < 0 ? "-" : "";
        var min = Math.floor(Math.abs(minutes));
        var sec = Math.floor((Math.abs(minutes) * 60) % 60);
        return sign + (min < 10 ? "0" : "") + min + ":" + (sec < 10 ? "0" : "") + sec;
    }

    render() {
        const { tracks } = this.props;
        const { index } = this.props;
        const { url } = this.props;
     
        let track_time_in_mins = tracks.duration_ms / 60000;
        let playtime = this.formatTime(track_time_in_mins);
        
        return (
            <tr>
                <td><input type="image" src={playbutton} alt='play-button' className="playButton" key={index} uri={url} onClick={() => this.onSongSelect()} /> </td>
                <td>{tracks.track_number}</td>
                <td> {tracks.name} </td>
                <td><FontAwesomeIcon id={index}  className="likeButton" type="button"  uri={url} onClick={() => this.toggleLike(this.state.isLiked)} icon={ this.state.isLiked  ?  likeHeart : unlikeHeart }></FontAwesomeIcon></td>
                <td>{playtime}</td>
            </tr>
        )
    }
}

const mapStateToProps = state => ({
    loading: state.artists.loading,
    song_uri: state.artists.song_uri
})

function matchDispatchToProps(dispatch){
    return bindActionCreators({getSongURI: getSongURI}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(TracksCard);


