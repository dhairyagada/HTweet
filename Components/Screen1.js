import React, {Component} from 'react';
import Expo from "expo";
import {AppRegistry, Text, View} from 'react-native';
import { Container, Content, Picker, Button } from "native-base";
import Timeline from './Timeline/Timeline';

export default class Screen1 extends Component{

  constructor() {
    super();
    this.state = {
      isReady: false
    };
  }
  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("native-base/Fonts/Ionicons.ttf")
    });
    this.setState({ isReady: true });
  }
  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }
    return(
      <Container>
    <Timeline/>

    </Container>
    
    );
  }
    
}

AppRegistry.registerComponent('htweet', () => htweet);