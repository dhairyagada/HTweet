import React from 'react';
import {AppRegistry, Text, View, Header, Left, Button,Icon,Title,Body,Right} from 'react-native';

export default class SearchScreen extends React.Component{
    static navigationOptions = ({ navigation }) => ({
        header: (
          <Header>
            <Left>
              <Button transparent onPress={() => navigation.goBack()}>
                <Icon name="arrow-back" />
              </Button>
            </Left>
            <Body>
              <Title>EditScreenOne</Title>
            </Body>
            <Right />
          </Header>
        )
      });
    render(){
        return(
          <View>
            <Text>Search BAr</Text>
            </View>
        
        );
    }
}

