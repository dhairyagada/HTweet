import React, {Component} from 'react';
import {AppRegistry, Text, View} from 'react-native';
import { Container, Content, Picker, Button } from "native-base";
import Search_Component from './Components/Search_Component/Search_Component';
import Timeline_Head from './Components/Timeline_Head/Timeline_Head';
export default class htweet extends Component{
    render(){
        return(
          <Container>
        <Timeline_Head/>
        </Container>
        );
    }
}

AppRegistry.registerComponent('htweet', () => htweet);