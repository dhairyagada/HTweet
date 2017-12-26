import React,{Component} from 'react';
import { Image } from 'react-native';
import {Text,
    Left,
    Container,
    Header,
    Content,
    Footer,
    Card,
    CardItem,
    FooterTab,
    Button,
    View,
    Thumbnail,
    Body,
    Right} from 'native-base';
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
            
            <View style={{flexDirection:'row',justifyContent:'space-around', width:340}}>
                    
                <Icon name="home"   color='#5DADE2' size={18}/>
                <Icon name="search" color='#797D7F' size={18}/>
                <Icon name="bell"   color='#797D7F' size={18}/>
                <Icon name="mail"   color='#797D7F' size={18}/>

            </View>
        </Header>
        
        <Content>
                <Card>
                    <CardItem>
                        <Left>
                            <Thumbnail source={require('./Images/User1.jpg')} />
                            <Body>
                                <Text> Madara Uchiha        </Text>
                                <Text note>@UchihaMadara    </Text>
                            </Body>
                        </Left>
                        <Right>
                            <Text note>30 mins ago</Text>
                        </Right>
                    </CardItem>

                    <CardItem>
                        <Body>
                            <Text>Manga Drawing of Madara Uchiha</Text>
                            <Image source={require('./Images/User1Post.jpg')}/>
                        </Body>
                    </CardItem>

                    <CardItem >
                    <Left style={{flex:1}}/>
                    <Body style={{flexDirection:'row',justifyContent:'space-around',flex:6}}>
                    <Icon name="repeat"   color='#5DADE2' size={18}/>
                    <Icon name="message-square" color='#797D7F' size={18}/>
                    <Icon name="heart"   color='#797D7F' size={18}/>
                    <Icon name="mail"   color='#797D7F' size={18}/>  
                    </Body>
                    </CardItem>

                </Card>
        </Content>

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