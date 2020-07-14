import React from 'react';
import './App.css';

import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

class App extends React.Component {
  constructor(props){
    super(props);
    
    this.state = {
      searchResults : [{name: 'name1', artist: 'artist1', album: 'album1', id: 1},
      {name: 'name2', artist: 'artist3', album: 'album1', id: 3},
      {name: 'name4', artist: 'artist4', album: 'album2', id: 4}],
      playlistName : 'My favorite list',
      playlistTracks : [{name: 'Attention', artist: 'Cherlie puth', album : 'Priyo', id: 2}]
    }

    this.addTrack =this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }

  addTrack(track){
    let tracks = this.state.playlistTracks;
    if (tracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }
    else {
      tracks.push(track);
      this.setState({playlistTracks : tracks});
    }
  }

  removeTrack(track) {
    let tracks = this.state.playlistTracks;
    tracks = tracks.filter(currentTrack => currentTrack.id !== track.id)

    this.setState({playlistTracks : tracks});
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults = {this.state.searchResults} 
            onAdd= {this.addTrack} />
            <Playlist onRemove= {this.removeTrack} 
                 playlistName = {this.state.playlistName} 
                  playlistTracks = {this.state.playlistTracks} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
