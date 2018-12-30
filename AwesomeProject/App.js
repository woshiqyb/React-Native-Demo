import React, { Component } from 'react';
import { Animated, Text, View } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems:'center'}}>
        <FadeInView style={{width: 250, height: 50, backgroundColor: 'powderblue'}}>
          <Text style={{fontSize: 20, textAlign:'center', margin: 10}}>
            Fade In
          </Text>
        </FadeInView>
      </View>
    );
  }
}

class FadeInView extends Component {
  constructor(props) {
    super(props);
    // 透明度初始值设为0
    this.state = { fadeAnim: new Animated.Value(0) };
  }

  componentDidMount() {
    Animated.timing(this.state.fadeAnim, {
      toValue: 1,
      duration: 1000
    }).start();
  }

  render() {
    let {fadeAnim} = this.state;
    return (
      <Animated.View style={{
        ...this.props.style,
        opacity: fadeAnim
      }}>
        {this.props.children}
      </Animated.View>
    );
  }
}