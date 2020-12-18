import React, { Component } from 'react'
import Table from 'react-bootstrap/Table'
import {connect} from 'react-redux'



export class LikedSongs extends Component {

    constructor(){
        super();
        this.state({
            likedSongs: [{
                title: '',
                artist:'',
                isLiked: '',
                playtime:''

            }]
        });
    }

    render() {
        return (
            <div>
                <h1 className="category-header">Liked Songs</h1>
                    <Table hover variant="dark">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Title</th>
                                <th>Artist</th>
                                <th>Playtime</th>
                            </tr>
                        </thead>
                        <tbody>
                            Working on it
                        </tbody>
                    </Table>
            </div>
        )
    }
}

const mapStateToProps = state => ({
   
});

export default connect(mapStateToProps,
   
)(LikedSongs);