
import React, { Component } from 'react';
import { Image, StyleSheet, Text, View, ActivityIndicator, FlatList, Alert } from 'react-native';

const REQUEST_URL = "https://raw.githubusercontent.com/facebook/react-native/0.51-stable/docs/MoviesExample.json";

class TailText extends Component {
  render() {
    return (
      <Text numberOfLines={3} style={this.props.style}>{this.props.text}</Text>
    );
  }
}
export default class MovieList extends Component {
  constructor(props){
    super(props);
    this.state = {
      isLoading: true,
      movies: []
    }
  }

  componentWillMount() {
    fetch(REQUEST_URL)
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        isLoading: false,
        movies: responseJson.movies
      });
    })
    .catch((error) => console.log(error))
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator size='large'/>
          <Text>正在加载电影数据...</Text>
        </View>
      );
    } else {
      return (
        <FlatList 
          style={styles.list} 
          data={this.state.movies} 
          renderItem={({item, index}) => 
            <View style={[styles.container, index==0?{paddingTop:30}:(index==this.state.movies.length-1?{paddingBottom:30}:{})]}>
              <Image style={[styles.thumbnail, {borderColor: 'blue', borderWidth: 1}]} source={{uri:item.posters.thumbnail}}/>
              <View style={{flex:1}}>
                <TailText style={styles.title} text={"电影名称："+item.title} />
                <TailText style={styles.year} text={"上映年份："+item.year} />
              </View>
            </View>
          } 
          keyExtractor={(item,_) => item.id}/>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: '#F5FCFF'
  },
  thumbnail: {
    width: 53,
    height: 80
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
    height: 50
  },
  list: {
    // paddingTop: 40,
    // padding: 40,
    backgroundColor: '#F5FCFF'
  }
});

const MOCKED_MOVIES_DATA = [
  {
    title: '标题',
    year: '2015',
    posters: {
      thumbnail: 'https://i.imgur.com/UePbdph.jpg'
    }
  }
];