import React, { Component } from 'react';
import './App.css';
import Spotify from 'spotify-web-api-js'
import Landing from './components/layout/Landing'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import {withRouter} from 'react-router';

import ArtistPanel from './components/panels/ArtistPanel'
import TracksPanel from './components/panels/TracksPanel'
import LikedSongs from './components/panels/LikedSongs';
import Device from './components/layout/Device';
import Player from './components/layout/Player';

var spotifyWebApi = new Spotify();

class App extends Component {
  constructor(props) {
    super(props);
    const params = this.getHashParams();
    this.setAccessToken(params);

  }

  setAccessToken(params) {
    if (params.access_token) {
      spotifyWebApi.setAccessToken(params.access_token);
    }
  }

  getHashParams() {
    var hashParams = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
    while (e = r.exec(q)) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    return hashParams;
  }

  render() {
    
    return (
      
      <Router>
        <div className="App">
          <Route path="/" component={Landing} />
          <Switch>
            <Route exact path="/artist/:id" component={ withRouter(ArtistPanel)} />
          </Switch>
          <Route exact path="/tracks/:id" component={TracksPanel} />
          <Route exact path="/likedsongs/" component={ LikedSongs } />
          <Route exact path="/mydevice/" component={ Device } />
         <Route path="/" render = {props => <Player access_token ={spotifyWebApi.getAccessToken()}/>} />
        </div>
      </Router>
    );
  }
  
}



export default App;
