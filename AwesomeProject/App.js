import React, { Component } from 'react';
import { FlatList, ActivityIndicator, Alert, Text, View } from 'react-native';

export default class FetchExample extends Component {

  constructor(props) {
    super(props);
    this.state = { isLoading: true, dataSource: [] };
  }

  componentWillMount() {
    // fetch('https://facebook.github.io/react-native/movies.json')
    Promise.race([
      fetch('https://facebook.github.io/react-native/movies.json'),
      new Promise((_, reject) => {
        setTimeout(() => {
          reject();
        }, 1000);
      })
    ])
    .then((response) => {
      return response.json();
    })
    .then((responseJson) => {
      this.setState({
        isLoading: false,
        dataSource: responseJson.movies
      });
    })
    .catch( error => {
      this.setState({
        isLoading: false,
        dataSource: []
      });
    });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, padding: 30, backgroundColor: 'red'}}>
          <ActivityIndicator />
        </View>
      );
    } else {
      return (
        <View style={{flex: 1, padding: 30, backgroundColor: 'white'}}>
          <FlatList 
            data={this.state.dataSource} 
            renderItem={({item}) => 
              <Text>{item.title}, {item.releaseYear}</Text>
            }
            keyExtractor={(item, i) => item.id}/>
        </View>
      );
    }
  }
}