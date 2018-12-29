import React, { Component } from 'react';
import { FlatList, Alert, SectionList, View, StyleSheet, Text } from 'react-native';

export default class FlatListBasics extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{backgroundColor:'red', marginTop: 30, color:'white'}}>FlatList</Text>
        <FlatList 
          data={
            [{key: 'Devin'},
            {key: 'Jackson'},
            {key: 'James'},
            {key: 'Joel'},
            {key: 'John'},
            {key: 'Jillian'},
            {key: 'Jimmy'},
            {key: 'Julie'}]} 
            // 此处需要使用'{item}'解构拿到参数，
            // 因为renderItem传入的实际是一个对象{item: ItemT;index: number;separators: {};}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>} />
        <Text style={{backgroundColor:'red', marginTop: 30, color:'white'}}>SectionList</Text>
        <SectionList 
          sections={
            [ {title: 'D', data: ['Devin']},
              {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']}
            ]
          } 
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>} 
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(_, index) => index}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  }
});