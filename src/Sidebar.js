import React,{Component} from 'react';
import { AppRegistry,StatusBar} from "react-native";
import {Container,
        Content,
        Footer,
        Thumbnail,
        Text,
        Left,
        Right,
        List,
        Button,
        Header,
        View,
        ListItem} from 'native-base';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';



export default class SideBar extends Component{
    render(){
        return(
            <Container>
                <Header style={sty.HeaderStyle}>
                  
                  <Thumbnail source={require('./Images/ProfilePic.jpg')} size={10}/>
                  <Text  style={sty.HeaderUser}> Uchiha Itachi </Text>
                  <Text note> @Itachi.Uchiha </Text>
                  <View style={{flexDirection:'row'}}>
                    <Text> 10 </Text>
                    <Text note> Following </Text>
                    <Text> 1M </Text>
                    <Text note> Followers </Text>
                  </View>

                </Header>

                <Content>
                <List>
                  <ListItem noBorder >
                    <Icon name="user" />
                    <Text style={sty.ListItemTextStyle}> Profile </Text>
                  </ListItem>
                  <ListItem noBorder>
                    <Icon name="list" />
                    <Text style={sty.ListItemTextStyle}> Lists </Text>
                  </ListItem>
                  <ListItem noBorder >
                    <Icon name="zap" />
                    <Text style={sty.ListItemTextStyle}> Moments </Text>
                  </ListItem>
                  <ListItem>
                    <Icon name="copy" />
                    <Text style={sty.ListItemTextStyle}> Highlights </Text>
                  </ListItem>
                  <ListItem noBorder>
                    <Text> Settings and Privacy </Text>
                  </ListItem>
                  <ListItem>
                    <Text> Help Centre </Text>
                  </ListItem>
                </List>
                </Content>
                <Footer style={sty.FooterStyle}>
                  <Left> 
                    <Icon name="moon" color='#5DADE2'style={sty.FooterIconStyle} /> 
                  </Left>
                  <Right> 
                    <Icon name="grid" color='#5DADE2'style={sty.FooterIconStyle} /> 
                  </Right>
                </Footer>
            </Container>
        )
    }
}

const sty=StyleSheet.create({
      HeaderStyle:{backgroundColor:'#FFFFFF',
      marginTop:25,
      flexDirection:'column',
      justifyContent:'space-between',
      height:140
        
      },
      HeaderUser:{
        fontWeight:'bold',
        fontSize:18
      },
      ListItemTextStyle:{
        paddingLeft:10
      },
      FooterStyle:{
        backgroundColor:'#FFFFFF',
      },
      FooterIconStyle:{
        fontSize:20,
        padding:10
      }
});