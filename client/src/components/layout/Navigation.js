import React, {Component} from 'react'
import Nav from  'react-bootstrap/Nav'
import {Link} from 'react-router-dom'

import Button from 'react-bootstrap/Button'



export class Navigation extends Component{

    render(){
        return (
            <>
                <Nav className="flex-column">
                    <Nav.Link as={Link} to='/'>Home</Nav.Link>
                    <Nav.Link as={Link} to="/likedsongs/">Liked Songs</Nav.Link>
                    <Nav.Link>Playlist</Nav.Link>
                    <Nav.Link as={Link} to="/mydevice/">My Device</Nav.Link>
                    <Nav.Link href="http://localhost:8888"><Button className="login-button"> LOGIN SPOTIFY </Button></Nav.Link>
                </Nav>
            </>
        )
    }
}




export default Navigation;