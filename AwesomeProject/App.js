import React, { Component } from 'react';
import { NativeModules, LayoutAnimation, Text, TouchableOpacity, StyleSheet, View } from 'react-native';

const { UIManager } = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental 
&& UIManager.setLayoutAnimationEnabledExperimental(true);

const INITIAL_W = 100;
const INITIAL_H = 100;
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      w: INITIAL_W,
      h: INITIAL_H
    };
    this._onPress = this._onPress.bind(this);
  }

  _onPress() {
    LayoutAnimation.spring();
    this.setState((prevState) => ({
      w: prevState.w + 15,
      h: prevState.h + 15
    }));
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.box, {width: this.state.w, height: this.state.h}]} />
        <TouchableOpacity onPress={this._onPress}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Press me!</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
          LayoutAnimation.easeInEaseOut();
          this.setState({
            w: INITIAL_W,
            h: INITIAL_H
          });
        }}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Reset style!</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 200,
    height: 200,
    backgroundColor: 'red',
  },
  button: {
    backgroundColor: 'black',
    width: 100,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});