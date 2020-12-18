import React, { Component } from 'react'
import TracksCard from '../cards/TracksCard'
import { connect } from 'react-redux';
import { getTracksFromAlbum, setLoading } from '../../actions/searchActions'
import Table from 'react-bootstrap/Table'


export class TracksPanel extends Component {
    componentDidMount() {
        this.props.getTracksFromAlbum(this.props.match.params.id)
        this.props.setLoading();
    }
    render() {
        const { tracks } = this.props;
        const { albums } = this.props;

        let tracks_content = '';

        if (tracks !== undefined) {
            tracks_content = tracks.map((tracks, index) => (<TracksCard key={index} tracks={tracks} albums={albums} uri={tracks.uri} />));

        } else {
            console.log('Loading..')
        }
        return (
            <>
                <h1 className="category-header">Tracks</h1>
                
                <Table hover variant="dark">
                    <thead>
                        
                        <tr>
                        <th></th>
                            <th>#</th>
                            <th>Title</th>
                            <th></th>
                            <th>Playtime</th>
                        </tr>
                    </thead>
                    <tbody>
                      { tracks_content }
                    </tbody>
                </Table>
            </>
        )
    }
}

const mapStateToProps = state => ({
    loading: state.artists.loading,
    albums: state.artists.albums,
    tracks: state.artists.tracks
});

export default connect(mapStateToProps,
    {
        getTracksFromAlbum,
        setLoading
    }
)(TracksPanel);