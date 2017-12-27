import React,{Component} from 'react';
import {AppRegistry, Image,StatusBar } from 'react-native';
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
import {StyleSheet} from 'react-native';
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
                <Button transparent >   
                <Icon name="home"   color='#5DADE2' size={18}/> 
                </Button>
                <Button transparent onPress={() => this.props.navigation.navigate("Search")}>
                <Icon name="search" color='#797D7F' size={18}/>
                </Button>
                <Button transparent >
                <Icon name="bell"   color='#797D7F' size={18}/>
                </Button>
                <Button transparent >
                <Icon name="mail"   color='#797D7F' size={18}/>
                </Button>
            </View>
        </Header>
        
        <Content>
                <Card>
                    {/*} CardItem1 */}
                    <CardItem>
                        <Left>
                            <Thumbnail source={require('./Images/User1.jpg')} />
                            <Body>
                                <Text> Madara Uchiha</Text>
                                <Text note>@UchihaMadara</Text>
                            </Body>
                        </Left>
                        <Right>
                            <Text note>30 mins ago</Text>
                        </Right>
                    </CardItem>
                     {/*} CardItem2 */}
                    <CardItem>
                    <Left style={sty.cardItem2Left}/>
                    <Body style={sty.cardItem2Body}>
                    <Text >Fan Art of Madara Uchiha</Text>
                    </Body>
                    </CardItem>
                     {/*} CardItem3 */}
                    <CardItem>
                        <Body>
                            <Image source={require('./Images/User1Post.jpg')} resizeMode='contain' 
                            style={sty.cardItem3Image}/>
                        </Body>
                    </CardItem>
                     {/*} CardItem4 */}
                    <CardItem >
                    <Left style={sty.cardItem4Left}/>
                    <Body style={sty.cardItem4Body}>
                    <Button transparent style={sty.cardItem4Button} >
                        <Icon name="repeat"  style={sty.cardItem4Icon} />
                        <Text note style={sty.cardItem4note}>2</Text>
                    </Button>
                    <Button transparent style={sty.cardItem4Button}>
                        <Icon name="message-square" style={sty.cardItem4Icon}/>
                        <Text note style={sty.cardItem4note}>60</Text>
                    </Button>
                    <Button transparent style={sty.cardItem4Button}>
                        <Icon name="heart"   style={sty.cardItem4Icon}/>
                        <Text note style={sty.cardItem4note}>19</Text>
                    </Button>
                    <Button transparent style={sty.cardItem4Button}>
                        <Icon name="mail"   style={sty.cardItem4Icon}/>  
                    </Button>
                    </Body>
                    </CardItem>

                </Card>

                <Card>
                    {/*} CardItem1 */}
                    <CardItem>
                        <Left>
                            <Thumbnail source={require('./Images/User2.jpg')} />
                            <Body>
                                <Text>Akatsuki</Text>
                                <Text note>@Akatsuki</Text>
                            </Body>
                        </Left>
                        <Right>
                            <Text note>45 mins ago</Text>
                        </Right>
                    </CardItem>
                     {/*} CardItem2 */}
                    <CardItem>
                    <Left style={sty.cardItem2Left}/>
                    <Body style={sty.cardItem2Body}>
                    <Text >A group picture of Akatsuki</Text>
                    </Body>
                    </CardItem>
                     {/*} CardItem3 */}
                    <CardItem>
                        <Body>
                            <Image source={require('./Images/User2Post.png')} resizeMode='contain' 
                            style={sty.cardItem3Image}/>
                        </Body>
                    </CardItem>
                     {/*} CardItem4 */}
                    <CardItem >
                    <Left style={sty.cardItem4Left}/>
                    <Body style={sty.cardItem4Body}>
                    <Button transparent style={sty.cardItem4Button} >
                        <Icon name="repeat"  style={sty.cardItem4Icon} />
                        <Text note style={sty.cardItem4note}>2</Text>
                    </Button>
                    <Button transparent style={sty.cardItem4Button}>
                        <Icon name="message-square" style={sty.cardItem4Icon}/>
                        <Text note style={sty.cardItem4note}>60</Text>
                    </Button>
                    <Button transparent style={sty.cardItem4Button}>
                        <Icon name="heart"   style={sty.cardItem4Icon}/>
                        <Text note style={sty.cardItem4note}>19</Text>
                    </Button>
                    <Button transparent style={sty.cardItem4Button}>
                        <Icon name="mail"   style={sty.cardItem4Icon}/>  
                    </Button>
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

const sty=StyleSheet.create(
{
    //CardItem2
        cardItem2Left:{
        flex:1
    },
        cardItem2Body:{
        flex:4
    },
    //CardItem3
        cardItem3Image:{
            paddingRight:20,
            width:400,
            height:200,
            alignSelf:'flex-start'
        },
    //CardItem4
        cardItem4Left:{
            flex:1},
        cardItem4Body:{
            flexDirection:'row',
            justifyContent:'space-around',
            flex:4},
        cardItem4Button:{
            flex:1
        },
        cardItem4Icon:{
            color:'#797D7F',
            fontSize:18
        },
        cardItem4note:{
            paddingLeft:2
        }
});