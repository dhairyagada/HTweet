import React, {Component} from 'react';
import {AppRegistry, Text, View} from 'react-native';
import { Container, Content,Header,Footer } from "native-base";
import Timeline_Head from '../Timeline_Head/Timeline_Head';
import Timeline_Footer from '../Timeline_Footer/Timeline_Footer';
import Timeline_Cards from '../Timeline_Cards/Timeline_Cards';
export default class Timeline extends Component{
    render(){
        return(
          <Container>   
        <Timeline_Head/>
        <Timeline_Cards/>
        <Timeline_Footer/>
        </Container>
        );
    }
}