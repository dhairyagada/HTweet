import React,{Component} from 'react';
import {Text,
    Left,
    Container,
    Header,
    Content,
    Footer,
    Card,
    FooterTab,
    Button,
    View,
    Thumbnail} from 'native-base';
import Icon from 'react-native-vector-icons/Feather';

export default class MainScreen extends Component
{
    render()
    {
        return(
        <Container>
        <Header style={{backgroundColor:'#FFFFFF',
                        marginTop:25,
                        flexDirection:'column',
                        justifyContent:'space-around',
                        height:120}}>
            <View style={{flexDirection:'row',justifyContent:'flex-start', width:360}}>
            
                <Thumbnail source={require('./Images/ProfilePic.jpg')} size={10} />

                <Text style={{  alignSelf:'center',
                                fontWeight:'bold', 
                                fontSize:15 , 
                                paddingLeft:10
                                }}> 
                         Home 
                </Text>
            
            </View>
            
            <View style={{flexDirection:'row',justifyContent:'space-around', width:360}}>
                    
                <Icon name="home"   />
                <Icon name="search" />
                <Icon name="bell"   />
                <Icon name="mail"   />

            </View>
        </Header>
        
        <Content/>

        <Footer style={{height:45}} >
                <FooterTab style={{backgroundColor:'#FFFFFF'}}>
                    <Button style={{flex:1}}>
                        <Text   style={{fontSize:16,color:'#000000'}}> All </Text>
                    </Button>

                    <Button style={{flex:2}}>
                        <Text   style={{fontSize:16,color:'#000000'}}> Mentions </Text>
                    </Button>
                    <Button style={{flex:1}}/>
                    <Button style={{flex:1}}>
                        <Icon name="settings" color='#2874A6' size={20} />
                    </Button>
                </FooterTab>
        </Footer>
        </Container>
        );
    }
}