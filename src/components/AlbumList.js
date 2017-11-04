import React, { Component } from 'react';
import { View, Text } from 'react-native';
import ApiUtils from '../../ApiUtils';//should move ApiUtils to src/components

class AlbumList extends Component {
  state = { albums: [] };
  componentWillMount() {
    console.log('componentWillMount start in AlbumList');
    fetch('https://rallycoding.herokuapp.com/api/music_albums')
      .then(ApiUtils.checkStatus)
      .then(response => this.setState({ albums: response.data }))
      //.then(response => response.json())
      .then(responseData => {
        console.log('responseData:', responseData);//contains loaded data
      });
  }

//  renderAlbums() {
//    return this.state.albums.map(album => <Text>{album.title}</Text>);
//  }

  render() {
    console.log('this.state:', this.state);//{albums: Array(0)}
    return (
      <View>
        <Text>blah</Text>
      </View>
    );
  }
}

export default AlbumList;
