import React, { Component } from 'react';
import { Platform, Alert, View, StyleSheet, Text, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback } from 'react-native';

export default class Touchables extends Component {
  _onPressButton() {
    Alert.alert('我点击了Button!')
  }

  _onLongPressButton() {
    Alert.alert('我长按了Button!')
  }

  render() {  
    return (
      <View style={styles.container}>
      {/* underlayColor 是按下去透出来的颜色，用来做点击效果*/}
        <TouchableHighlight onPress={this._onPressButton} underlayColor='white'>
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableHighlight</Text>
          </View>
        </TouchableHighlight>
        <TouchableOpacity onPress={this._onPressButton} activeOpacity={0.8} >
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableOpacity</Text>
          </View>
        </TouchableOpacity>
        <TouchableNativeFeedback onPress={this._onPressButton} background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableNativeFeedback</Text>
          </View>
        </TouchableNativeFeedback>
        {/* 长按手势的优先级高于点击手势，delayLongPress=0时，点击会被识别为长按 */}
        <TouchableWithoutFeedback onPress={this._onPressButton} onLongPress={this._onLongPressButton} delayLongPress={500}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableWithoutFeedback</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableHighlight onPress={this._onPressButton} onLongPress={this._onLongPressButton} underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>Touchable with Long Press</Text>
          </View>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    alignItems: 'center'
  },
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  buttonText: {
    padding: 20,
    color: 'white'
  }
});