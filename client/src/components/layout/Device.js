import React, { Component } from 'react'
import {connect} from 'react-redux' 
import {setLoading, getCurrentPlaying} from '../../actions/searchActions'


export class Device extends Component {

    componentDidMount(){
        this.props.getCurrentPlaying();
    }

    render() {
        const { current_playing } =  this.props;
        console.log(current_playing)
        return (
           
            <div className="song">        
                <img src = {current_playing.image} style={{width: 100}}></img>
                <h2>  {current_playing.name } - {current_playing.artist}</h2>
                <h4>On: {current_playing.device} </h4>
            </div>
            
           
        )
    }
};

const mapStateToProps = state => ({
    loading: state.artists.loading,
    current_playing: state.artists.current_playing
})

export default connect(mapStateToProps,
    {setLoading, getCurrentPlaying}
    )(Device);



