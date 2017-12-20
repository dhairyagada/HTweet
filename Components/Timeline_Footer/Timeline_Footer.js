import React, { Component } from 'react';
import {StyleSheet, View} from 'react-native';
import {Container, Footer, Content, Text, Item } from 'native-base';
import Icon from 'react-native-vector-icons/Feather';
export default class Timeline_Footer extends Component {
  render() {
    return (
     <Container>
         <Footer style={{backgroundColor:'#ffffff'}}>
             <View
             style={
                 {
                     flexDirection:'row',
                     alignItems:'flex-start',
                     backgroundColor:'#ffffff'
                     
                 }
             }>

             <Text style={{
                 textAlign:'left'
             }}> All </Text>
             <Text  style={{justifyContent:'flex-start'}}> Mentions </Text>
             <Icon name="settings" />
             </View>    
         </Footer>
     </Container>
    );
  }

 
}
