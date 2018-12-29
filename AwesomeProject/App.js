import React, { Component }from 'react';
import { View, StyleSheet } from 'react-native';

export default class JustifyContentBasics extends Component {
  render () {
    return (
      <View style={style.container}>
        <View style={{flex: 1, justifyContent:'flex-start', backgroundColor: 'red'}}>
          <View style={[style.itemSize, style.itemStyle1]} />
          <View style={[style.itemSize, style.itemStyle2]} />
          <View style={[style.itemSize, style.itemStyle3]} />
        </View>
        <View style={{flex: 1, justifyContent:'center', backgroundColor: 'green'}}>
          <View style={[style.itemSize, style.itemStyle1]} />
          <View style={[style.itemSize, style.itemStyle2]} />
          <View style={[style.itemSize, style.itemStyle3]} />
        </View>
        <View style={{flex: 1, justifyContent:'flex-end', backgroundColor: 'blue'}}>
          <View style={[style.itemSize, style.itemStyle1]} />
          <View style={[style.itemSize, style.itemStyle2]} />
          <View style={[style.itemSize, style.itemStyle3]} />
        </View>
        <View style={{flex: 1, justifyContent:'space-around', backgroundColor: 'red'}}>
          <View style={[style.itemSize, style.itemStyle1]} />
          <View style={[style.itemSize, style.itemStyle2]} />
          <View style={[style.itemSize, style.itemStyle3]} />
        </View>
        <View style={{flex: 1, justifyContent:'space-between', backgroundColor: 'green'}}>
          <View style={[style.itemSize, style.itemStyle1]} />
          <View style={[style.itemSize, style.itemStyle2]} />
          <View style={[style.itemSize, style.itemStyle3]} />
        </View>
        <View style={{flex: 1, justifyContent:'space-evenly', backgroundColor: 'blue'}}>
          <View style={[style.itemSize, style.itemStyle1]} />
          <View style={[style.itemSize, style.itemStyle2]} />
          <View style={[style.itemSize, style.itemStyle3]} />
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 30,
    marginBottom: 30,
    borderColor: 'red',
    borderWidth: 1
  },
  itemSize: {
    width: 30, 
    height: 30
  },
  itemStyle1: {
    backgroundColor: 'powderblue'
  },
  itemStyle2: {
    backgroundColor: 'skyblue'
  },
  itemStyle3: {
    backgroundColor: 'steelblue'
  }
});