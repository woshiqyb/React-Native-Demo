import React, { Component } from 'react';
import { Button, Alert, StyleSheet, View } from 'react-native';

export default class ButtonBasics extends Component {
  onPressButton() {
    Alert.alert('你点击了Button！')
  }

  render() {
    return(
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button onPress={this.onPressButton} title='点击我'/>
        </View>
        <View style={styles.buttonContainer}>
          <Button onPress={this.onPressButton} title="点击我" color="#841584" />
        </View>
        <View style={styles.alternativeLayoutButtonContainer}>
          <Button onPress={this.onPressButton} title="This looks great!" />
          <Button onPress={this.onPressButton} title="OK!" color="#841584" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonContainer: {
    margin: 20
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});