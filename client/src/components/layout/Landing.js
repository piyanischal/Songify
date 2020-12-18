import React, {Component} from 'react';
import  ArtistsPanel  from '../panels/ArtistsPanel';
import { connect } from 'react-redux';
import Header from './Header'
import Navigation from './Navigation'

export class Landing extends Component {
    render(){
        const {loading} = this.props;
        return(
            <div className="grid-container">
                <div className="left-grid-container">
                    <Navigation/>
                </div>
                <div className="right-grid-container">
                    <Header/>
                    <div>
                        {loading ? null : <ArtistsPanel/>} 
                    </div>
                </div>
            </div>
          
        )    
    }
    
    
};
const mapStateToProps = state => ({
    loading: state.artists.loading
})

export default connect(mapStateToProps)(Landing);
