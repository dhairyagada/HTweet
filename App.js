import React, {Component} from 'react';
import {AppRegistry, Text, View} from 'react-native';
import { Container, Content, Picker, Button } from "native-base";
import Search_Component from './Components/Search_Component/Search_Component';
import ProfileThumb from './Components/ProfileThumb/ProfileThumb';
export default class htweet extends Component{
    render(){
        return(
          <Container>
        <ProfileThumb/>
        </Container>
        );
    }
}

AppRegistry.registerComponent('htweet', () => htweet);