import React from "react";
import { AppRegistry, Image, StatusBar } from "react-native";
import { Container, Content, Text, List, ListItem } from "native-base";
import Ionicons from 'react-native-vector-icons/Ionicons'; // 4.4.2
const routes = ["Home", "Profile", "Listo"];
/*export default class SideBar extends React.Component {
  render() {
    return (
      <Container>
        <Content>
          
          <List>
           
         
                <ListItem
                  button
                  onPress={() => this.props.navigation.navigate(data.Home)}>
                  <Ionicons
                     name={'ios-home'}
                     size={26}
                    
                    />
                  <Text>Home</Text>
                </ListItem>
                <ListItem
                  button
                  onPress={() => this.props.navigation.navigate(data.Profile)}>
                  <Text>Profile</Text>
                </ListItem>
                <ListItem
                  button
                  onPress={() => this.props.navigation.navigate(data.Listo)}>
                  <Text>List</Text>
                </ListItem>
             
          </List>
        </Content>
      </Container>
    );
  }
}
*/

export default class SideBar extends React.Component {
  render() {

    
    return (
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
    );
  }
}