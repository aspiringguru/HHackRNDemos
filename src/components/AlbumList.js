import React, { Component } from 'react';
import { View, Text } from 'react-native';
import ApiUtils from '../../ApiUtils';
//import axios from 'axios';//removed because axios keep crashing the app.

class AlbumList extends Component {
  state = { albums: [] };
  //componentWillMount is a lifecyle method.
  //https://reactjs.org/docs/react-component.html
  componentWillMount() {
    console.log('componentWillMount start in AlbumList');
    fetch('https://rallycoding.herokuapp.com/api/music_albums')
    //.then(ApiUtils.checkStatus)
    //.then((response) => response.json())
    //.then((responseData) => { console.log(responseData); });
    .then(response => this.setState({ albums: response.data }));
    //setState update component state, rerender.
    //.then(data => this.setState({ albums: data }));
    //do not need to import fetch. linter does not like this. why?
    //alternative method
    //fetch('https://rallycoding.herokuapp.com/api/music_albums')
    //.then(response => response.json())
    //.then(responseData) => {
    //  console.log(responseData);
    //}

    //axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    //  .then(response => console.log(response));
    console.log('componentWillMount end in AlbumList');
  }

  render() {
    console.log(this.state);
    return (
      <View>
        <Text>Album List!!!!</Text>

      </View>
    );
  }
}

export default AlbumList;
