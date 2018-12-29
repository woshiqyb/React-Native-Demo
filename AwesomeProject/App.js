import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

// props: name --- required
class Greeting extends Component {
  render () {
    return (
      <Text>Hello, {this.props.name}</Text>
    );
  }
}

export default class LogsOfGreeting extends Component {
  render () {
    return (
      <View style={style.container}>
        <Greeting name='qianyb'/>
        <Greeting name='yangtq'/>
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