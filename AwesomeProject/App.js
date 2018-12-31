import React, { Component } from 'react';
import { Text, StatusBar, TouchableOpacity, View, TextInput, Button, Alert, KeyboardAvoidingView, StyleSheet } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  _submit () {
    Alert.alert('haha');
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.header}>
          <Text style={styles.description}>
            改善用戶体验的demo
          </Text>
        </View>
        <View style={styles.content}>
          <TouchableOpacity onPress={()=>{
            Alert.alert('Without hitslop');
          }}>
          <Text style={styles.label}>Without hitSlop</Text>
          </TouchableOpacity>
          <View style={styles.separator} />
          <TouchableOpacity 
          hitSlop={{top: 20, left: 20, bottom: 20, right: 20}}                    onPress={() => {
            Alert.alert('With hitslop');
          }}>
            <Text style={styles.label}>With hitSlop</Text>
          </TouchableOpacity>
          <KeyboardAvoidingView behavior="padding" style={styles.form}>
          <TextInput
            style={styles.input}
            value={"this.state.email"}
            placeholder="email@example.com"
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            returnKeyType="send"
            onSubmitEditing={this._submit}
            blurOnSubmit={true}
          />
          <View>
            <Button title="Sign Up" onPress={this._submit} />
            <Text style={styles.legal}>
              Some important legal fine print here
              Some important legal fine print here
              Some important legal fine print here
              Some important legal fine print here
            </Text>
          </View>
        </KeyboardAvoidingView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
  },
  header: {
    paddingTop: 44,
    padding: 20,
    backgroundColor: '#336699',
  },
  description: {
    fontSize: 14,
    color: 'white',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 18,
    color: '#336699',
    textAlign: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
  },
  separator: {
    height: 30,
  },
  input: {
    margin: 20,
    marginBottom: 0,
    height: 34,
    paddingHorizontal: 10,
    borderRadius: 4,
    borderColor: '#ccc',
    borderWidth: 1,
    fontSize: 16,
  },
  legal: {
    margin: 10,
    color: '#333',
    fontSize: 12,
    textAlign: 'center',
  },
  form: {
    flex: 1,
    justifyContent: 'space-between',
  },
});
