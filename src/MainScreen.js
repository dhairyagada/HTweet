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
        <Header style={{backgroundColor:'#FFFFFF',marginTop:25}}>
            <View style={{flexDirection:'row'}}>
            
                <Thumbnail source={require('./Images/ProfilePic.jpg')} size={10} />

                <Text style={{  alignSelf:'center',
                                fontWeight:'bold', 
                                fontSize:15 , 
                                
                                }}> 
                         Home 
                </Text>
            
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