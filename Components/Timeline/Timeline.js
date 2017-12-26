import React from 'react';
import Expo from "expo";
import {AppRegistry, Text, View} from 'react-native';
import { Container, Content,Header,Footer,Button } from "native-base";
import Timeline_Head from '../Timeline_Head/Timeline_Head';
import Timeline_Footer from '../Timeline_Footer/Timeline_Footer';
import Timeline_Cards from '../Timeline_Cards/Timeline_Cards';
//import { StackNavigator } from "react-navigation";
//import SearchScreen from '../SearchScreen.js';
export default class Timeline extends React.Component{
    render(){
        return(
          <Container>   
        <Timeline_Head/>
       
        <Button
            full
            rounded
            primary
            style={{ marginTop: 10 }}
            onPress={() => this.props.navigation.navigate("Listo")}
          >
            <Text>Search</Text>
          </Button>
        <Timeline_Cards/>
        <Timeline_Footer/>
        </Container>
        );
    }
}