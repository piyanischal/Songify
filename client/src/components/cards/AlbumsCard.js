import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class AlbumsCard extends Component {
    render() {
        const { album } = this.props;
        let album_cover_img = '';
        album_cover_img = album.images.length > 0 ? album.images[0]['url'] : null;
        return (
           
                <div className="album-card">
                <img src ={album_cover_img} alt={album.name}/>
                <Link to={'/tracks/' + album.id } >
                <div className="album-info">
                    <h5> {album.name} </h5>
                    <p>{album.release_date}</p>
                    <p>{album.total_tracks} Tracks</p>
                </div>
                </Link>

            </div>
        )
    }
}

export default AlbumsCard;