import React, { Component } from 'react';
import { Image, View, StyleSheet } from 'react-native';

export default class Bananas extends Component {
  render () {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <View style={style.container}>
        <Image source={pic} style={style.imageSize} />
      </View>
    );
  }
}

const style = StyleSheet.create({
  // flex布局知识点： https://www.cnblogs.com/xuyuntao/articles/6391728.html
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageSize: {
    width: 100,
    height: 100
  },
});