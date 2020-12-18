import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getArtistProfile, setLoading, getAlbumByArtist } from '../../actions/searchActions'
import { AlbumsPanel } from './AlbumsPanel';


export class ArtistPanel extends Component {

    componentDidMount() {
        this.props.getArtistProfile(this.props.match.params.id)
        this.props.getAlbumByArtist(this.props.match.params.id)
        this.props.setLoading();
    }

 

    render() {
        const { loading, artist, albums } = this.props;
        let artist_profile_image = '', artist_total_followers = '';
        if (this.props.artist.images || this.props.artist.followers) {
            artist_profile_image = artist.images[1].url;
            artist_total_followers = artist.followers.total;
        }
        let artistProfile = (
            <>
            <div className="artist-profile-panel">
                <img src={artist_profile_image} alt={artist.name} />
                <div className ="artist-profile-info">
                    <h1> <strong>{artist.name} </strong></h1>
                    <h5> {artist_total_followers} Followers</h5>
                    <button className="follow-button">FOLLOW  </button>
                </div>

            </div>
            <div className="albums-panel">
                    {loading ? null : <AlbumsPanel albums ={albums}/>} 
            </div>
            </>
        )
        let artist_content = ''
        artist_content = loading ? null : artistProfile;

        return (
            <div> {artist_content}  </div>
        )
    }
}
const mapStateToProps = state => ({
    loading: state.artists.loading,
    artist: state.artists.artist,
    albums: state.artists.albums
});

export default connect(mapStateToProps,
    {
        getArtistProfile,
        getAlbumByArtist,
        setLoading
    }
)(ArtistPanel);
