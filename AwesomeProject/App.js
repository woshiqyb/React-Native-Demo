import React, { Component }from 'react';
import { View, Text } from 'react-native';

export default class FixedDimensionsBasics extends Component {
  render () {
    return (
      <View style={{flex: 1, paddingTop: 44}}>
        <View style={{flex: 1, borderColor: 'blue', borderWidth: 1}}>
          <Text style={{fontSize: 30, fontWeight: 'bold'}}>固定宽高:</Text>
          <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}}></View>
          <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}}></View>
          <View style={{width: 150, height: 150, backgroundColor: 'skyblue'}}></View>
        </View>
        <View style={{flex: 1, borderColor: 'red', borderWidth: 1}}>
          <Text style={{fontSize: 30, fontWeight: 'bold'}}>弹性宽高(Flex):</Text>
          <View style={{flex: 1, backgroundColor: 'powderblue'}} />
          <View style={{flex: 2, backgroundColor: 'skyblue'}} />
          <View style={{flex: 3, backgroundColor: 'steelblue'}} />
        </View>
      </View>
    );
  }
}