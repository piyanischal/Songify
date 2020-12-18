/**
 * Inorder to use state inside a compoenent while using Redux we need to use connect
 * connect - connects component with the state
 * connect(mapStatesToProps, fn) (mapStatesToProps that maps state to prop), fn -> that you are using
*/
import React, { Component } from 'react'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import {connect} from 'react-redux' 
import {searchArtist, getArtist, setLoading} from '../../actions/searchActions'

export class Header extends Component {

    
    onSearchChange = event =>{
        event.preventDefault();

        this.props.searchArtist(event.target.value); 
        
    }     
   
    onSubmit = event =>{
        event.preventDefault();
        this.props.getArtist(this.props.text)
        this.props.setLoading();
    }

    render(){
        return (
            <div className="search">
                <form onSubmit={this.onSubmit}>
                    <InputGroup className="mb-3"  onChange={this.onSearchChange}>
                    <FormControl
                            placeholder="Search Artist"
                            aria-label="Artist label"
                            aria-describedby="basic-addon2"
                        />
                        <InputGroup.Append>
                            <Button variant="outline-secondary" className="search-button" type="submit"><i className="fa fa-search"></i></Button>
                        </InputGroup.Append>
                    </InputGroup>
                </form>
            </div>
           
        )
    }

}
const mapStateToProps = state =>({
    text: state.artists.text
})


export default connect(mapStateToProps, 
    {searchArtist, setLoading, getArtist}
    )(Header);