import React, {Component} from 'react';
import {AppRegistry, Text, View} from 'react-native';
import { Container, Content, Picker, Button } from "native-base";
import Timeline from './Components/Timeline/Timeline';
export default class htweet extends Component{
    render(){
        return(
          <Container>
        <Timeline/>
        </Container>
        );
    }
}

AppRegistry.registerComponent('htweet', () => htweet);