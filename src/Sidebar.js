import React,{Component} from 'react';
import { AppRegistry,StatusBar} from "react-native";
import {Container,
        Content,
        Text,
        List,
        Button,
        ListItem} from 'native-base';
const routes = ["Home", "Profile", "Lists"];


export default class SideBar extends Component{
    render(){
        return(
            <Container>
                <Content>
                <List
            dataArray={routes}
            renderRow={data => {
              return (
                <ListItem
                  button
                  onPress={() => this.props.navigation.navigate(data)}
                >
                  <Text>{data}</Text>
                </ListItem>
              );
            }}
          />
                </Content>
            </Container>
        )
    }
}