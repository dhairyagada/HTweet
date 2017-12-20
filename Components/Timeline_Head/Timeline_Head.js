import React, { Component } from 'react';
import {StyleSheet, View} from 'react-native';
import {Left, Container, Header, Content, Thumbnail, Text, Item, Input, Button } from 'native-base';
import Icon from 'react-native-vector-icons/Feather';
export default class Timeline_Head extends Component {
  render() {
    return (
      <Header style={sty.headerstyle}>
        <Content style={{paddingTop:30,flexDirection:"row"}}>
        <View style={{flexDirection:"row"}}>
          <Thumbnail source={require('./PPic.jpg')} size={10} style={{flex:1}} />
          <Text style={{
            fontSize:30,
            fontWeight:'bold',
            flex:1,
            paddingLeft:50,
            paddingTop:15
          }}>
            Home
           
          </Text>
          
          </View>
          <View style={
            {flexDirection:'row'}
          }>
            <Icon name='home' color='blue' style={{flex:1}} />
            <Icon name='search'style={{flex:1}}/>
            <Icon name='bell'style={{flex:1}}/>
            <Icon name='mail'style={{flex:1}}/>
          </View>
        </Content>
      </Header>
    );
  }

 
}
const sty = StyleSheet.create({
  headerstyle: {
    backgroundColor:'#ffffff',
    height:120
    
}

});
