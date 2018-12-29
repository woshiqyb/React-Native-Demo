import React, { PureComponent } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class HelloWorld extends PureComponent {
  render () {
    return (
      <View style={style.container}>
        <Text>Hello world!</Text>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
});