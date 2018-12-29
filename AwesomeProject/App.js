import React, { Component }from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class FlexDirectionBasics extends Component {
  render () {
    return (
      <View style={style.container}>
        <View style={[style.container, style.subContainer]}>
          <View style={[style.itemSize, {backgroundColor: 'powderblue'}]} />
          <View style={[style.itemSize, {backgroundColor: 'skyblue', height: 50}]} />
          <View style={[style.itemSize, {backgroundColor: 'steelblue'}]} />
        </View>
        <View style={[style.container, style.subContainer]}>
          <View style={[style.itemSize, {backgroundColor: 'powderblue'}]} />
          <View style={[style.itemSize, {backgroundColor: 'skyblue', height: 50}]} />
          <View style={[style.itemSize, {backgroundColor: 'steelblue'}]} />
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1, 
    margin: 10, 
    backgroundColor: 'black',
    borderColor: 'black', 
    borderWidth: 1, 
    borderRadius: 44
  },
  subContainer: {
    backgroundColor: 'white',
    // 默认是column
    flexDirection: 'row',
    borderColor: 'blue',
    borderRadius: 0
  },
  itemSize: {
    width: 50,
    flex: 1
  }
});