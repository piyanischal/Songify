import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import unknown_artist from '../../assets/icons/user-not-found.png'
import { withRouter } from 'react-router';


export class ArtistCard extends Component {

 
  componentWillReceiveProps(url){
    var currentURL = url.match.params.id;
    var newURL =  url.match.params.id;
  }


  render() {
    const { artist } = this.props;
    let artist_img = '';
    artist_img = artist.images.length > 0 ? artist.images[0]['url'] : unknown_artist;
    return (
      <Link to={'/artist/' + artist.id } >
        <div className="artists-container">
            <img src={artist_img} alt={artist.name}></img>
            <h5>{artist.name}</h5>
          </div>
      </Link>
    )
  }

}

export default withRouter(ArtistCard);
