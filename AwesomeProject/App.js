import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowText: true,
      showText: 0
    };

    setInterval(() => {
      this.setState( previousState => { 
        return { 
          isShowText: !previousState.isShowText, 
          showText: previousState.showText + 0.5
        }
      });
    }, 500);
  }

  render () {
    if (!this.state.isShowText) {
      return null;
    }else {
      return (
        <View>
          <Text>{this.props.text}</Text>
          <Text>{this.state.showText}</Text>
        </View>
      );
    }
  }
}

export default class BlinkApp extends Component {
  render () {
    return (
      <View style={style.container}>
        <Blink text="1111111111"/>
        <Blink text="2222222222"/>
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