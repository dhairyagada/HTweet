import React, {Component} from 'react';
import Expo from "expo";
import {AppRegistry, Text, View} from 'react-native';
import { Container, Content, Picker, Button } from "native-base";
import Timeline from './Timeline/Timeline';
//import { StackNavigator } from "react-navigation";
//import SearchScreen from './SearchScreen.js';
export default class Screen1 extends Component{

 
  render() {
    
    return(
      <Container>
    <Timeline/>
    <Button
            full
            rounded
            primary
            style={{ marginTop: 10 }}
            onPress={() => this.props.navigation.navigate("Search")}
          >
            <Text>Search</Text>
          </Button>
    </Container>
    
    );
  }
    
}

//AppRegistry.registerComponent('htweet', () => htweet);