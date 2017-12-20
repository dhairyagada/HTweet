import React, { Component } from 'react';
import {StyleSheet, View} from 'react-native';
import {Container, Footer, Content, Text, Item } from 'native-base';
import Icon from 'react-native-vector-icons/Feather';
export default class Timeline_Footer extends Component {
  render() {
    return (
       
         <Footer style={{backgroundColor:'#ffffff'}}>
         <Content>
             <View
             style={
                 {
                     flexDirection:'row',
                     alignItems:'center',
                     backgroundColor:'#ffffff'
                     
                 }
             }>

             <Text style={{flex:1}}> All </Text>
             <Text style={{flex:4}}> Mentions </Text>
             <Icon name="settings" style={{flex:1}} />
             </View>  
             </Content>  
         </Footer>
         
     
    );
  }

 
}
