import React, { Component } from 'react';
import { Text, TextInput, View } from 'react-native';

export default class PizzaTranslator extends Component {
  constructor(props) {
    super(props);
    this.state = { text: ''};
  }

  render () {
    return (
      <View>
        <TextInput style={{height:50, marginTop:44, borderColor:'red', borderWidth:1}} placeholder="请输入待翻译的文字" onChangeText={ (text) => {
          this.setState({text: text})
        } } />
        <Text style={{fontSize:20, fontWeight:'bold'}}>
          { this.state.text.split(' ').map((word) => word && '🍕').join(' ') }
        </Text>
      </View>
    );
  }
}