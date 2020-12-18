import React, { Component } from 'react'
import { connect } from 'react-redux'
import ArtistCard from '../cards/ArtistsCard'

export class ArtistPanel extends Component {
    render(){
        const { artists } = this.props;
        let content = '';
        if(artists !== undefined){
            content = artists.map((artist, index) => (<ArtistCard key={index} artist={artist}  />)); 
        }else{
            console.log('Loading..')
        }
        return (
            <div className="row">{content}</div>
        )
    }
    
}
    

const mapStateToProps = state => ({
    
    artists: state.artists.artists,

});


export default connect(mapStateToProps)(ArtistPanel);

