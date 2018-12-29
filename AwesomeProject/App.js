import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { blue } from 'ansi-colors';

export default class LostOfStyles extends Component {
  render () {
    return (
      <View style={style.container}>
        <Text style={style.red}>这个是红色的</Text>
        <Text style={style.bigBlue}>这个是蓝色的，而且比👆字大</Text>
        <Text style={[style.bigBlue,style.red]}>这个是红色的，和👆字一样大</Text>
        <Text style={[style.red,style.bigBlue]}>这个是蓝色的，和👆字一样大</Text>
      </View>
    );
  }
}

const style = StyleSheet.create({
  red: {
    color: '#f00'
  },
  bigBlue: {
    color: '#00f',
    fontSize: 30,
    fontWeight: 'bold'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});