import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, NavigatorIOS, Text, ScrollView } from 'react-native';

export default class NavigatorIOSApp extends Component {
  render() {
    return (
      <NavigatorIOS initialRoute={{
        component: MyScene,
        title: 'My Initial Scene',
        passProps: { index: 1 }
      }} style={{flex: 1}} translucent={false}/>
    );
  }
}

class MyScene extends Component {
  static propTypes = {
    route: PropTypes.shape({
      title: PropTypes.string.isRequired
    }),
    navigator: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
    this._onForward = this._onForward.bind(this);
  }

  _onForward() {
    let nextIndex = ++this.props.index;
    this.props.navigator.push({
      component: MyScene,
      title: 'Scene' + nextIndex,
      passProps: { index: nextIndex }
    });
  }

  render() {
    return (
      // 用View包裹返回时会报错，用ScrollView包裹可正常运行，貌似是新版的bug。
      // 详情见https://stackoverflow.com/questions/47118487/unsupported-top-level-event-type-topscroll-dispatched
      
      // debugger发现用this.props.route.title才能到title
      // debugger参考：https://reactnative.cn/docs/debugging/
      <ScrollView style={{flex: 1,  backgroundColor: 'red'}} scrollEnabled={false}>
        <Text>Current Scene:{this.props.route.title}</Text>
        <Button onPress={this._onForward} title="点我加载下一页"/>
      </ScrollView>
    );
  }
}