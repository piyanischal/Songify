import React, { Component } from 'react'
import { connect } from 'react-redux';
import  AlbumsCard  from '../cards/AlbumsCard';

export class AlbumsPanel extends Component {
 
    render() {
        const { albums } = this.props;
        let albums_content = '';
        if(albums !== undefined){
            albums_content = albums.map((album, index) => (<AlbumsCard key={index} album={album}  />)); 
        }else{
            console.log('Loading..')
        }
        return (
            <>
                <h1 className="category-header">Albums</h1>
                <div className="row">
                    { albums_content }
                </div>
            </>
        )
    }
}
const mapStateToProps = state => ({
    albums: state.artists.albums
})

export default connect(mapStateToProps)(AlbumsPanel)
